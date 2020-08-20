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
    
    .password {
        display: grid;
        width: 450px;

        border: 1px solid gray;
        background-color: var(--form-edit);

        border-radius: 8px;
    }

    .password form {
        padding: 40px 50px 40px 50px;
    }

    .password form label {
        width: 100%;
        display: grid;
        color: var(--form-label);
    }

    .password form .name {
        display: flex;
        margin-bottom: 30px;
    }

    .password form .name b {
        margin-left: 15px;
    }

    .password input {
        margin-top: 10px;
        margin-bottom: 10px;
        color: black;
        background-color: rgb(239, 239, 239);
    }

    .password .buttons {
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
