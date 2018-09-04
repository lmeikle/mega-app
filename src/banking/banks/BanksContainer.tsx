import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LoadingComponent } from '@lmeikle/my-mono-repo-to-single-package';
import { StoreStateProps } from '../../configureStore';
import { getBanksWithAtmAPI, isFetching } from './BanksSelectors';
import { getBanks } from './BanksActions';
import BanksComponent from './BanksComponent';
import { BankProps, BanksActionsProps } from './BanksTypes';

// Separate state props + dispatch props to their own interfaces.
// Props passed from mapStateToProps
type PropsFromState = {
  banksWithAtmAPI: Array<BankProps>;
  isFetching: boolean;
};

// Props passed from mapDispatchToProps
type PropsFromDispatch = {
  getBanks: () => void;
};

// Component-specific props.
type OtherProps = {};

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type Props = PropsFromState & PropsFromDispatch & OtherProps;

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

export function mapDispatchToProps(dispatch: Dispatch<BanksActionsProps>) {
  return {
    getBanks: () => dispatch(getBanks())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BanksContainer);
