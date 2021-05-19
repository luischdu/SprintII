import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

const ImgCarStyled = styled.img`
  height: 10%;
  width: 10%;
`;

const ImgLogoStyle = styled.img`
  width: 26.5%;

  animation: ocultar 4s alternate;
  @keyframes ocultar {
    0% {
      visibility: none;
      transform: translateY(0);
    }

    50% {
      transform: translateY(-45vh) scale(1.8);
    }

    100% {
      transform: translateZ(-30vw) translateY(-86vh) translateX(-35vw)
        scale(0.83);
      visibility: visible;
    }
  }

`;
const ImgStyle = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  animation: aumentar 4s alternate;
  width: 30%;
  visibility: hidden;

  @keyframes aumentar {
    0% {
      visibility: visible;
      transform: translateY(0);
    }

    50% {
      transform: translateY(-45vh) scale(1.8);
    }

    100% {
      transform: translateZ(-30vw) translateY(-86vh) translateX(-35vw)
        scale(0.83);
      visibility: visible;
    }
  }
`;



const Header = () => {
  return (
    <>
      <HeaderStyle>
        <ImgLogoStyle src="https://i.imgur.com/8aAwol7.png" alt="logo" />
        <ImgStyle src="https://i.imgur.com/8aAwol7.png" alt="logo" />
        <ImgCarStyled src="https://i.imgur.com/ZsLvmzh.png" />
      </HeaderStyle>
    </>
  );
};

export default Header;
