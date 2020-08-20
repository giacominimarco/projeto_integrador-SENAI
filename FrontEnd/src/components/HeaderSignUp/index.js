import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container } from "./style";
import Efect from "../../efect";

export default function HeaderSignUp() {
    return (
        <Container>
            <h1>Cadastro</h1>
            <h2>Cadastre seu usuário conosco</h2>
            
            <div className="buttons">
                <button onClick={Efect}>Quero me cadastrar</button>
                <h5>Já fez seu cadastro? Faça seu login agora!</h5>
                <Link to={`/`}>
                    <FiLogIn style={{ marginRight: 8 }} />
                    Volte para logar!
                </Link>
            </div>
        </Container>
    );
}
