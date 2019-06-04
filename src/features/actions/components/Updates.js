import React, { Component } from 'react'
import GetUpdates from './GetUpdates'
import { Layout } from '../../layout'

export default class Updates extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1 className="page-title">Updates Details</h1>
        </div>
        <hr />
        <GetUpdates />
      </Layout>
    )
  }
}
