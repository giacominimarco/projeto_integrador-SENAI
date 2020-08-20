import React from "react";
import {
    Link, useHistory
} from "react-router-dom";

import { Container } from "./style";
import { logOut } from '../../services/auth'
export default function Navigation() {
    const history = useHistory();

    async function handleLogout(e) {
        e.preventDefault();
        try {
            logOut();
            history.push('/');

        } catch (error) {
            alert(error)
        }

    }
    return (
        <Container>
            <div className='header'>
                <div className='button'>
                    <Link to="/System">
                        Desofuscamento
                    </Link>

                    <Link to="/UserList">
                        Lista de Usuário
                    </Link>
                </div>

                <div className='buttonOff'>
                    <button onClick={ handleLogout }>
                        Log Out
                    </button>
                </div>
            </div>
        </Container>
    );
}
