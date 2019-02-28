import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/layout/'
import { getLgas } from '../../actions/lgaActions'
import { getStates } from '../../actions/stateActions'
import { getUpdates } from '../../actions/updateAction'
import { getRecent } from '../../actions/recentActions'
import { addLocation, getLocations } from '../../actions/locationActions'
import {getLocationRecent} from '../../actions/mixActions'
import TableComponent from '../../components/table'

class Locations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lga: '',
      state: '',
      location: '',
      ready: false,
      lgas: [],
      states: [],
      locations: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
    if (e.target.name === 'state') {
      this.setState({ lga: '' })
    }
  }

  componentDidMount() {
    this.props.getStates()
    this.props.getLgas()
    this.props.getLocations()
    this.props.getUpdates()
    this.props.getLocationRecent()

    this.setState({ ready: true })
  }

  render() {
    const { lga, state, ready } = this.state
    const { lgas, states, locations, updates, locationRecent } = this.props

    let filteredLocations = []

    let lgaOptions = null

    if (state) {
      let filteredLgas = lgas.filter(lga => lga.state === Number(state))
      lgaOptions = filteredLgas.map((lga, key) => (
        <option value={lga.id} key={key}>
          {lga.name}
        </option>
      ))
    }

    if (lga) {
      filteredLocations = locations.filter(
        location => location.lga_id === Number(lga)
      )
      console.log(filteredLocations)
      filteredLocations.map(location => {
        
      })
    }

    return (
      <Layout>
        <div>
          <h1 className="page-title">Locations Summary</h1>
        </div>
        <hr />
        <div className="filter">
          {ready ? (
            <form className="form" style={styles.formStyle}>
              <h2 className="form-title">Filter Locations</h2>
              <div
                className="form-group form-group-inline"
                style={styles.formStyle.formGroup}
              >
                <select
                  className="form-control"
                  type="select"
                  name="state"
                  id="state"
                  value={state}
                  onChange={this.handleChange}
                >
                  <option value="" default disabled>
                    STATE
                  </option>
                  {states.map((state, key) => (
                    <option value={state.id} key={key}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className="form-group form-group-inline"
                style={styles.formStyle.formGroup}
              >
                <select
                  className="form-control"
                  type="select"
                  name="lga"
                  id="lga"
                  value={lga}
                  onChange={this.handleChange}
                >
                  <option value="" default disabled>
                    LGA
                  </option>
                  {lgaOptions}
                  )) }
                </select>
              </div>
            </form>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  lgas: state.lga.lgas,
  states: state.state.states,
  updates: state.update.updates,
  locations: state.location.locations,
  locationRecent: state.mix.locationRecent,
})

const styles = {
  formStyle: {
    width: '90%',
    formGroup: {
      width: '48%',
      padding: '0.5rem',
    },
  },
}

export default connect(
  mapStateToProps,
  { getStates, getLgas, addLocation, getLocations, getUpdates, getLocationRecent }
)(Locations)
