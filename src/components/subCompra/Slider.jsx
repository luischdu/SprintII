import React, {useEffect, useState} from 'react'
import useFetch from 'react-hook-usefetch';
import styled from 'styled-components';

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

    const [datosProducto, setdatosProducto] = useState({
        imageUrl: '',
        imageAlt: '',
        name: '',
        price: ''
    })
    console.log(datosProducto)
    //const [GuappjolotasImg, setGuappjolotasImg] = useState('http://localhost:3000/guajolotas/gua-1/')
    const {data}= useFetch(`http://localhost:3000/guajolotas/${props.producto}`)
    const {imageUrl, name, imageAlt, price} = !!data && data


    useEffect(() => {
        setdatosProducto(props.producto)
    }, [props])

    return (
        <DivStyle>
            <Img src={imageUrl} alt={imageAlt} />
            <Guajolota>{name}</Guajolota>
            <Price>${price} MXN</Price> 
        </DivStyle>
    )
}
