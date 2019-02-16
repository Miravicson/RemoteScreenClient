import React, { Component } from 'react'
import CreateLocation from './CreateLocation'
import GetLocations from './GetLocations';

export default class Locations extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col">
          <h1>Location List</h1>
          <GetLocations/>
        </div>
        <div className="col">
          <CreateLocation/>
        </div>
      </div>
    )
  }
}
