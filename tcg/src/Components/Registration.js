import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";


export default class Registratuion extends Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: "",
        zip: ""
      };
    
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      render() {
        return (
          <div>
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBRow>
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    First name
                  </label>
                  <input
                    value={this.state.fname}
                    name="fname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="First name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </MDBCol>
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterEmailEx2"
                    className="grey-text"
                  >
                    Last name
                  </label>
                  <input
                    value={this.state.lname}
                    name="lname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </MDBCol>
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterConfirmEx3"
                    className="grey-text"
                  >
                    Email
                  </label>
                  <input
                    value={this.state.email}
                    onChange={this.changeHandler}
                    type="email"
                    id="defaultFormRegisterConfirmEx3"
                    className="form-control"
                    name="email"
                    placeholder="Your Email address"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    City
                  </label>
                  <input
                    value={this.state.city}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="city"
                    placeholder="City"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBCol>
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    State
                  </label>
                  <input
                    value={this.state.state}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="state"
                    placeholder="State"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBCol>
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Zip
                  </label>
                  <input
                    value={this.state.zip}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="zip"
                    placeholder="Zip"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBCol>
              </MDBRow>
              <MDBCol md="4" className="mb-3">
                <div className="custom-control custom-checkbox pl-3">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="custom-control-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </MDBCol>
              <MDBBtn color="primary" type="submit">
                Submit Form
              </MDBBtn>
            </form>
          </div>
        );
      }
    }