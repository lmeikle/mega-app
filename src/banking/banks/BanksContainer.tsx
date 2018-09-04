import React, { Component } from 'react';
import { Dispatch } from 'redux';
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
  getBanks: () => void;
}

/**
 * Renders a list of banks listed in the that have an ATM API
 */
export class BanksContainer extends Component<Props, object> {
  static defaultProps = {
    banksWithAtmAPI: []
  };

  componentDidMount() {
    this.props.getBanks();
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

export function mapDispatchToProps(dispatch: Dispatch<BanksActions.BanksActionsProps>) {
  return {
    getBanks: () => dispatch(BanksActions.getBanks())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BanksContainer);
