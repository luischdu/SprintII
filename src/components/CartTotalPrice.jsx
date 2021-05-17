import React from 'react'
import styled from 'styled-components'
import color from "../assets/predeterminatedStyles"


const ConstraintContainer = styled.div`
        max-width: 87%;
        margin: auto;
    `
const TotalPriceContainer = styled.div`
        background-color: white;
        border-radius: 20px;
        margin: 20px 0;
        height: 53px;
        padding: 16px;
        display: flex;
        align-items:center;
        justify-content: space-between;
    `
const TotalPriceTitle = styled.p`
        color: ${color.blackColor};
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;
    `

const TotalPriceValue = styled.p`
        color: ${color.primaryColor};
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;

    `

function CartTotalPrice() {
    return (
        <ConstraintContainer>
            <TotalPriceContainer>
                <TotalPriceTitle>Total</TotalPriceTitle>
                <TotalPriceValue>$50 MXN</TotalPriceValue>
            </TotalPriceContainer>
        </ConstraintContainer>
    )
}

export default CartTotalPrice
