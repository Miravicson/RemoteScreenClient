import React from 'react'
import Layout from '../../components/layout'
import SummaryCard from '../../components/summaryCard'

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className="page-title">RemoteScreen Dashboard</h1>
      </div>
      <div className="card-container">
        <SummaryCard info="&#8358; 450" description="Average DPK Price" progress={80} type="dpk"/>
        <SummaryCard info="&#8358; 145" description="Average PMS Price" progress={5} type="pms"/>
        <SummaryCard info="&#8358; 250" description="Average AGO Price" progress={20} type="ago"/>
        <SummaryCard info="23/36" description="number of states in" progress={(23.0 / 36.0) * 100}/>
      </div>
    </Layout>
  )
}

export default Home
