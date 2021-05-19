import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import CartHeader from '../components/CartHeader'
import CartPayButton from '../components/CartPayButton'
import EachProductCart from '../components/EachProductCart'
import ModalCart from '../components/ModalCart'


function CartPage() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)
    const [update, setUpdate] = useState(false)

    // const prevProductsRef = useRef();
    useEffect(() => {

        axios("http://localhost:3004/cart")
        .then(res => {
        
            setProducts(res.data)
            setLoading(false)
        }).catch(err => console.log(err))

        
         

        //    ()=> mejodeeluseeffect() 
        
        // debugger
        // prevProductsRef.current = products;
        // console.log(prevProductsRef);


    }, [update])
    // async function logFetch(url) {
        //     try {
        //       const response = await fetch(url);
        //       console.log(await response.text());
        //     }
        //     catch (err) {
        //       console.log('fetch failed', err);
        //     }
        //   }
        //   logFetch("http://localhost:3004/cart")


        // return ()=>{
            
        //     axios("http://localhost:3004/cart")
        //     .then(res => {
        //         console.log(res);
        // })
        //     console.log("hola-update");   
        //     debugger 
        // }

    

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [])



    
        // async function loadProducts(){
        //     const response = await refresh()
        //     console.log(response);
        //     return response;
        // }
        
        // setTimeout(()=> axios("http://localhost:3004/cart")
        // .then(res => {
        
        //     setProducts(res.data)
        //     setLoading(false)
        // }), 2000)

        
        
        

    // const refresh = async () =>{
    //     const data = await fetch("http://localhost:3004/cart");
    //     const res = await data.json()
    //     console.log(res);
    // }
    
    // async function mejodeeluseeffect() {
    //     const request = await  axios(`http://localhost:3004/cart/`, {
    //         method:"POST",
    //         body: JSON.stringify(update),
    //         headers:{
    //             "Content-type":"application/json"
    //         }
    //     }).then(response => console.log(response))
          
    //          }

    // const prevProducts = prevProductsRef.current

    return (
        !products.length && loading
        ?<h1>cargando...</h1>
        :<div>
            <CartHeader/>      
            <EachProductCart setModal={setModal} products={products} /> 
            <ModalCart setUpdate={setUpdate} setModal={setModal} modal={modal} />
            <CartPayButton products={products} />
        </div>

    )
}

export default CartPage
