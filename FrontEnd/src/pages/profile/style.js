import styled from "styled-components";

export const Container = styled.div`

    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    h1 {
        margin: 5% 0 5%;
        text-align: center;
    }

    h1 span {
        color: var(--primary-color);
    }

    .user {     
        align-items: center;
        display: grid;
        border: 1px solid gray;
        background-color: var(--form-edit);
        width: 450px;
        border-radius: 8px;
    }

    .user form {
        padding: 40px 50px 40px 50px;
        display: grid;
        grid-template-columns: 1fr solid;
        border-radius: 8px;
    }

    .user form label {
        width: 100%;
        display: grid;
        color: var(--form-label);
    }

    .user input {
        margin-top: 10px;
        margin-bottom: 10px;
        color: var(--header-color);
        background-color: rgb(239, 239, 239);
    }

    .user .buttons {
        margin-top: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr;

        gap: 5px;
        width: 100%;
    }

    button {
        color: white;
        background-color: var(--primary-color);
        transition: 400ms;
    }

    button:hover {
        background-color: var(--button-hover);
    }
`;

export const AlertDiv = styled.div`
    position: fixed;
    top: 0;
    margin-top: 56px;
    margin-right: 20px;
    right: 0;
`;
