import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import DraftJS from '../draftjs/DraftJS';
import SlateJS from '../slatejs/SlateJS';
import ReactWindow from '../reactwindow/ReactWindow';
import ToastUI from '../toastui/ToastUI';
import './Editors.css';

class Editors extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.url}/draftjs`} component={DraftJS} />
          <Route path={`${this.props.match.url}/slatejs`} component={SlateJS} />
          <Route path={`${this.props.match.url}/reactwindow`} component={ReactWindow} />
          <Route path={`${this.props.match.url}/toastui`} component={ToastUI} />
          <Route
            path={`${this.props.match.url}/`}
            render={() => (
              <div>
                <div className="editors-title">Editors</div>
                <div>
                  <Link to={`${this.props.match.url}/draftjs`}>
                    <div className="editors-item">
                      <div>DraftJS - A framework for building rich text editors in React</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/slatejs`}>
                    <div className="editors-item">
                      <div>SlateJS - A completely customizable framework for building rich text editors.</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/reactwindow`}>
                    <div className="editors-item">
                      <div>ReactWindow - React components for efficiently rendering large lists and tabular data</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/toastui`}>
                    <div className="editors-item">
                      <div>ToastUI - A powerful widget which allows you to visualize and edit data via its table representation.</div>
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
