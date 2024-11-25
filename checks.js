const express = require('express')

const app = express()

app.get('/health-checkup',(req,res)=>{
    const username = req.query.username
    const password = req.query.password
    const kidneyID = req.query.id
    if(username==='gaurav' && username==='shah'){
        if(kidneyID==1 || kidneyID==2){
            res.json({
                msg: "Your kidney is fine"
            })
        }
    }
    res.json({
        msg: "Something bad"
    })
})

app.listen(3000,()=>{
    console.log("Server has sarted");
})