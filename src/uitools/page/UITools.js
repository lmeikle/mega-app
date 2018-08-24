import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import DraftJS from '../draftjs/DraftJS';
import SlateJS from '../slatejs/SlateJS';
import ReactWindow from '../reactwindow/ReactWindow';
import ToastUI from '../toastui/ToastUI';
import ReactSelect from '../reactselect/ReactSelect';
import ReactVirtualized from '../reactvirtualized/ReactVirtualized';
import ReactMove from '../reactmove/ReactMove';
import ReactVis from '../reactvis/ReactVis';
import ReactToastify from '../react-toastify/ReactToastify';
import ReactToastNotifications from '../react-toast-notifications/ReactToastNotifications';
import './UITools.css';

class UITools extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path={`${this.props.match.url}/draftjs`} component={DraftJS} />
          <Route path={`${this.props.match.url}/slatejs`} component={SlateJS} />
          <Route path={`${this.props.match.url}/reactwindow`} component={ReactWindow} />
          <Route path={`${this.props.match.url}/toastui`} component={ToastUI} />
          <Route path={`${this.props.match.url}/reactselect`} component={ReactSelect} />
          <Route path={`${this.props.match.url}/reactvirtualized`} component={ReactVirtualized} />
          <Route path={`${this.props.match.url}/reactmove`} component={ReactMove} />
          <Route path={`${this.props.match.url}/reactvis`} component={ReactVis} />
          <Route path={`${this.props.match.url}/react-toastify`} component={ReactToastify} />
          <Route path={`${this.props.match.url}/react-toast-notifications`} component={ReactToastNotifications} />
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
                  <Link to={`${this.props.match.url}/reactvirtualized`}>
                    <div className="ui-tools-item">
                      <div>ReactVirtualized - for efficiently rendering large lists and tabular data.</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/reactmove`}>
                    <div className="ui-tools-item">
                      <div>ReactMove - Beautiful, data-driven animations for React.</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/reactvis`}>
                    <div className="ui-tools-item">
                      <div>ReactVis - Data-Visualization oriented components.</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/react-toastify`}>
                    <div className="ui-tools-item">
                      <div>React Toastify - allow you to add notification to your app with ease.</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/react-toast-notifications`}>
                    <div className="ui-tools-item">
                      <div>React Toast Notifications - another one.</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default UITools;
