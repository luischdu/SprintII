import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const DivStyled = styled.div`
  z-index: -1;
`;

const Text = () => {
  return (
    <DivStyled>
      <h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam
        eveniet quae explicabo quasi libero beatae ab dolor at ad, sequi
        voluptatem incidunt vel ex ut accusantium totam iusto odit unde dolorum,
        ratione magni praesentium non. Omnis ipsa voluptates dolore, dignissimos
        vitae minima ducimus perferendis, cum, quisquam earum tenetur ad unde.
      </h3>
    </DivStyled>
  );
};

export default Text;
