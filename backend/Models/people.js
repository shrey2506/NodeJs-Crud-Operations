const mongoose = require('mongoose')
const crypto=require('crypto')

const peopleSchema=new mongoose.Schema({
    personName:{
        type: String,
        trim: true,
        required:true,
       
        index: true
    },

    userId: {
        type: String,
        required: true,
        unique: true,
        maxlength: 3
    },

    slug: {
        type: String,
        unique: true,
        index: true
    },
}, {timestamp: true})

module.exports=mongoose.model('People',peopleSchema)