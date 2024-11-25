const express = require('express')
const app = express()
const zod = require('zod')

// const schema = zod.array(zod.number())
app.use(express.json())

const schema = zod.object({
    email: zod.string,
    password: zod.string,
    country: zod.literal('IN').or('US'),
    kidneys: zod.array(zod.number)
})

app.post('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys) // safeParse returns an object with json object : either {success: true} or {success: false}.
    res.send({
        response
    })
})

app.listen(3000,()=>{
    console.log("Server has been started");
})