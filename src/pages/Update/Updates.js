import React, { Component } from 'react'
import GetUpdates from './GetUpdates'
import Layout from '../../components/layout'

export default class Updates extends Component {
  render() {
    return (
      <Layout>
        <h1>Updates List</h1>
        <GetUpdates />
      </Layout>
    )
  }
}
