const mongoose = require('mongoose')
const studModel = require('./09_user_model.js')
mongoose.connect("mongodb://localhost/be_demo_db")
const db = mongoose.connection // start the connection with database named be_demo_db

db.on("error",()=>{
    console.log("Error while connectiing to database");
})

db.once("open",()=>{
    console.log("Connected to mongodb");
    init()
})

async function init(){
    const user1 = {
        name: "Gaurav Shah",
        age: 20
    }
    const std_obj = await studModel.create(user1)
    console.log(std_obj);
}