import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  margin: 0px;

  width: 100%;
  height: calc(100vh - 223px);
  
  /* min-height: 50vh; */
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
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 3px;
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
