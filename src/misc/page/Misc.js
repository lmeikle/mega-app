import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Canvas from '../canvas/Canvas';
import CommentFeedContainer from '../commentfeed/CommentFeedContainer';
import './Misc.css';

class Misc extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.url}/canvas`} component={Canvas} />
          <Route path={`${this.props.match.url}/commentfeed`} component={CommentFeedContainer} />
          <Route
            path={`${this.props.match.url}/`}
            render={() => (
              <div>
                <div className="misc-title">Misc</div>
                <div>
                  <Link to={`${this.props.match.url}/canvas`}>
                    <div className="misc-item">
                      <div>Canvas</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/commentfeed`}>
                    <div className="misc-item">
                      <div>Comment Feed - tested using react-test-library</div>
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

export default Misc;
