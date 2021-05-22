import React from 'react';
import { Slider } from './subCompra/Slider';
import { Amount } from './subCompra/Amount';
import { Navbar } from './subCompra/Navbar';
import { Flavours } from './subCompra/Flavours';
import Addcart from './subCompra/Addcart';
import { useParams } from 'react-router';

export const Comprar = () => {
  //Props para el Slide
  const [Producto, setProducto] = React.useState(1);
  const [Boolean, setBoolean] = React.useState(false);
  const [Total, setTotal] = React.useState(1);

  //Obtener Props del Componente sabores
  const handleClick = (eleccion) => {
    setProducto(eleccion);
  };

  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Navbar />
      <Slider
        handleProducto={handleClick}
        producto={Producto}
        boolean={Boolean}
        setboolean={setBoolean}
      />
      <Amount Total={Total} setTotal={setTotal} />
      <Flavours
        clickProducto={handleClick}
        test={Producto}
        boolean={Boolean}
        setboolean={setBoolean}
      />
      <Addcart Total={Total} Producto={Producto} />
    </>
  );
};
