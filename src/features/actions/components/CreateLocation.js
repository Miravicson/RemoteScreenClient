import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getLgas } from '../actions'
import { getStates } from '../../state/actions'
import { addLocation, getLocations } from '../actions'

class CreateLocation extends Component {
  constructor() {
    super()
    this.state = {
      lga: '',
      state: '',
      location: '',
      ready: false,
      errors: {},
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makePost = this.makePost.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.makePost()
  }

  componentDidMount() {
    this.props.getStates()
    this.props.getLgas()
    this.setState({ ready: true })
  }

  makePost() {
    const { location, lga, state } = this.state

    if (location === '') {
      this.setState({ errors: { location: 'Location is required' } })
      return
    }

    if (lga === '') {
      this.setState({ errors: { lga: 'Local Government Area is required' } })
      return
    }
    if (state === '') {
      this.setState({ errors: { state: 'State is required' } })
      return
    }

    const payload = {
      name: this.state.location,
      lga_id: this.state.lga,
    }
    this.props.addLocation(payload)
    this.setState({
      lga: '',
      state: '',
      location: '',
      ready: true,
    })
  }

  render() {
    const { location, lga, state, ready, errors } = this.state
    const { lgas, states } = this.props
    let options = null

    if (state) {
      let filteredLgas = lgas.filter(lga => lga.state === Number(state))
      options = filteredLgas.map((lga, key) => (
        <option value={lga.id} key={key}>
          {lga.name}
        </option>
      ))
    }

    return (
      <div>
        {ready ? (
          <form onSubmit={this.handleSubmit} className="form">
            <h2 className="form-title">Add Location</h2>
            <div className="form-group">
              <label htmlFor="location">
                Location Address &nbsp;<sup>*</sup>
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Location"
                onChange={this.handleChange}
                value={location}
                className={classnames('form-control', {
                  'is-invalid': errors.location,
                })}
              />
              {errors.location && (
                <div className="is-invalid">{errors.location}</div>
              )}
            </div>
            <div className="form-group">
              <select
                className={classnames('form-control', {
                  'is-invalid': errors.state,
                })}
                type="select"
                name="state"
                id="state"
                value={state}
                onChange={this.handleChange}
              >
                <option value="" default disabled>
                  Select State
                </option>
                {states.map((state, key) => (
                  <option value={state.id} key={key}>
                    {state.name}
                  </option>
                ))}
              </select>
              {errors.state && <div>{errors.state}</div>}
            </div>
            <div className="form-group">
              <select
                className={classnames('form-control', {
                  'is-invalid': errors.lga,
                })}
                type="select"
                name="lga"
                id="lga"
                value={lga}
                onChange={this.handleChange}
              >
                <option value="" default disabled>
                  Select Local Government Area
                </option>

                {options}
              </select>
              {errors.lga && <div>{errors.lga}</div>}
            </div>
            <button color="primary">Register Location</button>
          </form>
        ) : (
          <h2 className="text-center">Add Location</h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lgas: state.lga.lgas,
  states: state.state.states,
})

export default connect(
  mapStateToProps,
  { getStates, getLgas, addLocation, getLocations }
)(CreateLocation)
