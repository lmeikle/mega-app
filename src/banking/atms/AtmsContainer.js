import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func, string } from 'prop-types';
import { calculateDistance } from '@lmeikle/my-mono-repo-to-single-package';
import { LoadingComponent } from '@lmeikle/my-mono-repo-to-single-package';
import { getAtms, getError, getName, isFetching } from './AtmsSelectors';
import AtmsComponent from './AtmsComponent';
import AtmsActions from './AtmsActions';
import { atmsType } from './AtmsPropTypes';
import getGeolocation from '../../shared/utils/getGeolocation';

/**
 * Renders the list of nearest atms for the selected bank
 */
export class AtmsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      geolocation: null
    };
  }

  static propTypes = {
    atms: atmsType,
    name: string,
    error: string,
    isFetching: bool.isRequired,
    dispatch: func.isRequired
  };

  static defaultProps = {
    atms: null,
    name: null,
    error: null
  };

  static get NEAREST_ATM_QUANTITY() {
    return 10;
  }

  componentDidMount() {
    if (this.props.location.state) {
      let { name, url } = this.props.location.state;
      if (url) {
        getGeolocation().then(geolocation => this.setState({ geolocation }));

        this.props.dispatch(AtmsActions.getAtms(name, url));

        return;
      }
    }

    // else go the default screen
    this.props.history.replace('/banking');
  }

  static findNearestATMs(geolocation, atms, size) {
    if (atms && geolocation) {
      let atmsWithDistance = atms.map(atm => ({
        ...atm,
        distance: calculateDistance(
          geolocation.coords.latitude,
          geolocation.coords.longitude,
          parseFloat(atm.coords.Latitude, 10),
          parseFloat(atm.coords.Longitude, 10)
        )
      }));

      atmsWithDistance.sort((a, b) => {
        if (a.distance < b.distance) return -1;
        if (a.distance > b.distance) return 1;
        return 0;
      });

      return atmsWithDistance.slice(0, size);
    }

    return null;
  }

  render() {
    const { name, atms, error, isFetching } = this.props;
    const { geolocation } = this.state;

    if (error) {
      return (
        <div className="errorMessage">
          Failed to find nearest {name} ATM's due to: {error.toString()}
        </div>
      );
    }

    // filter the atm data
    let nearestAtms = AtmsContainer.findNearestATMs(geolocation, atms, AtmsContainer.NEAREST_ATM_QUANTITY);
    if (isFetching || !nearestAtms) {
      return <LoadingComponent />;
    }

    return (
      <div className="atms-container">
        <div>
          The {AtmsContainer.NEAREST_ATM_QUANTITY} nearest {name} ATM's are:
        </div>
        {nearestAtms.map(atm => (
          <AtmsComponent key={atm.identification} {...atm} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    atms: getAtms(state),
    name: getName(state),
    error: getError(state),
    isFetching: isFetching(state)
  };
};

export default connect(mapStateToProps)(AtmsContainer);
