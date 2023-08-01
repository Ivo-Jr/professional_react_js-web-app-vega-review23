import React, { useState } from "react";
import logoVega from "../../assets/logoVega.svg";
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Container, LeftSide, WelcomeText, Form, Button } from './styles';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

const Login = ({ onLogin, credentials }) => {
  const [client, setClient] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      <LeftSide>
        <img src={logoVega} alt="logo-vegarobotics" />
        <WelcomeText>
          Faça seu Login <br />
          na plataforma
        </WelcomeText>
      </LeftSide>
      <Form onSubmit={handleSubmit}>
        <FormControl sx={{
          m: 1, width: '100%',
          "@media (min-width: 1900px)": {
            marginBottom: "2rem"
          },
          "& .MuiInputBase-root": {
            fontSize: "1.6rem",
            "@media (min-width: 1900px)": {
              fontSize: "2rem"
            }
          },
          "& .MuiFormLabel-root": {
            fontSize: "1.6rem",
            "@media (min-width: 1900px)": {
              fontSize: "2rem"
            }
          },
          "& .MuiSvgIcon-root": {
            width: "2rem", height: "2rem",
            "@media (min-width: 1900px)": {
              width: "2.5rem", height: "2.5rem"
            }
          },
          "& .MuiButtonBase-root": { width: "3rem" },
          "&. MuiInputBase-input": { height: "3.5rem" }
        }}
          variant="outlined">
          <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
          <OutlinedInput
            onChange={(e) => setClient(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            id="outlined-adornment-login"
            type="text"
            label="Login"
          />
        </FormControl>

        <FormControl sx={{
          m: 1, width: '100%',
          "@media (min-width: 1900px)": {
            marginBottom: "2rem"
          },
          "& .MuiInputBase-root": {
            fontSize: "1.6rem",
            "@media (min-width: 1900px)": {
              fontSize: "2rem"
            }
          },
          "& .MuiFormLabel-root": {
            fontSize: "1.6rem",
            "@media (min-width: 1900px)": {
              fontSize: "2rem"
            }
          },
          "& .MuiSvgIcon-root": {
            width: "2rem", height: "2rem",
            "@media (min-width: 1900px)": {
              width: "2.5rem", height: "2.5rem"
            }
          },
          "& .MuiButtonBase-root": { width: "3rem" }
        }}
          variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            onChange={(e) => setPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{ width: "2rem", hegiht: "2rem" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button className="login-button" type="submit">
          Entrar
        </Button>
      </Form>
    </Container >
  );
};

export default Login;
