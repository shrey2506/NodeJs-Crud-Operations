const express = require('express')
const router=express.Router()

const {time, createBlog,deleteBlog,getBlogs,getSingleBlog,updateBlog} =require('../Controllers/peopleControllers')

//validators
const {runValidation} =require('../Validators/')
const {userValidator} =require('../Validators/peopleValidator')


router.get('/',time)

router.post('/create-blog',userValidator ,runValidation , createBlog)

router.get('/blogs', getBlogs)

router.get('/blog/:slug', getSingleBlog)

router.delete('/remove/:slug', deleteBlog)

router.put('/blog/:slug', updateBlog)

module.exports = router