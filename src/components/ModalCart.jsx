import React from 'react'
import styled from 'styled-components'
import color from "../assets/predeterminatedStyles"
import QuantityButton from './QuantityButton'


const ModalContainer = styled.div`
        position: absolute;
        top: 0;
        height: 100vh;
        width: 100vw;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    `

const ModalBackground = styled.div`
        position: absolute;
        height:100%;
        width: 100%;
        background-color: ${color.blackColor};
        opacity: 0.5;
        z-index: 20;
        
        
    `

const ModalCard = styled.div`
        position: relative;
        background-color: ${color.greyColor};
        padding: 24px;
        border-radius: 20px;
        height: 400px;
        width: 312px;
        z-index: 30;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
const ModalCardImage = styled.img`
        height: 80px;
        width: 80px;
        margin-bottom: 16px;
    `

const ModalProductName = styled.p`
        font-size: 17px;
        font-weight: 600;
        line-height: 21px;
        color: ${color.blackColor};
    `

const ModalProductPrice = styled.p`
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        color: ${color.primaryColor};
    `

const ModalUpdateButton = styled.button`
        background-color: ${color.primaryColor};
        width: 100%;
        color: white;
        font-weight: 600;
        font-size: 17px;
        border-radius: 40px;
        margin: 16px 0;
        height: 45px;
    `

const ModalCloseText = styled.p`
        font-size: 17px;
        font-weight: 600;
        line-height: 21px;
        color: ${color.primaryColor};
    `

function ModalCart() {
    return (
        <ModalContainer>
            <ModalBackground></ModalBackground>
            <ModalCard>
                <ModalCardImage src="https://i.imgur.com/o1aaJ1d.png" />
                <ModalProductName>Guajolota de Tamal Verde</ModalProductName>
                <ModalProductPrice>$50 MXN</ModalProductPrice>
                <QuantityButton></QuantityButton>
                <ModalUpdateButton>Actualizar</ModalUpdateButton>
                <ModalCloseText>Cerrar</ModalCloseText>
            </ModalCard>
            
        </ModalContainer>
    )
}

export default ModalCart
