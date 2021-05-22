import React, { useState } from 'react';
import {
  FormImgStyle,
  InputStyle,
  ButtonStyle,
  DivContainer,
  H1Style,
  PFormStyle,
  SpanFormStyle,
} from './styles/Style.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validar = (event) => {
    event.preventDefault();

    const usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario.userMail === email && usuario.pass === password) {
      console.log('logeado');
    } else {
      console.log('no registrador');
    }
  };

  return (
    <DivContainer>
      <form onSubmit={validar} action="">
        <FormImgStyle src="https://i.imgur.com/8aAwol7.png"></FormImgStyle>
        <br></br>
        <H1Style>Login</H1Style>
        <br></br>
        <InputStyle
          type="email"
          name="email"
          placeholder="Usuario"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputStyle
          type="password"
          name="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <ButtonStyle type="submit">Ingresar</ButtonStyle>
        <PFormStyle>
          Si aun no estas registrado
          <SpanFormStyle> Registrate Aquí</SpanFormStyle>
        </PFormStyle>
      </form>
    </DivContainer>
  );
};

export default Login;
