import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadingComponent } from '@lmeikle/simple-loading-spinner';
import DetectLayout from '../responsive/higher-order-component/DetectLayout';
import Home from '../home/Home';
import SideMenu from '../sidemenu/SideMenu';
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

const Responsive = Loadable({
  loader: () => import('../responsive/page/Responsive'),
  loading: LoadingComponent
});

const Misc = Loadable({
  loader: () => import('../misc/page/Misc'),
  loading: LoadingComponent
});

const UITools = Loadable({
  loader: () => import('../uitools/page/UITools'),
  loading: LoadingComponent
});

class App extends Component {
  render() {
    const { isSmallLayout } = this.props;

    return (
      <div className="app">
        <Router>
          <div className="app-wrapper">
            {!isSmallLayout && <SideMenu config={getConfig()} />}
            <div className="app-page-container">
              <Switch>
                <Route path="/banking" component={Banking} />
                <Route path="/forms" component={Forms} />
                <Route path="/reactplayground" component={ReactPlayground} />
                <Route path="/news" component={News} />
                <Route path="/responsive" component={Responsive} />
                <Route path="/misc" component={Misc} />
                <Route path="/uitools" component={UITools} />
                <Route path="/home" render={() => <Home config={getConfig()} />} />
                <Route render={() => <Home config={getConfig()} />} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default DetectLayout(App);

export function getConfig() {
  return [
    {
      path: '/home',
      name: 'Home',
      className: 'home'
    },
    {
      path: '/banking',
      name: 'Banking',
      className: 'banking'
    },
    {
      path: '/forms',
      name: 'Forms',
      className: 'forms'
    },
    {
      path: '/reactplayground',
      name: 'React Playground',
      className: 'react-playground'
    },
    {
      path: '/news',
      name: 'News',
      className: 'news'
    },
    {
      path: '/responsive',
      name: 'Responsive',
      className: 'responsive'
    },
    {
      path: '/uitools',
      name: 'UI Tools',
      className: 'uitools'
    },
    {
      path: '/misc',
      name: 'Misc',
      className: 'misc'
    }
  ];
}
