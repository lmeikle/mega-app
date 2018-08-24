import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Portal from '../portal/Portal';
import Context from '../context/Context';
import CodeSplitting from '../codesplitting/CodeSplitting';
import RenderProps from '../renderprops/RenderProps';
import HigherOrderComponent from '../higherordercomponent/HigherOrderComponent';
import MixingComponentPatterns from '../mixingcomponentpatterns/MixingComponentPatterns';
import FruitAutocomplete from '../fruitautocomplete/FruitAutocomplete';
import ErrorBoundaryExample from '../errorboundary/ErrorBoundaryExample';
import Fragments from '../fragments/Fragments';
import CompountComponents from '../compoundcomponents/CompountComponents';
import icon from './icon.svg';
import './ReactPlayground.css';

class ReactPlayground extends Component {
  render() {
    return (
      <div style={{ overflow: 'auto', height: '100%' }}>
        <img src={icon} className="react-playground-icon" alt="icon" />
        <Switch>
          <Route path={`${this.props.match.url}/portal`} component={Portal} />
          <Route path={`${this.props.match.url}/context`} component={Context} />
          <Route path={`${this.props.match.url}/codesplitting`} component={CodeSplitting} />
          <Route path={`${this.props.match.url}/renderprops`} component={RenderProps} />
          <Route path={`${this.props.match.url}/higherordercomponent`} component={HigherOrderComponent} />
          <Route path={`${this.props.match.url}/mixingcomponentpatterns`} component={MixingComponentPatterns} />
          <Route path={`${this.props.match.url}/fruitautocomplete`} component={FruitAutocomplete} />
          <Route path={`${this.props.match.url}/errorboundary`} component={ErrorBoundaryExample} />
          <Route path={`${this.props.match.url}/fragments`} component={Fragments} />
          <Route path={`${this.props.match.url}/compoundcomponents`} component={CompountComponents} />
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
                  <Link to={`${this.props.match.url}/codesplitting`}>
                    <div className="react-playground-item">
                      <div>Code Splitting</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/renderprops`}>
                    <div className="react-playground-item">
                      <div>Render Props</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/higherordercomponent`}>
                    <div className="react-playground-item">
                      <div>Higher Order Component</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/mixingcomponentpatterns`}>
                    <div className="react-playground-item">
                      <div>Mixing Component Patterns</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/fruitautocomplete`}>
                    <div className="react-playground-item">
                      <div>Fruit Autocomplete showing how to test components that use render props</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/errorboundary`}>
                    <div className="react-playground-item">
                      <div>Error Boundary Example</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/fragments`}>
                    <div className="react-playground-item">
                      <div>Fragments Example</div>
                    </div>
                  </Link>
                  <Link to={`${this.props.match.url}/compoundcomponents`}>
                    <div className="react-playground-item">
                      <div>Compount Components Example</div>
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
