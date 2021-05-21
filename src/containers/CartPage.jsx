import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import CartHeader from '../components/CartHeader'
import CartPayButton from '../components/CartPayButton'
import EachProductCart from '../components/EachProductCart'
import ModalCart from '../components/ModalCart'
import StripeCart from '../components/StripeCart'


function CartPage() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)
    const [update, setUpdate] = useState(false)

    const mounted = useRef();
    useEffect(() => {
        console.log(mounted);
        if (!mounted.current) {
            mounted.current = true;
            console.log(mounted)
            axios("http://localhost:3004/cart")
        .then(res => {
        
            setProducts(res.data)
            setLoading(false)
        }).catch(err => console.log(err))
            
          } else {

            if(!update[0].quantity){
                axios.delete(`http://localhost:3004/cart/${update[0].id}`)
                .then(res => {
                    console.log(res);
                    return axios(`http://localhost:3004/cart/`)
                }).then(response => {
        
                    setProducts(response.data)
                    setLoading(false)
                })
            }else{
                axios.put(`http://localhost:3004/cart/${update[0].id}
                `, update[0])
                .then(res => {
                    console.log(res);
                    return axios(`http://localhost:3004/cart/`)
                }).then(response => {
        
                    setProducts(response.data)
                    setLoading(false)
                })
            }         
          }
    }, [update])

   
    return (
        !products.length && loading
        ?<h1>cargando...</h1>
        :<div>
            <CartHeader/>      
            <EachProductCart setModal={setModal} products={products} /> 
            <ModalCart setUpdate={setUpdate} setModal={setModal} modal={modal} />
            {/* <StripeCart/> */}
            <CartPayButton products={products} />
        </div>

    )
}

export default CartPage
