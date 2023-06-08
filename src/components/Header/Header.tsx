// React component class for header (title and navbar)

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.scss";

import lightbulb from "./lightbulb.png";

interface NavbarLinkProps {
  title: string;
  link: string;
}

const NavbarLink = (props: NavbarLinkProps) => {
  const { title, link } = props;
  return (
    <Nav.Item>
      <Link exact to={link} className="nav-item">
        {title}
      </Link>
    </Nav.Item>
  );
};

const Header = () => (
  <section className="section-header">
    <Navbar expand="lg" variant="dark" className="fixed-top">
      <Navbar.Brand href="/" className="navbar-brand">
        <img src={lightbulb} id="navbar-img" alt="lightbulb" />
        Marcus Chan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="my-navbar" />
      <Navbar.Collapse>
        <Nav id="my-navbar" className="ml-auto">
          <NavbarLink link="/#projects" title="Projects" />
          <NavbarLink link="/#experience" title="Experience" />
          <NavbarLink link="/#education" title="Education" />
          <NavbarLink link="/notes" title="Notes" />
          <NavbarLink link="/#contact-me" title="Contact Me" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </section>
);

export default Header;
