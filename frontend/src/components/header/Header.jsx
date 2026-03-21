import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVideoSlash} from "@fortawesome/free-solid-svg-icons"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"

import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar" style={{ padding: '1rem 2rem', minHeight: '50px' }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: '#2F70C1', fontSize: '2.2rem' }}>
          <FontAwesomeIcon icon={faVideoSlash} /> View&Review
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <NavLink className="nav-link" to="/" style={{ fontSize: '1.8rem', padding: '0.5rem 1rem' }}>Home</NavLink>
            <NavLink className="nav-link" to="/watchList" style={{ fontSize: '1.8rem', padding: '0.5rem 1rem' }}>Watch List</NavLink>
          </Nav>
          <Button variant="outline-info" className="me-2" size="lg" style={{ fontSize: '1.5rem', padding: '0.75rem 1.5rem' }}>Login</Button>
          <Button variant="outline-info" size="lg" style={{ fontSize: '1.5rem', padding: '0.75rem 1.5rem' }}>Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header