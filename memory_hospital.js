// const express = require('express')
// const app = express()

// var patients = [
//     {
//         firstName: "John",
//         age: 20,
//         kidneys: [
//             {
//                 healthy : false
//             }
//         ]
//     }
// ]
// function healthOfKidney(names,n){
//     if(names[firstName] == n){
//         return names[kidneys]
//     }
// }
// app.get('/',(req,res)=>{
//     n = req.query.n
//     let arr = patients.forEach(healthOfKidney,n)
//     const noOfKidneys = arr.length
//     const noOfHealthyKidnyes = arr.forEach((x)=>{
//         let i = 0
//         if(x[healty] == true){
//             i = i + 1
//         }
//         return i
//     })
//     const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidnyes
//     res.send(`No. of Kidneys : ${noOfKidneys}, No. of healthy kisneys : ${noOfHealthyKidnyes}, No, of Unhealthy Kidneys : ${noOfUnhealthyKidneys}`)
// })

// app.listen(3000,()=>{
//     console.log("The server has started. ");
// })

const express = require('express');
const app = express();

var patients = [
    {
        firstName: "John",
        age: 20,
        kidneys: [
            {
                healthy: false
            }
        ]
    }
];

function healthOfKidney(patient, n) {
    if (patient.firstName === n) {
        return patient.kidneys;
    }
    return []; // Return an empty array if no match
}

app.get('/', (req, res) => {
    const n = req.query.n;
    let kidneys = [];

    patients.forEach((patient) => {
        kidneys = kidneys.concat(healthOfKidney(patient, n));
    });

    const noOfKidneys = kidneys.length;
    const noOfHealthyKidneys = kidneys.filter(kidney => kidney.healthy).length;
    const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;

    res.send(`No. of Kidneys: ${noOfKidneys}, No. of Healthy Kidneys: ${noOfHealthyKidneys}, No. of Unhealthy Kidneys: ${noOfUnhealthyKidneys}`);
});
// app.post('/b',(req,res)=>{
//     const n = req.query.a
//     const status = req.query.b
//     let kidneys = []
//     patients.forEach((x)=>{
//         kidneys = kidneys.concat(healthOfKidney(x,n))
//     })
//     kidneys = kidneys.concat({
//         healthy: status
//     })
//     res.json({
//         msg: "Done"
//     })
// })
app.listen(3000, () => {
    console.log("The server has started.");
});
