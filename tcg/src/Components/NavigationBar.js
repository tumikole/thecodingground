import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Registration from './Registration'
import {BrowserRouter as Router, Route  } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar expand="lg">
          <Route path="/register" component={Registration}> 
        
              <Nav.Link href="/home">REGISTER</Nav.Link>
            

          </Route> 
            |
            <Nav.Item>
              <Nav.Link eventKey="link-1">CONTACT US</Nav.Link>
            </Nav.Item>
            |
            <Nav.Item>
              <Nav.Link eventKey="link-1">WHAT WILL I LEARN</Nav.Link>
            </Nav.Item>
            |
            <Nav.Item>
              <Nav.Link eventKey="link-1">ABOUT TCG</Nav.Link>
            </Nav.Item>
            |
            <Nav.Item>
              <Nav.Link eventKey="link-1">MEET THE MENTORS</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item> */}
          </Navbar>
        </div>
      </Router>
    );
  }
}
