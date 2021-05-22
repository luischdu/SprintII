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

const SigUp = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [listaUsers, setListaUsers] = useState([])

  let user = {
      userName: name,
      userLastname: lastname,
      userMail: email,
      pass: password
  }

  const validar = (event) => {
    event.preventDefault();
    console.log('enviado');
    localStorage.setItem('user', JSON.stringify(user))
  };
  
  

  return (
    <DivContainer>
      <form onSubmit={validar} action="">
        <FormImgStyle src="https://i.imgur.com/8aAwol7.png"></FormImgStyle>
        <H1Style>Registro</H1Style>
        <InputStyle
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputStyle
          type="text"
          name="lastname"
          placeholder="Apellido"
          required
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <InputStyle
          type="email"
          name="email"
          placeholder="somthing@email.com"
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
        <ButtonStyle type="submit">Registrarse</ButtonStyle>
        <PFormStyle>
          Si aun no estas registrado<SpanFormStyle> Ingresa Aquí</SpanFormStyle>
        </PFormStyle>
      </form>
    </DivContainer>
  );
};

export default SigUp;
