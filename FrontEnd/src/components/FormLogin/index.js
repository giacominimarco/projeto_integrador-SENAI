import React, { useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom"
import "./style.css";
import { AlertDiv } from './style';
import { login } from "../../services/auth";
import { Alert, AlertTitle } from '@material-ui/lab';

export default function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [number, setNumber] = useState([0, ""]);
    async function signInUser(e) {
        e.preventDefault();
        try {
            const response = await api.post("/login", { email, password });
            login(response.data.token);
            setNumber([1, "Login efetuado com sucesso!"]);
            history.push('/system');
        } catch (error) {
            for (let i = 0; i < error.response.data.errors.length; i++) {
                if (i >= 1) {
                    setNumber([2, error.response.data.errors[0].msg + " e " + error.response.data.errors[1].msg]);
                }
                else{
                    setNumber([2, error.response.data.errors[0].msg]);
                }
            }
        }
    }

    return (
        <>
        <div className="formLogin hideLogin">
            <h2>Login</h2>

            <form onSubmit={signInUser}>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    // required={true}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    // required={true}
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
                : undefined}
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
