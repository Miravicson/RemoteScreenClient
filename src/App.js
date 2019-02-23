import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/'
import Footer from './components/footer'
import Locations from './pages/Location/Locations'
import States from './pages/States'
import Updates from './pages/Updates';

const Home = () => (
  <div className="App">
    <h1>Welcome Home</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/location" component={Locations} />
                <Route exact path="/update" component={Updates} />
                <Route exact path="/state" component={States} />
              </Switch>
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
