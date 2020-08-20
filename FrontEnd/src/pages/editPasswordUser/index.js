import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import { Container, AlertDiv } from "./style";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function EditPassword() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [updatePassword, setUpdatePassword] = useState();
    const history = useHistory();
    const [number, setNumber] = useState([0, ""]);

    useEffect(() => {
        const userId = id;
        async function load() {
            const response = await api.get(`user/${userId}`);
            setUser(response.data.user);
        }
        load();
    }, [id]);

    async function handleEditPassword(event) {
        event.preventDefault();
        const data = {
            password: updatePassword,
        };
        try {
            await api.put(`user/password/${id}`, data);
            setNumber([1, "Senha alterada com sucesso!"]);
            history.push('/userlist')
        } catch (error) {
            setNumber([2, "Digite uma nova senha!"]);
        }
    }
    async function handleCancel() {
        history.push("/userList");
    }

    return (
        <Container>
            <h1>
                Edição de <span>Senha</span>
            </h1>

            <div className="password">
                <form onSubmit={handleEditPassword}>
                    <label className="name">
                        Nome: <b>{user.name}</b>
                    </label>
                    <label>
                        Senha:
                        <input
                            value={updatePassword}
                            type="password"
                            onChange={(event) => setUpdatePassword(event.target.value)}
                        />
                    </label>
                    <div className="buttons">
                        <button onClick={(event) => handleCancel()}>Cancelar</button>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>

            {number[0] >= 1
                ? setTimeout(() => {
                    setNumber([0, ""]);
                }, 5000)
                : 0}
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
        </Container>
    );
}
