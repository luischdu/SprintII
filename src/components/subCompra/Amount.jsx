import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const DivAmount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    border-radius: 15PX ;
    background: whitesmoke;
    margin: 25px auto;
`
const Ancle = styled.a`
    background: white;
    padding: 10px;
    border-radius: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    margin-left: 15px;
    margin-right: 15px;
`


export const Amount = () => {

    const [state, setstate] = useState(1)
    const handleClick = (e) => {
        e.preventDefault();
        state > 1 && setstate(state - 1)
    }
    const handleClickPlus = (e) => {
        e.preventDefault();
        setstate(state + 1)
    }
    return (
        <DivAmount>
            <Ancle onClick={handleClick} >
                <FontAwesomeIcon icon={faMinus} id="minus " />
            </Ancle>
            <h1> {state} </h1>
            <Ancle onClick={handleClickPlus} >
                <FontAwesomeIcon icon={faPlus} id="plus " />
            </Ancle>     
        </DivAmount>
    )
}
