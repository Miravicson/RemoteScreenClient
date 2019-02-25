import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocations, deleteLocation } from '../../actions/locationActions'

class GetLocations extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidUpdate() {
    // this.props.getLocations()
  }

  componentDidMount() {
    this.props.getLocations()
  }

  handleDelete(id, event) {
    event.preventDefault()
    this.props.deleteLocation(id)
  }

  render() {
    const { locations } = this.props
    return (
      <div>
        {locations ? (
          <ul>
            {locations.map(location => (
              <li key={location.id}>
                {location.name}{' '}
                <span className="float-right">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.handleDelete.bind(this, location.id)}
                  >
                    <small>delete</small>
                  </button>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <h2>Loading locations ...</h2>
        )}
      </div>
    )
  }
}

const mapPropsToState = state => ({
  locations: state.location.locations,
})

export default connect(
  mapPropsToState,
  { getLocations, deleteLocation }
)(GetLocations)
