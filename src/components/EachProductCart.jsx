import React from 'react'
import styled from 'styled-components'
import color from "../assets/predeterminatedStyles"

const AllProductsContainer = styled.div`
        max-width: 87%;
        margin: auto;
    `

const EachProductContainer = styled.div`  
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    `
const EachProductInfo = styled.div`
    display: flex;
    justify-content: center;
`

const EachProductImage = styled.img`
        height:56px;
        width: 56px;
        background-color: inherit;
        object-fit: cover;
    `
const EachProductDescription = styled.div`
        margin-left: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

const EachProductName = styled.p`
        color: ${color.blackColor};
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    `

const EachProductQuantity = styled.p`
        color: ${color.primaryColor};
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    `


const EachProductPrice = styled.p`
        color: ${color.primaryColor};
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    `

function EachProductCart() {
    return (
        <AllProductsContainer>
            <EachProductContainer>
            <EachProductInfo>
                <EachProductImage src="https://i.imgur.com/o1aaJ1d.png" />
                <EachProductDescription>
                    <EachProductName>Guajolota de tamal Verde</EachProductName>
                    <EachProductQuantity>x1</EachProductQuantity>
                </EachProductDescription>
            </EachProductInfo>
            <EachProductPrice>$50 MXN</EachProductPrice>
        </EachProductContainer>
        </AllProductsContainer>
    )
}

export default EachProductCart
