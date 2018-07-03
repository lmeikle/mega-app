import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBanksWithAtmAPI } from './BanksSelectors';
import BanksActions from './BanksActions';
import BanksComponent from './BanksComponent';
import LoadingComponent from '../../shared/loading/LoadingComponent';

/**
 * Renders a list of banks listed in the that have an ATM API
 */
class BanksContainer extends Component {
  componentDidMount() {
    this.props.dispatch(BanksActions.getBanks());
  }

  render() {
    const { banksWithAtmAPI } = this.props;

    if (!banksWithAtmAPI) {
      return <LoadingComponent />;
    }

    return (
      <div>
        <div>Please select a bank</div>
        {banksWithAtmAPI.map(bank => <BanksComponent key={bank.name} {...bank} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    banksWithAtmAPI: getBanksWithAtmAPI(state)
  };
};

export default connect(mapStateToProps)(BanksContainer);
