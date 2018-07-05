import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import LoadingComponent from '..//shared/loading/LoadingComponent';
import './App.css';

const Banking = Loadable({
  loader: () => import('../banking/page/Banking'),
  loading: LoadingComponent
});

const Forms = Loadable({
  loader: () => import('../forms/page/Forms'),
  loading: LoadingComponent
});

const ReactPlayground = Loadable({
  loader: () => import('../reactplayground/page/ReactPlayground'),
  loading: LoadingComponent
});

const News = Loadable({
  loader: () => import('../news/NewsContainer'),
  loading: LoadingComponent
});

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/banking" component={Banking} />
            <Route path="/forms" component={Forms} />
            <Route path="/reactplayground" component={ReactPlayground} />
            <Route path="/news" component={News} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
