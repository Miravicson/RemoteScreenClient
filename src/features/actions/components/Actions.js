import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Layout } from '../../layout'
import 'react-tabs/style/react-tabs.css'
import CreateLocation from './CreateLocation'
import CreateUpdates from './CreateUpdates'

const Actions = () => {
  return (
    <Layout>
      <Tabs>
        <TabList>
          <Tab>Create Location</Tab>
          <Tab>Add Updates</Tab>
        </TabList>

        <TabPanel>
          <CreateLocation />
        </TabPanel>
        <TabPanel>
          <CreateUpdates />
        </TabPanel>
      </Tabs>
    </Layout>
  )
}

export default Actions
