import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../actions'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { username, password } = this.state
    const { dispatch } = this.props

    if (username && password) {
      dispatch(signInUser({ username, password }))
    }
  }

  render() {
    const { isAuthenticated } = this.props

    let element = (
      <div>
        <div className="login">
          <header>
            <h1 className="logo">Remote Screen</h1>
          </header>
          <main>
            <div className="text-center mb-5">
              <h1 className="form-title">Sign In</h1>
              <h3>Please enter your credentials to proceed.</h3>
            </div>
            <form onSubmit={this.handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="username">USERNAME</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.username}
                  type="username"
                  autoComplete="username"
                  className="form-control"
                  name="username"
                  placeholder="E.g miravicson"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">PASSWORD</label>

                <input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  type="password"
                  autoComplete="current-password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-block btn-lg btn-theme">
                SUBMIT
              </button>
            </form>
          </main>
        </div>
      </div>
    )
    if (isAuthenticated) {
      element = <Redirect to="/" />
    }
    return element
  }
}

function mapStateToProps(state) {
  const appState = state['auth']
  return {
    isAuthenticated: appState.isAuthenticated,
  }
}

export default connect(mapStateToProps)(Login)
