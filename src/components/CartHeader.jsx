import React from 'react'
import color from "../assets/predeterminatedStyles"
import styled from "styled-components"

const ConstraintContainer = styled.div`
        max-width:87%;
        margin: auto;
        height: 100px;
        display: flex;
        align-items: center;
    
    `

const HeaderBackArrow = styled.div`
        height: 24px;
        width: 24px;
        cursor: pointer;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("https://i.imgur.com/KekEeVA.png");
        background-position:center;
        background-repeat: no-repeat;
    `
const HeaderTitle = styled.p`
        font-size: 17px;
        font-weight: 600;
        line-height: 21px;
        color: ${color.blackColor};
        text-align: center;
        flex-grow: 1;
    `

 


function CartHeader() {
    return (
        
        <ConstraintContainer>
            <HeaderBackArrow>
        
            </HeaderBackArrow>
            <HeaderTitle>Carrito</HeaderTitle>
        </ConstraintContainer>
    )
}

export default CartHeader
