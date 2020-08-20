import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { Container, AlertDiv } from "./style";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [updateName, setUpdateName] = useState(user.name);
    const [updateEmail, setUpdateEmail] = useState(user.email);
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

    async function handleEditUser(event) {
        event.preventDefault();
        const data = {
            name: updateName,
            email: updateEmail,
        };
        try {
            await api.put(`/user/${id}`, data);
            setNumber([1, "Usuário editado com sucesso!"]);
            history.push('/userlist')
        } catch (error) {
            setNumber([2, error.response.data.errors[0].message]);
        }
    }
    async function handleCancelUser() {
        history.push("/userList");
    }

    return (
        <Container>
            <h1>
                Edição de <span>Usuário</span>
            </h1>

            <div className="user">
                <form onSubmit={handleEditUser}>
                    <label>
                        Nome:
                        <input
                            defaultValue={user.name}
                            onChange={(event) => setUpdateName(event.target.value)}
                        />
                    </label>
                    <label>
                        E-mail:
                        <input
                            defaultValue={user.email}
                            onChange={(event) => setUpdateEmail(event.target.value)}
                        />
                    </label>
                    <div className="buttons">
                        <button onClick={(event) => handleCancelUser()}>Cancelar</button>
                        <button type="submit">Enviar</button>
                    </div>
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
        </Container>
    );
}
