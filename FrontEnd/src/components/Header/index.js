import React from "react";
import { Container } from "./style";
import EfectLogin from "../../efectLogin";

export default function Header() {
    return (
        <Container>

            <h1>Login</h1>
            <h2>Faça seu login para ter acesso as funcionalidades</h2>

            <div className="buttons">
                <button onClick={EfectLogin}>Login</button>
        
            </div>

        </Container>
    );
}
