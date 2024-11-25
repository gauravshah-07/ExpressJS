const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://gauravshah4816:Erlb5QwYpqjtCBx3@cluster0.njdwz.mongodb.net/02_user_appnew")

const User = mongoose.model('users',{
    name: String,
    email: String,
    password: String
})

const user1 = new User({
    name: "Gaurav Shah",
    email: "gauravshah4816@gmail.com",
    passowrd: "123456"
})

user1.save()