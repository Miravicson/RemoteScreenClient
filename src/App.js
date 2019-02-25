import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/'
import Footer from './components/footer'
import Locations from './pages/Location/Locations'
import States from './pages/States'
import Actions from './pages/Actions'
import Updates from './pages/Update/Updates'
import SideBar from './components/sidebar'
import Home from './pages/Home'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarState: false,
    }
  }

  componentDidUpdate() {
    console.log(this.state.sidebarState)
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{margin: '0', padding: '0'}}>
            <Header />
            <SideBar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/location" component={Locations} />
              <Route exact path="/update" component={Updates} />
              <Route exact path="/state" component={States} />
              <Route exact path="/create" component={Actions} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
