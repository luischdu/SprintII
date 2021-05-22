import React from 'react'
//Debo instalar las dependencias de Stripe
import {loadStripe} from "@stripe/stripe-js"
import {Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js"



//Conexión a Stripe mediante una llave pública, ya que es una herramienta de desarrollo
const stripePromise  =  loadStripe("pk_test_51IrmYdJOjWdrxc7GQJcOuKj3jVOzGk24CYDFnxfxlTJ8ZwVM03qGtAVxMAbqF5fzYYD9ZleBwSNTtDaCm4aQsroh00KjtVJ9uj")


const CheckoutForm = () =>{
    // Se usa para crear la conexión con stripe para el método de pago
    const stripe = useStripe();
    // Me permite acceder a los elementos de stripe
    const elements = useElements();

    const handleSubmit = (e) => {
        e.preventDefault();
// Me devuelve dos posibles valores. Uno es un error, el otro es un método de pago

        let paymentMethodReq;
        stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement)
        })
        .then(paymentMethod => {
            paymentMethodReq=paymentMethod;
            console.log(paymentMethodReq);
        })
        // .catch(error => console.log(error))

        
        //billing_details : billingDetails

        // let putamierda = paymentMethodReq.then(e => e)
    }

    return <form onSubmit={handleSubmit} >
        {/* elemento de stripe con el que puedo acceder a las funcionalidades de validación de tarjetas */}
        <CardElement/>
        <button type="submit" >
            Buy
        </button>
    </form>
}

function StripeCart() {
    return (
        // Elements engloba los demas componentes de Stripe y mediante su propiedad stripe le paso la conexion con la llave pública
        <Elements stripe={stripePromise} >
            <CheckoutForm>

            </CheckoutForm>
        </Elements>
    )
}

export default StripeCart
