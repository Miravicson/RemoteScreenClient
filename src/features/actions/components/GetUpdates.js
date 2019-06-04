import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUpdates, deleteUpdate } from '../actions'


class GetUpdates extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.getUpdates()
  }

  handleDelete(id, event) {
    event.preventDefault()
    this.props.deleteUpdate(id)
  }

  render() {
    const { updates } = this.props
    return (
      <div id='Updates'>
        {updates ? (
          <div className="card px-2 py-2">
            {updates.map(update => (
              <ul class="list-group list-group-horizontal-sm" key={update.id}>
                <li class="list-group-item">{update.title}</li>
                <li class="list-group-item">PMS price:{update.PMS}</li>
                <li class="list-group-item">DPK price: {update.DPK}</li>
                <li class="list-group-item">AGO price: {update.AGO}</li>

                <button
                  className="btn btn-sm mt-2"
                  onClick={this.handleDelete.bind(this, update.id)}
                  id="delete"
                >
                  <small>delete</small>
                </button>
              </ul>
            ))}
          </div>
        ) : (
          <h2>Loading Updates ...</h2>
        )}
      </div>
    )
  }
}

const mapPropsToState = state => ({
  updates: state.update.updates,
})

export default connect(
  mapPropsToState,
  { getUpdates, deleteUpdate }
)(GetUpdates)
