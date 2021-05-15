import React, {useState, useEffect} from 'react'
import useFetch from 'react-hook-usefetch';
import styled from 'styled-components'

const FlavoursDiv = styled.div`
    margin: 0 24px;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20%;
`

const H1Style = styled.h1`
    font-size: 20px;
`
//papayaso opacity -> color
const DivImg = styled.div`
    cursor: pointer;
    text-align: center;
    opacity:${props => props.opacity || ".5" };
    :hover {
        opacity: 1;
    }
`
export const Flavours = (props) => {

    const [state, setstate] = useState(props.test)
    const {data}= useFetch(`http://localhost:3000/guajolotas`)


    const handleClick = (e) => {
        setstate(e.target.parentElement.id)  

    }
        
    return (
        !data.length ? <h1>Cargando....</h1>:

        <FlavoursDiv>
            <H1Style>Sabor</H1Style>
            <Container>
                {
                    data.map( items => {

                        if (state == items.id ) {
                            return (
                                <DivImg opacity={1} key={items.id} id={items.id}>
                                <img 
                                onClick={(e) => {
                                    handleClick(e)
                                    props.clickProducto(items.id)
                                }}
                                src={items.flavor}
                                alt="" />
                                </DivImg>
                                )
                        }else {
                            return (
                                <DivImg key={items.id} id={items.id}>
                                <img 
                                onClick={(e) => {
                                    handleClick(e)
                                    props.clickProducto(items.id)
                                }}
                                src={items.flavor}
                                alt="" />
                                </DivImg>
                                )
                        }
                    })
                }
               
            </Container>
        </FlavoursDiv>
    )
}
