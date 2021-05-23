import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px 0 20px;

`

export const Navbar = () => {
    return (
        <NavStyle>
<<<<<<< HEAD
            <Link to='/ww'><FontAwesomeIcon icon={faChevronLeft} /></Link> 
            <FontAwesomeIcon icon={faShoppingCart} />
=======
            <Link to='/'><FontAwesomeIcon icon={faChevronLeft} /></Link> 
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
>>>>>>> d663430742ce5e0fd3e349e22596b2a8805afc18
        </NavStyle>
    )
}
