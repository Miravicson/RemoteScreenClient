import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap'
import { connect } from 'react-redux'
import { getLgas } from '../actions/lgaActions'
import { getStates } from '../actions/stateActions'
import { getLocations } from '../actions/locationActions'
import { addUpdate } from '../actions/updateAction'
import classnames from 'classnames'
class CreateUpdates extends Component {
  constructor() {
    super()
    this.state = {
      ready: false,
      AGO: '',
      PMS: '',
      DPK: '',
      title: '',
      state: '',
      lga: '',
      location: '',
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

  makePost() {
    const { title, PMS, AGO, DPK, location } = this.state

    if (title === '') {
      this.setState({ errors: { title: 'Title is required' } })
      return
    }
    if (PMS === '') {
      this.setState({ errors: { PMS: 'PMS Price is required' } })
      return
    }
    if (AGO === '') {
      this.setState({ errors: { AGO: 'AGO Price is required' } })
      return
    }
    if (DPK === '') {
      this.setState({ errors: { DPK: 'DPK Price is required' } })
      return
    }
    if (location === '') {
      this.setState({
        errors: {
          location:
            'Location is required, choose the state and lga of the location and then choose a location',
        },
      })
      return
    }

    const payload = {
      title: title,
      PMS: PMS,
      AGO: AGO,
      DPK: DPK,
      location_id: location,
    }
    this.props.addUpdate(payload)

    this.setState({
      ready: true,
      AGO: '',
      PMS: '',
      DPK: '',
      title: '',
      state: '',
      lga: '',
      location: '',
      errors: {},
    })
  }

  componentDidMount() {
    this.props.getStates()
    this.props.getLgas()
    this.props.getLocations()
    this.setState({ ready: true })
  }

  render() {
    const {
      ready,
      title,
      PMS,
      AGO,
      DPK,
      location,
      lga,
      state,
      errors,
    } = this.state
    const { locations, states, lgas } = this.props
    let lgaOptions = null
    let locationOptions = null

    if (state) {
      let filteredLgas = lgas.filter(lga => lga.state === Number(state))
      lgaOptions = filteredLgas.map((lga, key) => (
        <option value={lga.id} key={key}>
          {lga.name}
        </option>
      ))
    }
    if (lga) {
      let filteredLocations = locations.filter(
        location => location.lga_id === Number(lga)
      )
      locationOptions = filteredLocations.map((location, key) => (
        <option value={location.id} key={key}>
          {location.name}
        </option>
      ))
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            {ready ? (
              <div className="col-sm-12 col-md-8 mx-auto">
                <h2 className="text-center">Add Update</h2>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Update Title"
                      onChange={this.handleChange}
                      value={title}
                      className={classnames({ 'is-invalid': errors.title })}
                    />
                    {errors.title && (
                      <FormFeedback>{errors.title}</FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="PMS"
                      id="PMS"
                      placeholder="PMS Price"
                      onChange={this.handleChange}
                      value={PMS}
                      className={classnames({ 'is-invalid': errors.PMS })}
                    />
                    {errors.PMS && <FormFeedback>{errors.PMS}</FormFeedback>}
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="AGO"
                      id="AGO"
                      placeholder="AGO Price"
                      onChange={this.handleChange}
                      value={AGO}
                      className={classnames({ 'is-invalid': errors.AGO })}
                    />
                    {errors.AGO && <FormFeedback>{errors.AGO}</FormFeedback>}
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="DPK"
                      id="DPK"
                      placeholder="DPK Price"
                      onChange={this.handleChange}
                      value={DPK}
                      className={classnames({ 'is-invalid': errors.DPK })}
                    />
                    {errors.DPK && <FormFeedback>{errors.DPK}</FormFeedback>}
                  </FormGroup>
                  <FormGroup>
                    <select
                      className="form-control"
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
                  </FormGroup>
                  <FormGroup>
                    <select
                      className="form-control"
                      type="select"
                      name="lga"
                      id="lga"
                      value={lga}
                      onChange={this.handleChange}
                    >
                      <option value="" default disabled>
                        Select Local Government Area
                      </option>
                      {lgaOptions}
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <select
                      className={classnames('form-control', {
                        'is-invalid': errors.location,
                      })}
                      type="select"
                      name="location"
                      id="location"
                      onChange={this.handleChange}
                      value={location}
                    >
                      <option value="" default disabled>
                        Select Location
                      </option>
                      {locationOptions}
                    </select>
                    {errors.location && (
                      <FormFeedback>{errors.location}</FormFeedback>
                    )}
                  </FormGroup>
                  <Button color="primary">Add Update</Button>
                </Form>
              </div>
            ) : (
              <div className="col-sm-12 col-md-8 mx-auto">
                <h2 className="text-center">Add Updates</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lgas: state.lga.lgas,
  states: state.state.states,
  locations: state.location.locations,
})

export default connect(
  mapStateToProps,
  { getStates, getLgas, getLocations, addUpdate }
)(CreateUpdates)
