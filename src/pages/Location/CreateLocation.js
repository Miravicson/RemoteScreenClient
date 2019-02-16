import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { getLgas } from '../../actions/lgaActions'
import { getStates } from '../../actions/stateActions'
import { addLocation, getLocations } from '../../actions/locationActions'

class CreateLocation extends Component {
  constructor() {
    super()
    this.state = {
      lgas: null,
      lga: '',
      states: 0,
      state: '',
      location: '',
      ready: false,
      errors: {}
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
      lga_id: this.state.lga
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
    const { lgas, states} = this.props
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
        <div className="container">
          <div className="row">
            {ready ? (
              <div className="col-sm-12 col-md-8 mx-auto">
                <h2 className="text-center">Add Location</h2>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Enter Location"
                      onChange={this.handleChange}
                      value={location}
                      className={classnames({'is-invalid': errors.location})}
                    />
                    {errors.location && <FormFeedback>{errors.location}</FormFeedback>}
                  </FormGroup>
                  <FormGroup>
                    <select
                      className={classnames('form-control', {'is-invalid': errors.state})}
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
                    {errors.state && <FormFeedback>{errors.state}</FormFeedback>}
                  </FormGroup>
                  <FormGroup>
                    <select
                      className={classnames('form-control', {'is-invalid': errors.lga})}
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
                    {errors.lga && <FormFeedback>{errors.lga}</FormFeedback>}
                  </FormGroup>
                  <Button color="primary">Register Location</Button>
                </Form>
              </div>
            ) : (
              <div className="col-sm-12 col-md-8 mx-auto">
                <h2 className="text-center">Add Location</h2>
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Loading"
                      onChange={this.handleChange}
                      value=""
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <select
                      className="form-control"
                      type="select"
                      name="state"
                      id="state"
                      value="Loading"
                      onChange={this.handleChange}
                    >
                      <option value="Loading" default disabled>
                        Loading
                      </option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <select
                      className="form-control"
                      type="select"
                      name="lga"
                      id="lga"
                      value="Loading"
                      onChange={this.handleChange}
                    >
                      <option value="Loading" default disabled>
                        Loading
                      </option>
                    </select>
                  </FormGroup>
                  <Button color="primary">Register Location</Button>
                </Form>
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
})

export default connect(
  mapStateToProps,
  { getStates, getLgas, addLocation, getLocations }
)(CreateLocation)
