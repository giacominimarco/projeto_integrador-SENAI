import React, { Component } from "react";
import HeaderSignUp from "../../components/HeaderSignUp";
import Form from "../../components/Form";
import FormLogin from "../../components/FormLogin";
import Footer from "../../components/Footer";

class SignUp extends Component {
  render() {
    return (
      <>
        <HeaderSignUp />
        <Form />
        <FormLogin />
        <Footer />
      </>
    );
  }
}

export default SignUp;
