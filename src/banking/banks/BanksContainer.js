import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { getBanksWithAtmAPI, isFetching } from './BanksSelectors';
import BanksActions from './BanksActions';
import BanksComponent from './BanksComponent';
import { banksWithAtmAPIType } from './BanksPropTypes';
import LoadingComponent from '../../shared/loading/LoadingComponent';

/**
 * Renders a list of banks listed in the that have an ATM API
 */
class BanksContainer extends Component {
  static propTypes = {
    banksWithAtmAPI: banksWithAtmAPIType,
    isFetching: bool.isRequired,
    dispatch: func.isRequired
  };

  static defaultProps = {
    banksWithAtmAPI: null
  };

  componentDidMount() {
    this.props.dispatch(BanksActions.getBanks());
  }

  render() {
    const { banksWithAtmAPI, isFetching } = this.props;

    if (isFetching) {
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
    banksWithAtmAPI: getBanksWithAtmAPI(state),
    isFetching: isFetching(state)
  };
};

export default connect(mapStateToProps)(BanksContainer);
