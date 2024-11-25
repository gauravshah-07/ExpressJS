const express = require('express')
const app = express()

var users = [
    {
        names: "John",
        age: 21,
        kidney: [
            {
            no: 1,
            stat: "healthy"
            },
            {
                no: 2,
                stat: "unhealthy"
            }
        ]
    }
]

app.get('/health-checkup',(req,res)=>{
    const username = req.query.username
    let kidneys = []
    users.forEach((patient)=>{
        if(patient.names == username){
            kidneys = kidneys.concat(patient.kidney)
        }
    })
    const noOfKidneys = kidneys.length
    let noOfHealthyKidneys = 0
    let noOfUnHealthyKidneys = 0
    kidneys.forEach((k)=>{
        if(k.stat === "healthy"){
            noOfHealthyKidneys = noOfHealthyKidneys + 1
        }
        else{
            noOfUnHealthyKidneys = noOfUnHealthyKidneys + 1
        }
    })
    res.send(`No. of Healthy Kidneys : ${noOfHealthyKidneys} and No. of Unhealthy Kidneys : ${noOfUnHealthyKidneys}`)
})

app.listen(3000,()=>{
    console.log("The server has been started");
})