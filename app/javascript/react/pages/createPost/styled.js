import styled from "styled-components"

export const Container = styled.div`

display: flex;
justify-content: center; 
flex-direction: column;
align-items: center;
margin: 4rem;

h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #4C5578;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  }

  strong {
    margin: .5rem;
  }
  
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  textarea {
    margin: 20px 0;
    height: 200px;
    width: 400px;
  }
  
  input:focus, textarea:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(76,85,120, 0.3);
  }
  
  button {
    padding: 10px 20px;
    background-color: #4C5578;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
  }
  
  button:hover {
    background-color: #3c4460;
  }
`