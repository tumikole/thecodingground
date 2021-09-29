import React, { Component } from "react";
import Logo from '../img/Logo-White.png'

export default class WhatWilILearn extends Component {
  render() {
    return (
      <div className="whatToLearnContainer">
        <div className="learnSide1">
          <h1>WHAT WILL I LEARN?</h1>
          <p>
            Students acquire the skills to become a well-rounded, full-stack
            software developers.This means that the student will learn to create
            websites, and server and mobile applications.Some terms you will get
            to know really well during the course are:
          </p>
          <ul>
            <li> Learning how to learn</li>
            <li> Problem-solving</li>
            <li> Javascript, Python, Java & C#</li>
            <li> Web Development Fundamentals</li>
            <li> Database Design and Use</li>
          </ul>
        </div>
        <div className="learnSide2">
<img className="logoWhite" src={Logo} alt=""/>
<li> Computer Science Fundamentals
</li>
<li> Software Engineering Fundamentals
</li>
<li> DevOps</li>
<li> API / HTTP Request Programming
</li>
<li> Agile Software Development
</li>


        </div>
      </div>
    );
  }
}
