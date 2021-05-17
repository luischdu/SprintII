import React, { useState } from 'react'
import styled from 'styled-components'
import color from "../assets/predeterminatedStyles"

const QuantityButtonContainer = styled.div`
        background-color: white;
        margin: 16px;
        border-radius: 20px;
        height: 72px;
        width: 190px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

const QuantityText = styled.p`
        font-size: 22px;
        font-weight: 600;
        color: ${color.blackColor};
    `

const ChangeQuantity = styled.img`
        height: 40px;
        width: 40px;
    `

function QuantityButton() {
    const [quantity, setQuantity] = useState(1)
    const handleMinusClick = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }
    const handlePlusClick = () => {
        setQuantity(quantity + 1)
    }


    return (
        <QuantityButtonContainer>
            <ChangeQuantity onClick={handleMinusClick} src="https://i.imgur.com/PbfRgOM.png" />
            <QuantityText>{quantity}</QuantityText>
            <ChangeQuantity onClick={handlePlusClick} src="https://i.imgur.com/NuEUguh.png" />
        </QuantityButtonContainer>
    )
}

export default QuantityButton
