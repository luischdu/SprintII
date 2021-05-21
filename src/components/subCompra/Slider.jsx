import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

//Inicio de los Estilos
const MainStyle = styled.main`
    max-width: 800px;
    margin: 50px auto;
    overflow: hidden;
`

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    text-align: center;
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
const Container = styled.div`
    position: relative;
`

const Slideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;

`
const Slide = styled.div`
    margin-left: 18px;
    min-width: 90%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 9;
`
const Dimg = styled.div`
    text-align: center;
   
`
const Controls = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
`
const ButtonS = styled.button`
    font-size: 25px;
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
 
    ${props => props.derecho ? 'right: 0px' : 'left: 0px'}
`
// Fin de los Estilos

// Inicio del componente
export const Slider = (props) => {
    const [state, setState] = useState({})

    const slideshow = useRef(null);

    const next = () => {
        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            //Estado Booleano a false
            props.boolean && props.setboolean(false);
            console.log('Siguiente')
            // Obtenemos el primer elemento del slideshow.
            const primerElemento = slideshow.current.children[0];
            // Establecemos la transicion para el slideshow.
            slideshow.current.style.transition = `300ms ease-out all`;
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            const transicion = () => {
                // Reiniciamos la posicion del Slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(primerElemento);
                slideshow.current.removeEventListener('transitionend', transicion)

            }
            // Eventlistener para cuando termina la animacion.
            slideshow.current.addEventListener('transitionend', transicion);
            let item = slideshow.current.children[slideshow.current.children.length - 4].id;
            props.handleProducto(item)
        }
    }

    const prev = () => {
        console.log('Anterior');
        props.boolean && props.setboolean(false);
        if (slideshow.current.children.length > 0) {
            // Obtenemos el ultimo elemento del slideshow.
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `300ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
            let item = slideshow.current.children[0].id;
            props.handleProducto(item);

        }
    }

    const Change = () => {
        if (slideshow.current != null) {
            const arr = slideshow.current.children;
            let idArr = [];
            //console.log(arr);
            //Obtener posicion del Producto
            for (let index = 0; index < arr.length; index++) {
                idArr = [...idArr, arr[index].id];
            }
            let posicion = idArr.indexOf(props.producto);
            console.log(posicion);         
            
            // Obtenemos el primer elemento del slideshow.
            const primerElemento = slideshow.current.children[posicion];
            // Establecemos la transicion para el slideshow.
            slideshow.current.style.transition = `300ms ease-out all`;
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            const transicion = () => {
                // Reiniciamos la posicion del Slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(primerElemento,);
                slideshow.current.removeEventListener('transitionend', transicion)

            }
            // Eventlistener para cuando termina la animacion.
            slideshow.current.addEventListener('transitionend', transicion);


        }
    }


useEffect(() => {
    axios.get('http://localhost:3000/guajolotas')
        .then(res => setState(res.data))
}, [])

useEffect(() => {
    props.boolean && document.addEventListener('DOMContentLoaded', Change());
}, [props])



return (
    !state.length
        ? <h1>Cargando.....</h1>
        : <MainStyle><Container><Slideshow ref={slideshow}> {state.map(product =>
            <Slide key={product.id} id={product.id}>
                <Dimg><Img src={product.imageUrl} alt={product.name} id={product.id} /></Dimg>
                <DivStyle><Guajolota>{product.name}</Guajolota>
                    <Price>${product.price} MXN</Price></DivStyle></Slide>
        )}</Slideshow>
            <Controls id="Controles">
                <ButtonS onClick={prev} >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </ButtonS>
                <ButtonS derecho onClick={next}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </ButtonS>
            </Controls></Container>
        </MainStyle>

)
}
