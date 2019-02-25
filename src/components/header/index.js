import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../images/avatar.svg'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { toggleSidebar } from '../../actions/sidebarAction'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdown: false,
    }
  }

  togglerFunction = () => {
    this.props.toggleSidebar()
  }

  dropdown = () => {
    this.setState(prevState => ({
      dropdown: !prevState.dropdown,
    }))
  }

  render() {
    const { active } = this.props
    const { dropdown } = this.state

    return (
      <nav className="navbar">
        <div className="brand-toggler">
          <div
            className={classnames('toggler', { change: active })}
            onClick={this.togglerFunction}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <Link exact="true" to="/" className="brand-toggler-brand">
            RemoteScreen
          </Link>
        </div>
        <div className="nav">
          <i className="fa fa-envelope" aria-hidden="true" />
          <i className="fa fa-bell" aria-hidden="true" />
          <img src={avatar} alt="" />
          <p>Victor Ughonu</p>
          <button>
            <i className="fa fa-angle-down" aria-hidden="true" />
          </button>
        </div>
        <div className="mobile-nav">
          <img src={avatar} alt="" />
          <button onClick={this.dropdown}>
            <i className="fa fa-angle-down" aria-hidden="true" />
          </button>
          <div
            className={classnames('profile-dropdown', {
              show: dropdown,
            })}
          >
            <p>Victor Ughonu</p>
            <i className="fa fa-envelope" aria-hidden="true" />
            <i className="fa fa-bell" aria-hidden="true" />
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  active: state.sidebar.active,
})

export default connect(
  mapStateToProps,
  { toggleSidebar }
)(Header)
