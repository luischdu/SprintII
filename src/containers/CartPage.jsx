import React from 'react'
import CartHeader from '../components/CartHeader'
import CartPayButton from '../components/CartPayButton'
import CartTotalPrice from '../components/CartTotalPrice'
import EachProductCart from '../components/EachProductCart'
import ModalCart from '../components/ModalCart'
import NoProductsCart from '../components/NoProductsCart'

function CartPage() {
    return (
        <div>
            <CartHeader/>
            {/* <NoProductsCart/> */}
            <EachProductCart/>
            <CartTotalPrice/>
            <ModalCart/>
            <CartPayButton />
        </div>
    )
}

export default CartPage
