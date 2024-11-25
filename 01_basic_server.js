const express = require('express')
const app = express()

function calculateSum(n){
    let sum = 0
    for(let i = 0; i<n; i++){
        sum = sum + i
    }
    return sum
}

app.get('/sum',(req,res)=>{
    const n = req.query.a
    let ans = calculateSum(n)
    res.send("The answer is " + ans)
})

app.listen(3000,()=>{
    console.log("The server has started.");
})