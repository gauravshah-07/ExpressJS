const express = require('express')
const app = express()
app.use(express.json())

app.post("/",(req,res)=>{
    const kidneys = req.body.kidneys // I want to check if this is an array or not, user can send anything, its our responsibikity from backend side to make sure that user sends array. For this we use zod library.zpo
    const n = kidneys.length
    res.send("You have " + n + " kidneys")
})

// global catch is a error handling middleware, which catches any error if present.
app.use((err,req,res,next)=>{
    res.json({
        msg: "Sorry, there is something wrong with our sevrer."
    })
})

app.listen("5000",()=>{
    console.log("Server has started");
})