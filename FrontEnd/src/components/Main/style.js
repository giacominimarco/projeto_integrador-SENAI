import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 30px;

  h1 {
    margin-bottom: 70px;
  }

  span {
    color: var(--primary-color);
  }

  input {
    background-color: blue;
  }

  .list-users {
    display: grid;
    width: 70%;
    height: 70%;
    margin-bottom: 70px;
  }

  .user {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* background-color: var(--color-user); */
    padding: 1em;

    text-align: left;
  }

  .user button {
    height: 0;
    width: 0;
    border: none;
    cursor: pointer;
    margin-right: 20px;
    color: var(--button-delit);
    font-size: 20px;
  }

  .user .icons-cards {
    height: 25px;
    text-align: right;
    position: relative;
  }

  .user .icons-cards .icon-edit {
    font-size: 20px;
    margin-right: 10px;
  }

  .cor1 {
    color: var(--button-edit);
  }
  .cor2 {
    color: var(--button-editKey);
  }
  .cor1:hover {
    color: var(--button-edit-hover);
  }
  .cor2:hover {
    color: var(--button-editkey-hover);
  }

  .user button:hover {
    color: var(--button-delit-hover);
  }

  .info-user {
    margin-top: -18%;
    display: grid;
    align-items: center;
  }

  .info-user p {
    display: flex;
    align-items: center;
    padding: 5px 0 5px;
  }

  .info-user div {
    display: flex;
    align-items: center;
    padding: 5px 0 5px;
  }

  .info-user span {
    border-top: 1px solid #d4d4d4;
  }

  .icon {
    margin-right: 10px;
    color: #a8a8b3;
  }
`;

export const AlertDiv = styled.div`
  position: fixed;
  top: 0;
  margin-top: 56px;
  margin-right: 20px;
  right: 0;
`;
