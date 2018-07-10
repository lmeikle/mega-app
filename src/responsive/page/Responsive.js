import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ReactResponsive from '../react-responsive/ReactResponsive';
import StyledComponents from '../styled-components/StyledComponents';
import HigherOrderComponent from '../higher-order-component/HigherOrderComponent';
import ReactSentinel from '../react-sentinel/ReactSentinel';
import './Responsive.css';

class Responsive extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.url}/react-responsive`} component={ReactResponsive} />
          <Route path={`${this.props.match.url}/styled-components`} component={StyledComponents} />
          <Route path={`${this.props.match.url}/higher-order-component`} component={HigherOrderComponent} />
          <Route path={`${this.props.match.url}/react-sentinel`} component={ReactSentinel} />
          <Route
            path={`${this.props.match.url}/`}
            render={() => (
              <div>
                <div className="responsive-title">Some different ways to handle responsiveness</div>
                <div>
                  <Link to={`${this.props.match.url}/react-responsive`}>
                    <div className="responsive-item">
                      <div>Responsive example using react-responsive</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/styled-components`}>
                    <div className="responsive-item">
                      <div>Responsive example using styled-components</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/higher-order-component`}>
                    <div className="responsive-item">
                      <div>Responsive example using a HOC</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/react-sentinel`}>
                    <div className="responsive-item">
                      <div>Responsive example using a React Sentinel (element queries)</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Responsive;
