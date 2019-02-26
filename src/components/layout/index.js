import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'


const Layout = props => {
  const { active } = props
  return (
    <div className={classnames('container', { 'contract': active })}>
      {props.children}
    </div>
  )
}

const mapStateToProps = state => ({
  active: state.sidebar.active,
})
export default connect(
  mapStateToProps,
  null
)(Layout)
