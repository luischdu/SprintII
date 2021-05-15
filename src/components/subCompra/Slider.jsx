import React, { useEffect, useState } from 'react'
import useFetch from 'react-hook-usefetch';
import styled from 'styled-components';
import axios from "axios"

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    height: 150px;
    width: 150px;
    padding-bottom: 20px;
`

const Guajolota = styled.h1`
font-size: 28px;
margin: 0;
padding: 0;
`

const Price = styled.h1`
font-size: 28px;
color: #FA4A0C;
margin: 0;
padding: 0;

`

export const Slider = (props) => {
    const [state, setState] = useState({})

    // console.log(datosProducto)
    //const [GuappjolotasImg, setGuappjolotasImg] = useState('http://localhost:3000/guajolotas/gua-1/')
    // const {data}= useFetch(`http://localhost:3000/guajolotas`)
    // console.log(props.producto);

    useEffect(() => {
        axios.get('http://localhost:3000/guajolotas')
            .then(res => setState(res.data))
    }, [props])



    // if (!state.length) {
    //     return <h1>Cargando.....</h1>
    // } else {
    //     let product = state.filter(el => el.id == props.producto)[0]
    //     return <DivStyle>
    //                 <Img src={product.imageUrl} alt={product.name} />
    //                 <Guajolota>{product.name}</Guajolota>
    //                 <Price>${product.price} MXN</Price>
    //             </DivStyle>
    // }
    return(
        !state.length
    ? <h1>Cargando.....</h1>
    : state.map(product => <DivStyle key={product.id} >
                        <Img src={product.imageUrl} alt={product.name} />
                     <Guajolota>{product.name}</Guajolota>
                       <Price>${product.price} MXN</Price>
                   </DivStyle>)
    )
    
}
