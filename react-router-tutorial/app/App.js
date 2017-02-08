import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
              <Route path='/' component={Home} />
              <Route path='/address' component={Address} />
              <Route path='*' component={NotFound} />
            </Router>
        )
    }
}

const Home = () => <h1> I am home </h1>
const Address = () => <h2> my address whoop whoop </h2>
const NotFound = () => <h3> Not found... :( </h3>

export default App
