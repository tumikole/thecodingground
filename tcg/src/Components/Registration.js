import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Image from "../img/APPLICATION-v2-875x516.png";

export default class Registratuion extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="applicationContainer">
            <img className="applicationImage" src={Image} alt="" />

            <h1>START YOUR JOURNEY TO SOFTWARE MASTERY</h1>
            <p>
              The journey starts here. Apply by filling out the registration form.
              Afterwards, we will notify you once we're ready for you to
              continue with the online assessment.
            </p>
          </div>

          <div className="sideInfo">
          <form
          className="needs-validation"
          onSubmit={this.props.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                First name
              </label>
              <input
                value={this.props.state.fname}
                name="fname"
                onChange={this.props.changeHandler}
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
                value={this.props.state.lname}
                name="lname"
                onChange={this.props.changeHandler}
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
                value={this.props.state.email}
                onChange={this.props.changeHandler}
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
                value={this.props.state.city}
                onChange={this.props.changeHandler}
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
                value={this.props.state.state}
                onChange={this.props.changeHandler}
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
                value={this.props.state.zip}
                onChange={this.props.changeHandler}
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
         
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>

          </div>
        </div>
             </div>
    );
  }
}
