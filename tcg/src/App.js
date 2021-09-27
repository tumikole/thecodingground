import React, { Component } from "react";
import NavigationBar from "./Components/NavigationBar";
import Logo from "../src/img/Logo-White.png";
import Modal from "../src/Components/Modal";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
    };
  
    openModal = () => {
      this.setState({
         isOpen: true 
        })
    };

    closeModal = () => {
      this.setState({ 
        isOpen: false 
      })
    };


    render() {
      
      return (

      <Router>
        <>
          <div className="homeBody">
            <NavigationBar />
            <img className="tcgLogo" src={Logo} alt="tcg logo" />
            <div className="headerContainer">
              <h1 className="header">WELCOME TO</h1>
              <h2 className="headerMedium">THE CODING GROUND</h2>
            </div>
            <br />
            <br />

            <div className="subHeaderContainer">
              <h3 className="subHeader">LEARN TODAY.</h3>
              <h3 className="subHeader">CRAFT YOUR FUTURE.</h3>
                <Modal/>
            </div>
          </div>
        </>
      </Router>
    );
  }


export default App;