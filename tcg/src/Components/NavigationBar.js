import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import Registration from "./Registration";
// import {BrowserRouter as Router  } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Nav.Link eventKey="link-1">REGISTER</Nav.Link>|
          <Nav.Link eventKey="link-1">CONTACT US</Nav.Link>|
          <Nav.Link eventKey="link-1">WHAT WILL I LEARN</Nav.Link>|
          <Nav.Link eventKey="link-1">ABOUT TCG</Nav.Link>|
          <Nav.Link eventKey="link-1">MEET THE MENTORS</Nav.Link>
        </Navbar>
      </div>
    );
  }
}
