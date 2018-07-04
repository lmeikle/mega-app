import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Portal from '../portal/Portal';
import Context from '../context/Context';
import icon from './icon.svg';
import './ReactPlayground.css';

class ReactPlayground extends Component {
  render() {
    return (
      <div>
        <img src={icon} className="react-playground-icon" alt="icon" />
        <Switch>
          <Route path={`${this.props.match.url}/portal`} component={Portal} />
          <Route path={`${this.props.match.url}/context`} component={Context} />
          <Route
            path={`${this.props.match.url}/`}
            render={() => (
              <div>
                <div className="react-playground-title">React Playground</div>
                <div>
                  <Link to={`${this.props.match.url}/portal`}>
                    <div className="react-playground-item">
                      <div>Portal</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/context`}>
                    <div className="react-playground-item">
                      <div>Context</div>
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

export default ReactPlayground;
