const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model("user_collection",studentSchema) // (collection_name,schema)

