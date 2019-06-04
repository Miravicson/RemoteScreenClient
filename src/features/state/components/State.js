import React, { Component } from 'react'
import { getStates } from '../actions'
import { connect } from 'react-redux'
import { Layout } from '../../layout/'

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
