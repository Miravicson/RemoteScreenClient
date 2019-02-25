import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Layout from '../../components/layout'
import 'react-tabs/style/react-tabs.css'
import CreateLocation from '../Location/CreateLocation'
import CreateUpdates from '../Update/CreateUpdates';

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
          <CreateUpdates/>
        </TabPanel>
      </Tabs>
    </Layout>
  )
}

export default Actions
