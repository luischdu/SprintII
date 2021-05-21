import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px 0 20px;
`

export const Navbar = () => {
    return (
        <NavStyle>
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faShoppingCart} />
        </NavStyle>
    )
}
