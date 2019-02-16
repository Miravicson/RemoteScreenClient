import React, { Component } from 'react';
import './styles/_header.scss'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="md" className="mb-5 navbar-element">
                    <NavbarBrand href="/">RemoteScreen</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/location">
                                    Location
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/update">
                                    Updates
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/state">
                                    State
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
