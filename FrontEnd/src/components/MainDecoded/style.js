import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 30px;
  
  h1 {
  }

  a{
    text-decoration: none;
  }

  span {
    color: var(--primary-color);
  }

  .desofuscador {
    width: 100%;
    height: 350px;

    border: 1px solid gray;
    margin-top: 10%;

    background: white;
    color: gray;

    display: grid;
    grid-template-columns: 1fr;
    
    border-radius: 8px;
  }


  .desofuscador p {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .icon {
    background-color: #a8a8b3;
    opacity: 50%;
  } 

  .icon:hover {
    background-color: #969696;
    opacity: 70%;
  }

  form input {
    max-width:70%;
    margin: 20px 0 5px;
    border: 1px solid gray;
  }

  button {    
    max-width: 30%;
    margin: 5px;

    color: white;    
    background-color: var(--primary-color);

    border-radius: 8px;

    transition: 400ms;
  }

  button:hover {   
      background-color: green;
  }

  .desofuscador input {
    color: gray;
    background: transparent;
  }

  .desofuscador input::placeholder {
    color: grey;
    opacity: 90% ;
  }

  .resultado-string {
    width: 100%;

    margin-top: 10px;
    color: white;
  }

  .resultado-string h2 {
    text-align: left;
  }

  .form {
    width: 100%;
    max-width: 550px;
    background-color: var(--primary-color);
  }



`;

export const AlertDiv = styled.div`

  position: fixed;
  top: 0;
  margin-top: 56px;
  margin-right: 20px;
  right: 0;

`;