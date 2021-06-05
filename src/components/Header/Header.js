// React component class for header (title and navbar)

import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css';

class NavbarLink extends Component {
    render() {
        const str = `#${this.props.id}`;
        return (
            <Nav.Item>
                <Nav.Link className="nav-item" href={str}>
                    {this.props.title}
                </Nav.Link>
            </Nav.Item>
        )
    }
}

export default class Header extends Component {

    render() {
        return (
            <section className="section-header">
                <Navbar expand="lg" variant="dark">
                    <Navbar.Brand href="" className="navbar-brand">🐧 The Arctic Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-navbar" />
                    <Navbar.Collapse>
                        <Nav id="my-navbar" className="ml-auto">
                            <NavbarLink id="about-me" title="About Me" />
                            <NavbarLink id="timeline" title="Timeline" />
                            <NavbarLink id="notes" title="Notes" />
                            <NavbarLink id="contact-me" title="Contact Me" />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        )
    }
}