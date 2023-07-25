import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  min-height: 100%;
  
  margin: 0px;
  padding: 19rem 0rem;

  background: var(--color-white);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);

  @media only screen and (min-width: 1900px){
    width: 360px;
    height: 335px;

    h2 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    input {
      font-size: 2rem;
      margin-bottom: 2rem;
      padding: 0.5rem 2rem;
      height: 4rem;
    }
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 3px;

  @media only screen and (min-width: 1900px){
    padding: 1rem 4rem;
    font-size: 2.5rem;
    margin-top: 2rem;
    border-radius: 5px;
  }

`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #F55E34;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #FFFFFF;
    color: black;
  }

  @media only screen and (min-width: 1900px){
    padding: 1rem 4rem;
    font-size: 2.1rem;
    margin-top: 2rem;
    border-radius: 5px;
  }

`;

const Login = ({ onLogin, credentials }) => {
  const [client, setClient] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Utiliza as credenciais fornecidas através das props
    const correctClient = credentials.client;
    const correctPassword = credentials.password;

    if (client === correctClient && password === correctPassword) {
      console.log('Login bem-sucedido');
      onLogin(); // Chame a função onLogin passada como prop para informar que o usuário está logado
    } else {
      console.log('Credenciais inválidas');
      alert('Cliente ou senha inválidos');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="string"
          placeholder="Cliente"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha do Projeto"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
