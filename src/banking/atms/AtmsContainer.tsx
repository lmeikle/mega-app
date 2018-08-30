import React, { Component } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { calculateDistance } from '@lmeikle/my-mono-repo-to-single-package';
import { LoadingComponent } from '@lmeikle/my-mono-repo-to-single-package';
import { StoreStateProps } from '../../index';
import { getAtms, getErrorMessage, getName, isFetching } from './AtmsSelectors';
import AtmsComponent from './AtmsComponent';
import * as AtmsActions from './AtmsActions';
import { AtmProps } from './AtmsPropTypes';
import getGeolocation from '../../shared/utils/getGeolocation';

type MatchParams = {};
interface IProps extends DispatchProp, RouteComponentProps<MatchParams> {
  atms: Array<AtmProps>;
  name?: string;
  errorMessage?: string;
  isFetching: boolean;
}

interface IState {
  geolocation?: object;
}

/**
 * Renders the list of nearest atms for the selected bank
 */
export class AtmsContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      geolocation: undefined
    };
  }

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

  static findNearestATMs(geolocation: any, atms: Array<AtmProps>, size: number) {
    if (atms && geolocation) {
      let atmsWithDistance = atms.map((atm: AtmProps) => ({
        ...atm,
        distance: calculateDistance(
          geolocation.coords.latitude,
          geolocation.coords.longitude,
          parseFloat(atm.coords.Latitude),
          parseFloat(atm.coords.Longitude)
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
    const { name, atms, errorMessage, isFetching } = this.props;
    const { geolocation } = this.state;

    if (errorMessage) {
      return (
        <div className="errorMessage">
          Failed to find nearest {name} ATM's due to: {errorMessage}
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
        {nearestAtms.map((atm: AtmProps) => (
          <AtmsComponent key={atm.identification} {...atm} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreStateProps) => {
  return {
    atms: getAtms(state),
    name: getName(state),
    errorMessage: getErrorMessage(state),
    isFetching: isFetching(state)
  };
};

export default connect(mapStateToProps)(AtmsContainer);
