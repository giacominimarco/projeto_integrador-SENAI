import styled from "styled-components";

export const Container = styled.div`
  
  height: 7vh;

  .header {
    position: fixed;

    display: grid;
    grid-template-columns: 1fr 1fr;

    top:0;
    left: 0;
    padding: 10px;

    text-align: center;
    width: 100%;

    background-image: linear-gradient(to right, #626262, #727272, #828282, #929292, #a3a3a3);
    z-index: 10;
  }

  .button {
    position: relative;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    width: 100px;
  }

  a {
    display: flex;
    
    width: 150px; 
    height: 30px;
    
    background-color: var(--primary-color);
    color: white;
    
    font-size: 13px;
    border-radius: 5px;
    
    justify-content: center;
    align-items: center;

    transition: 400ms;
  }

  .button a:hover {
    background-color: green;
  }

  .buttonOff button{
    background-color: var(--logOut-color);
    float: right;

    width: 80px; 
    height: 30px;
  }

  .buttonOff button:hover {
    background-color: var(--logOut-hover);
  }

  button {
    display: flex;

    border: none;
    cursor: pointer;

    background-color: var(--primary-color);
    color: white;
    
    font-size: 13px;
    border-radius: 5px;
    
    justify-content: center;
    align-items: center;

    transition: 400ms;
  }
`;
