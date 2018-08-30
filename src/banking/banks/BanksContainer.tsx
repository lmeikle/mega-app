import React, { Component } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { LoadingComponent } from '@lmeikle/my-mono-repo-to-single-package';
import { StoreStateProps } from '../../index';
import { getBanksWithAtmAPI, isFetching } from './BanksSelectors';
import * as BanksActions from './BanksActions';
import BanksComponent from './BanksComponent';
import { BankProps } from './BanksPropTypes';

interface Props extends DispatchProp {
  banksWithAtmAPI: Array<BankProps>;
  isFetching: boolean;
}

/**
 * Renders a list of banks listed in the that have an ATM API
 */
export class BanksContainer extends Component<Props, object> {
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

const mapStateToProps = (state: StoreStateProps) => {
  return {
    banksWithAtmAPI: getBanksWithAtmAPI(state),
    isFetching: isFetching(state)
  };
};

export default connect(mapStateToProps)(BanksContainer);
