const express = require('express');
const Stripe = require('stripe');
const cors = require('cors')

const app = express();

const stripe = new Stripe("sk_test_51IuQhODxWwRTK4xqrhuMON11XQJDsXmYgiUIxocDCo8HZ5j7SoWOsgupVYjEcvnwK59k6EBkbnFAZnHgtKvBeku200QFtNykXP")

app.use(cors({ origin: 'http://localhost:3005' }))

app.use(express.json())

app.post('/api/checkout', async (req, res) => {

    try {
        const { id, amount } = req.body;
        await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Gaming Keyboarding",
            payment_method: id,
            confirm: true
        })
        console.log(payment);
        res.send({ message: 'Succesfull payment' });
    } catch (error) {
        console.log(error);
        res.json({message: error})
    }
})

app.listen(3001, () => {
    console.log('Server on port', 3001);
})