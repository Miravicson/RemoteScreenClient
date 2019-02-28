import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAveragePrice } from '../../actions/mixActions'
import Layout from '../../components/layout'
import SummaryCard from '../../components/summaryCard'
import TableComponent from '../../components/table'
import { getLocationRecent } from '../../actions/mixActions'

export class Home extends Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    this.props.getAveragePrice()
    this.props.getLocationRecent()
    this.setState({ ready: true })
  }

  convertUnicode(input) {
    return input.replace(/\\u(\w\w\w\w)/g, function(a, b) {
      var charcode = parseInt(b, 16)
      return String.fromCharCode(charcode)
    })
  }

  render() {
    const nairaUnicode = '\u20A6'
    const { AGO, DPK, PMS } = this.props.averagePrice
    const {locationRecent} = this.props
    const { ready } = this.state
    const naira = this.convertUnicode(nairaUnicode)
    return (
      <Layout>
        {!ready ? (
          <div>
            <h1 className="page-title">Loading...</h1>
          </div>
        ) : (
          <div>
            <div>
              <h1 className="page-title">RemoteScreen Dashboard</h1>
            </div>
            <div className="card-container">
              <SummaryCard
                info={naira + ' ' + String(DPK)}
                description="Average DPK Price"
                progress={80}
                type="dpk"
              />
              <SummaryCard
                info={naira + ' ' + String(PMS)}
                description="Average PMS Price"
                progress={5}
                type="pms"
              />
              <SummaryCard
                info={naira + ' ' + String(AGO)}
                description="Average AGO Price"
                progress={20}
                type="ago"
              />
              <SummaryCard
                info="23/36"
                description="number of states in"
                progress={(23.0 / 36.0) * 100}
              />
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <TableComponent rows={locationRecent}/>
            </div>
          </div>
        )}
      </Layout>
    )
  }
}

const mapPropsToState = state => ({
  averagePrice: state.mix.averagePrice,
  locationRecent: state.mix.locationRecent,
})

export default connect(
  mapPropsToState,
  { getAveragePrice, getLocationRecent }
)(Home)
