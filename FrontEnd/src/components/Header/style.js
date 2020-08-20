import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 500px;

  h1 {
    margin-top: 30px;
    font-size: 40px;
  }

  h2 {
    margin: 70px auto 30px;
    font-size: 30px;
  }

  p {
    font-size: 17px;
    margin: 15px auto;
  }

  button {
    font-weight: bold;
    font-size: 15px;
    
    color: white;
    background: var(--primary-color);
    
    border-radius: 5px;
    
    border: 1px solid gray;
    padding: 10px 16px;
    margin-bottom: 60px;
    
    cursor: pointer;
  }

  button:hover {
    filter: saturate(150%);
  }

  a {
    width: 200px;

    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    margin-top: 24px;
    &:hover {
      color: blue;
    }
  }
  
`;
