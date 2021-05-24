const express = require("express")
const stripe = require("stripe");
const cors = require("cors")

const app = express()

app.use(cors({origin: "http://localhost:3005/cart"}))
app.use(express.json())

app.post("/api/checkout", (req, res) =>{
    console.log(req.body)
    res.send("Received")
})

app.listen(3001, () => {
    console.log("Server on port", 3001)
})