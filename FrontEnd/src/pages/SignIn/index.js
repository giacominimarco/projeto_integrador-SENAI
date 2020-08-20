import React, { Component } from "react";
import FormLogin from "../../components/FormLogin";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom"
import { FiLogIn } from "react-icons/fi";

class SignIn extends Component {
  render() {
    return (
      <>
        <Header />
        <FormLogin />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h5>Ainda não possui um cadastro?</h5>

          <Link to={`/SignUp/`} style={{ marginTop: 24 }}>
            <FiLogIn style={{ marginRight: 8 }} />
              Cadastre-se conosco!
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

export default SignIn;
