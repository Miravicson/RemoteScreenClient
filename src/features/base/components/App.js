import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Header } from '../../header'
import { Locations, Updates } from '../../actions/'
import { States } from '../../state'
import { Actions } from '../../actions'
import { SideBar } from '../../sidebar'
import { Home } from '../../home'
import { Login } from '../../auth'
import axios from 'axios'

// Initializing Axios Defaults
function getToken() {
  return sessionStorage.getItem('remote-screen-token')
    ? JSON.parse(sessionStorage.getItem('remote-screen-token'))
    : ''
}
axios.interceptors.request.use(
  async config => {
    const token = await getToken() // slightly longer running function than example above
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// Configuring Axios Defaults
axios.defaults.baseURL = process.env.REACT_APP_FLASK_API
// axios.defaults.headers.post['Content-Type'] = 'application/json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarState: false,
    }
  }

  render() {
    return (
      <Router>
        <div style={{ margin: '0', padding: '0' }}>
          {this.props.isAuthenticated ? (
            <React.Fragment>
              <SideBar />
              <Header />
            </React.Fragment>
          ) : null}

          {this.props.isAuthenticated ? null : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: this.props.location },
              }}
            />
          )}

          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/location" component={Locations} />
            <Route exact path="/update" component={Updates} />
            <Route exact path="/state" component={States} />
            <Route exact path="/create" component={Actions} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  const appState = state['auth']
  return {
    isAuthenticated: appState.isAuthenticated,
  }
}

export default connect(mapStateToProps)(App)
