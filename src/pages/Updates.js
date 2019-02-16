import React, { Component } from 'react'
import CreateUpdates from './CreateUpdates'
import GetUpdates from './GetUpdates';

export default class Updates extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col">
          <h1>Updates List</h1>
          <GetUpdates />
        </div>
        <div className="col">
          <CreateUpdates />
        </div>
      </div>
    )
  }
}
