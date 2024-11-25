const express = require('express')

const app = express()
const cors = require('cors');
app.use(cors());

app.get('/calculateSum',(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a + b
    res.send(`Value of sum is ${sum}`)
})

app.listen(3000,()=>{
    console.log("Sever has started");
})