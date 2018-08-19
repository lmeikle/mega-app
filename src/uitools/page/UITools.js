import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import DraftJS from '../draftjs/DraftJS';
import SlateJS from '../slatejs/SlateJS';
import ReactWindow from '../reactwindow/ReactWindow';
import ToastUI from '../toastui/ToastUI';
import ReactSelect from '../reactselect/ReactSelect';
import './UITools.css';

class UITools extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.url}/draftjs`} component={DraftJS} />
          <Route path={`${this.props.match.url}/slatejs`} component={SlateJS} />
          <Route path={`${this.props.match.url}/reactwindow`} component={ReactWindow} />
          <Route path={`${this.props.match.url}/toastui`} component={ToastUI} />
          <Route path={`${this.props.match.url}/reactselect`} component={ReactSelect} />
          <Route
            path={`${this.props.match.url}/`}
            render={() => (
              <div>
                <div className="ui-tools-title">UI Tools</div>
                <div>
                  <Link to={`${this.props.match.url}/draftjs`}>
                    <div className="ui-tools-item">
                      <div>DraftJS - A framework for building rich text editors in React</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/slatejs`}>
                    <div className="ui-tools-item">
                      <div>SlateJS - A completely customizable framework for building rich text editors.</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/reactwindow`}>
                    <div className="ui-tools-item">
                      <div>ReactWindow - React components for efficiently rendering large lists and tabular data</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/toastui`}>
                    <div className="ui-tools-item">
                      <div>ToastUI - A powerful widget which allows you to visualize and edit data via its table representation.</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/reactselect`}>
                    <div className="ui-tools-item">
                      <div>
                        ReactSelect - A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable
                        support.
                      </div>
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

export default UITools;
