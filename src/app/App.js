import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Banking from "../banking/page/Banking"
import Home from "../home/Home"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/banking" component={Banking} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
