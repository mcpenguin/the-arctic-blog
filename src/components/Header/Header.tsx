// React component class for header (title and navbar)

import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.scss';

import lightbulb from './lightbulb.png';

interface NavbarLinkProps {
    id: string,
    title: string,
}

function NavbarLink(props: NavbarLinkProps) {
    return (
        <Nav.Item>
            <Link exact to={`/#${props.id}`} className="nav-item">
                {props.title}
            </Link>
        </Nav.Item>
    );
}

export default function Header() {
    return (
        <section className="section-header">
            <Navbar expand="lg" variant="dark" className="fixed-top">
                <Navbar.Brand href="/" className="navbar-brand">
                    <img src={lightbulb} id="navbar-img" alt="lightbulb" /> Marcus Chan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="my-navbar" />
                <Navbar.Collapse>
                    <Nav id="my-navbar" className="ml-auto">
                        <NavbarLink id="projects" title="Projects" />
                        <NavbarLink id="experience" title="Experience" />
                        <NavbarLink id="education" title="Education" />
                        <NavbarLink id="extracurriculars" title="Extracurriculars" />
                        <NavbarLink id="piano" title="Piano Covers" />
                        <NavbarLink id="achievements" title="Achievements" />
                        <NavbarLink id="notes" title="Notes" />
                        <NavbarLink id="contact-me" title="Contact Me" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    )
}
