import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import DraftJS from '../draftjs/DraftJS';
import SlateJS from '../slatejs/SlateJS';
import './Editors.css';

class Editors extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.url}/draftjs`} component={DraftJS} />
          <Route path={`${this.props.match.url}/slatejs`} component={SlateJS} />
          <Route
            path={`${this.props.match.url}/`}
            render={() => (
              <div>
                <div className="editors-title">Editors</div>
                <div>
                  <Link to={`${this.props.match.url}/draftjs`}>
                    <div className="editors-item">
                      <div>DraftJS</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/slatejs`}>
                    <div className="editors-item">
                      <div>SlateJS</div>
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

export default Editors;
