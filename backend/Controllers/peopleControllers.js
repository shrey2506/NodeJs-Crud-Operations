const BlogModel =require('../Models/people')
const slugify = require('slugify')
const fs=require('fs')
const formidable=require('formidable')

exports.time=(req,res)=>{
    res.json({time: Date().toString()})
}

exports.createBlog=(req,res)=>{

    

        

         BlogModel.findOne({userId: req.body.blogId}).exec((err, user)=>{
            if(user){
                return res.status(400).json({
                    error: 'Blog already exists'
                })
            }

            const {blogId,blogTitle,content, Date,}=req.body

            let newBlog=new BlogModel({blogId,blogTitle,content,Date})
            newBlog.slug=slugify(blogId)
            
    
            newBlog.save((err, success)=>{
                if(err){
                    return res.status(400).json({
                        error: err
                    })
                }
    
                res.json({
                    user: success
                })
    
               
            })
    
           
        })
   

}

exports.getBlogs=(req,res)=>{
    BlogModel.find({})
       
        .exec((err,data)=>{
            if(err){
                return res.json({
                    error: 'No data of the blogs found'
                })
            }

            res.json(data);
        })
}

exports.getSingleBlog=(req,res)=>{
    const slug=req.params.slug
    BlogModel.findOne({slug})
      .exec((err,user)=>{
          if(err){
              return res.json({
                  error: 'Blog not found'
              })
          }

          res.json(user);
      })
}

exports.deleteBlog=(req,res)=>{
    const slug=req.params.slug
    BlogModel.findOneAndRemove({slug})
       .exec((err,data)=>{
           if(err){
               return res.json({
                   error: 'Deletion Failed'
               })
           }

           res.json({
               message: 'Blog Deleted Successfully'
           })
       })
}

exports.updateBlog=(req,res)=>{
    const slug=req.params.slug
    BlogModel.findOne({slug})
       .exec((err,data)=>{
        if(err){
            return res.json({
                error: 'Updation Failed'
            })
        }
        // res.json(data)
        const {blogTitle,content}=req.body
        
        data.blogTitle=blogTitle,
        data.content=content,
        data.save((err,success)=>{
            if(err){
                return res.status(400).json({
                    error: err
                })
            }

            res.json({
                blog: success
            })
        })


       })
}