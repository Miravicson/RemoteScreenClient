import React, { Component } from 'react'

import GetLocations from './GetLocations'
import Layout from '../../components/layout/'

export default class Locations extends Component {
  render() {
    return (
      <Layout>
        <GetLocations />
      </Layout>
    )
  }
}
