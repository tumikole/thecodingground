import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">CONTACT US</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">WHAT WILL I LEARN</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">ABOUT TCG</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">MEET THE MENTORS</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
   
</Navbar>
            </div>
        )
    }
}

