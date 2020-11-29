const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({
    title: {
        type: String, 
        required: true, 
        minlength: 3,
        maxlength: 64,
        unique: true
    },
    post_name: {
        type: String, 
        required: true, 
        minlength: 5,
        maxlength: 64
    },
    description: {
        type: String,
        required: true,
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post