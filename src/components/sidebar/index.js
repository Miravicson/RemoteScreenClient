import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classnames from 'classnames'


const SideBar = (props) => {
  const { active } = props;
  return (
    <nav className={classnames('sidebar', {'open': active})}>
      <ul className='sidebar-links'>
        <h3>Geography</h3>
        <hr/>
        <li className="sidebar-item">
          <Link className="sidebar-link"to="/location">Location</Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link"to="/update">Updates</Link>
        </li>
        {/* <li className="sidebar-item">
          <Link className="sidebar-link"to="/state">States</Link>
        </li> */}
      </ul>
      <ul className='sidebar-links'>
        <h3>Analytics</h3>
        <hr/>
        <li className="sidebar-item">
          <Link className="sidebar-link"to="">Tables</Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link"to="">Pictograph</Link>
        </li>
      </ul>
      <ul className='sidebar-links'>
        <h3>Actions</h3>
        <hr/>
        <li className="sidebar-item">
          <Link className="sidebar-link"to="/create">Create</Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link"to="/#">Edit</Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link"to="/#">Delete</Link>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  active: state.sidebar.active,
})

export default connect(
  mapStateToProps,
  null
)(SideBar)
