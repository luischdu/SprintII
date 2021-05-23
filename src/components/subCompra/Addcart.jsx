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
    z-index: 200;
    
`

const Addcart = (props) => {
    const [state, setstate] = useState(false)
    const [Dato, setDato] = useState({})
   // setvalores(data)
    const [compra, setcompra] = useState(null)
    const [compraCombo, setcompraCombo] = useState(null)

    const shop = () => {
        let newPrice = Dato.price * props.Total;
        setcompra({
            "id": Dato.id,
            "flavor": Dato.flavor,
            "imageUrl": Dato.imageUrl,
            "imageAlt": Dato.imageAlt,
            "name": Dato.name,
            "price": newPrice,
            "quantity": props.Total
        });
        setcompraCombo(props.Combo)
        !state && setstate(true)
    }

    useEffect(() => {
        if(state) {
            axios.all([
                axios.post(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart`, compraCombo),
                axios.post(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart`, compra)
              ]).then(axios.spread((response1, response2) => {
                console.log(response1.data.url);
                console.log(response2.data.url);
              })).catch(error => {
                console.log(error);
              });
            // axios.post(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart`, compraCombo)
            // axios.post(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart`, compra)
            //     .then(res => {
            //         console.log(res.data);
            //     })
            
            //     .then(res => {
            //         console.log(res.data);
            //     })
            setstate(false)
        }
        
    }, [shop])


    useEffect(() => {
        axios.get(`https://api-fake-sprint-guappjalotas.herokuapp.com/${props.categoria}/${props.Producto}`)
            .then(res => setDato(res.data))
    }, [props.Producto])

    return (
        <div>
            <Button onClick={shop}>Agregar {props.Total} al carrito ${Dato.price * props.Total}</Button>
        </div>
    )
}

export default Addcart
