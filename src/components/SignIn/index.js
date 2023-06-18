import React, { useState } from 'react';
import logoImg from '../../assets/logoVega.svg';
import * as S from './styles';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simular uma chamada à API para verificar as credenciais do usuário
    setTimeout(() => {
      // Verificar se o nome de usuário e a senha estão corretos
      if (name === 'vegarobotics' && password === '2023') {
        setMessage('Login bem-sucedido!');
      } else {
        setMessage('Nome de usuário ou senha incorretos. Tente novamente.');
      }
    }, 1000);
  };  

  return (
    <S.Container>
      <S.Logo>
        <img src={logoImg} alt="Logo Vixem" />
      </S.Logo>

      <S.Form onSubmit={handleSubmit}>
        {/* <bottom>Entrar</bottom> */}

        <input
          type="name"
          placeholder="usuário"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Acessar</button>
      </S.Form>

      {message && (
        <p>{message}</p>
      )}
    </S.Container>
  );
};

export default SignIn;




