import React from 'react'
import { Slider } from './subCompra/Slider'
import { Amount } from './subCompra/Amount'
import { Navbar } from './subCompra/Navbar'
import { Flavours } from './subCompra/Flavours'


export const Comprar = () => {
    const [Producto, setProducto] = React.useState(1)

    const handleClick = (eleccion) => {
        setProducto(eleccion)   
    }

    return (
        <>
            <Navbar />
            <Slider producto={Producto}/>
            <Amount />
            <Flavours clickProducto={handleClick} test={1}/>
        </>
    )
}
