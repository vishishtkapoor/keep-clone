const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://todoevent:event12345@cluster0.vltvns2.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports ={
    todo
}