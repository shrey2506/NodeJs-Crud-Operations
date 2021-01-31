const mongoose = require('mongoose')
const crypto=require('crypto')

const blogSchema=new mongoose.Schema({
    blogTitle:{
        type: String,
        trim: true,
        required:true,
       
        index: true
    },

    blogId:{
        type: String,
        maxLength: 3,
        required:true,
        
        index: true
    },

    content: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100
    },

    Date: {
        type: String,
        required: true
        
    },

    mediaFile: {
        data: Buffer,
        contentType: String
    },

    slug: {
        type: String,
        unique: true,
        index: true
    },
}, {timestamp: true})

module.exports=mongoose.model('Blogs',blogSchema)