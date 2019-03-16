import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Canvas from '../canvas/Canvas';
import CommentFeedContainer from '../commentfeed/CommentFeedContainer';
import JQuery from '../jquery/JQuery';
import JQGrid from '../jqgrid/JQGrid';
import JQGridEdit from '../jqgrid/JQGridEdit';
import NPMPackages from '../npmpackages/NPMPackages';
import Regex from '../regex/Regex';
import ReactIntl from '../reactintl/ReactIntl';
import SemanticTheming from '../semantictheming/SemanticTheming';
import StyledComponents from '../styledcomponents/StyledComponents';
import StyledComponentsDebuggable from '../styledcomponents/StyledComponentsDebuggable';
import JokeGenerator from '../jokegenerator/JokeGenerator';
import Tree from '../treeview/Tree';
import ShoeStore from '../shoestore/ShoeStore';
import SwipeableList from '../swipeablelist/SwipeableList';
import './Misc.css';

class Misc extends Component {
  render() {
    return (
      <div style={{ overflow: 'auto', height: '100%' }}>
        <Switch>
          <Route path={`${this.props.match.url}/canvas`} component={Canvas} />
          <Route path={`${this.props.match.url}/commentfeed`} component={CommentFeedContainer} />
          <Route path={`${this.props.match.url}/jquery`} component={JQuery} />
          <Route path={`${this.props.match.url}/jqgrid`} component={JQGrid} />
          <Route path={`${this.props.match.url}/jqgrid-edit`} component={JQGridEdit} />
          <Route path={`${this.props.match.url}/npmpackages`} component={NPMPackages} />
          <Route path={`${this.props.match.url}/regex`} component={Regex} />
          <Route path={`${this.props.match.url}/reactintl`} component={ReactIntl} />
          <Route path={`${this.props.match.url}/semantictheming`} component={SemanticTheming} />
          <Route path={`${this.props.match.url}/styledcomponents`} component={StyledComponents} />
          <Route path={`${this.props.match.url}/styledcomponentsdebuggable`} component={StyledComponentsDebuggable} />
          <Route path={`${this.props.match.url}/treeview`} component={Tree} />
          <Route path={`${this.props.match.url}/jokegenerator`} component={JokeGenerator} />
          <Route path={`${this.props.match.url}/shoestore`} component={ShoeStore} />
          <Route path={`${this.props.match.url}/swipeablelist`} component={SwipeableList} />
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
                  <Link to={`${this.props.match.url}/jquery`}>
                    <div className="misc-item">
                      <div>jquery</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/jqgrid`}>
                    <div className="misc-item">
                      <div>jqGrid Basic Example</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/jqgrid-edit`}>
                    <div className="misc-item">
                      <div>jqGrid Add, Edit and Delete Examplet</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/npmpackages`}>
                    <div className="misc-item">
                      <div>NPM Packages (my own public and private packages)</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/regex`}>
                    <div className="misc-item">
                      <div>Regex</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/reactintl`}>
                    <div className="misc-item">
                      <div>ReactIntl - an API to format dates, numbers, and strings, including pluralization and handling translations.</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/semantictheming`}>
                    <div className="misc-item">
                      <div>Semantic Theming</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/styledcomponents`}>
                    <div className="misc-item">
                      <div>Styled Components</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/styledcomponentsdebuggable`}>
                    <div className="misc-item">
                      <div>Styled Components - Debuggable alternative</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/treeview`}>
                    <div className="misc-item">
                      <div>Tree View</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/jokegenerator`}>
                    <div className="misc-item">
                      <div>Joke Generator - to practice TDD</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/shoestore`}>
                    <div className="misc-item">
                      <div>Shoe Store - to practice TDD</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/swipeablelist`}>
                    <div className="misc-item">
                      <div>Swipeable List</div>
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
