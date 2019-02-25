import React, { Component } from 'react'
import { getStates } from '../actions/stateActions'
import { connect } from 'react-redux'
import Layout from '../components/layout'

class States extends Component {
  constructor() {
    super()
    this.state = {
      states: null,
    }
  }

  componentDidMount() {
    this.props.getStates()
  }

  render() {
    const { states } = this.props
    console.log(states)
    return (
      <Layout>
        {states ? (
          <ul>
            {states.map(state => (
              <li key={state.id}>{state.name} State</li>
            ))}
          </ul>
        ) : (
          <h2>Loading States ...</h2>
        )}
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  states: state.state.states,
})

export default connect(
  mapStateToProps,
  { getStates }
)(States)
