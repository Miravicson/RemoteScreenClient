import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { getStates } from '../actions/stateActions'
import { connect } from 'react-redux'

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
      <div className="row">
        <div className="col-sm-10 mx-auto col-md-8">
          {states ? (
            <ListGroup>
              {states.map(state => (
                <ListGroupItem key={state.id}>{state.name} State</ListGroupItem>
              ))}
            </ListGroup>
          ) : (
            <h2>Loading States ...</h2>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  states: state.state.states,
})


export default connect(
  mapStateToProps,
  {getStates}
)(States)
