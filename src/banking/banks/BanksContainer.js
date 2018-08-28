import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoadingComponent } from '@lmeikle/my-mono-repo-to-single-package';
import { getBanksWithAtmAPI, isFetching } from './BanksSelectors';
import BanksActions from './BanksActions';
import BanksComponent from './BanksComponent';
//import { BanksWithAtmAPI } from './BanksPropTypes';

//type Props = {
//  banksWithAtmAPI: BanksWithAtmAPI,
//  isFetching: boolean,
//  dispatch: Function
//};

/**
 * Renders a list of banks listed in the that have an ATM API
 */
export class BanksContainer extends Component {
  static defaultProps = {
    banksWithAtmAPI: []
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
      <div className="banks-container">
        <div>Please select a bank</div>
        {banksWithAtmAPI.map(bank => (
          <BanksComponent key={bank.name} {...bank} />
        ))}
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
