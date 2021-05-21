import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import useFetch from 'react-hook-usefetch'
import styled from 'styled-components'

const Button = styled.button`
    position: fixed;
    text-align: center;
    bottom: 0;
    margin: 0 auto;
    background: #FA4A0C;
    color:  white;
    font-size: 1em;
    margin: 1em;
    padding: 15px 5px;
    border: none;
    border-radius: 40px;
    width: 312px;
    height: 69px;
    
`

const Addcart = (props) => {
    const [state, setstate] = useState(false)
    const [Dato, setDato] = useState({})
   // setvalores(data)
    const [compra, setcompra] = useState({
        "producto": "",
        "cantidad": "",
        "preciototal": ""
    })

    const shop = () => {
        let newPrice = Dato.price * props.Total;
        setcompra({
            "producto": Dato.name,
            "cantidad": props.Total,
            "preciototal": newPrice
        });
        !state && setstate(true)
    }
    useEffect(() => {
        if(state) {
            axios.post(`http://localhost:3000/cart/`, { compra })
                .then(res => {
                    console.log(res.data);
                })
            setstate(false)
        }
    }, [shop])

    useEffect(() => {
        axios.get(`http://localhost:3000/guajolotas/${props.Producto}`)
            .then(res => setDato(res.data))
    }, [props.Producto])

    return (
        <div>
            <Button onClick={shop}>Agregar {props.Total} al carrito ${Dato.price * props.Total}</Button>
        </div>
    )
}

export default Addcart
