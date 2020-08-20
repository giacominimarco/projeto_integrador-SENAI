import React, { useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import { AlertDiv } from "./style.js";

import "./style.css";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState([0, ""]);

    const history = useHistory();

    async function signUpUser(event) {
        event.preventDefault();
        try {
            await api.post("/users", { name, email, password });
            history.push("/");
        } catch (error) {
            setNumber([2, error.response.data.message]);
        }
    }

    return (
        <>
            <div className="form hide">
                <h2>Cadastre-se conosco</h2>

                <form onSubmit={signUpUser}>
                    <input
                        type="text"
                        placeholder="Informe seu nome"
                        value={name}
                        required={true}
                        minLength={8}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Seu melhor email"
                        value={email}
                        required={true}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Sua melhor senha"
                        value={password}
                        required={true}
                        minLength={6}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button type="submit">Enviar</button>
                </form>


            </div>
            {number[0] >= 1
                ? setTimeout(() => {
                    setNumber([0, ""]);
                }, 5000)
                : ""}
            {number[0] === 2 ? (
                <AlertDiv>
                    <Alert severity="error">
                        <AlertTitle>Erro!</AlertTitle>
                        <strong>{number[1]}</strong>
                    </Alert>
                </AlertDiv>
            ) : number[0] === 1 ? (
                <AlertDiv>
                    <Alert severity="success">
                        <AlertTitle>Sucesso!</AlertTitle>
                        <strong>{number[1]}</strong>
                    </Alert>
                </AlertDiv>
            ) : (
                        ""
                    )}
        </>
    );
}
