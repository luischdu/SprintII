import React, { useRef ,useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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



export const Slider = (props) => {
    const [state, setState] = useState({})

    const slideshow = useRef(null);

	const next = () => {
		// Comprobamos que el slideshow tenga elementos
		if(slideshow.current.children.length > 0){
            
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
			}
			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transicion);

		}
	}
    
    
    const prev = () => {
        console.log('Prev');
    }

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
    :<MainStyle><Container><Slideshow ref={slideshow}> {state.map(product => 
                        <Slide key={product.id}>
                            <Dimg><Img src={product.imageUrl} alt={product.name}/></Dimg>
                            </Slide>
                   ) }</Slideshow>
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
    /*return (
        <DivStyle key={product.id} >

            <Container>
                {
                    !state.length
                    ? <h1>Cargando.....</h1>
                    : state.map(product => <Slideshow>
                        <Slide>
                            <a href="#"><Img src={product.imageUrl} alt={product.name} /></a>
                        </Slide>
                    </Slideshow>)
                    
                }
                <Controls id="Controles">
                    <Button>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                    <Button>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </Controls>
            </Container>
        </DivStyle>
    )*/

    /* return(
         !state.length
     ? <h1>Cargando.....</h1>
     : state.map(product => <DivStyle key={product.id} >
                         <Img src={product.imageUrl} alt={product.name} />
                      <Guajolota>{product.name}</Guajolota>
                        <Price>${product.price} MXN</Price>
                    </DivStyle>)
     )
     */
}
//<FontAwesomeIcon icon={faChevronLeft} />