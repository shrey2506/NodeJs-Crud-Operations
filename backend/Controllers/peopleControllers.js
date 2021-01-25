const PeopleModel =require('../Models/people')
const slugify = require('slugify')

exports.time=(req,res)=>{
    res.json({time: Date().toString()})
}

exports.createPerson=(req,res)=>{
    // const {userId, personName} =req.body;
    
    // res.json({
    //     person: {userId, personName}
    // });

    PeopleModel.findOne({userId: req.body.userId}).exec((err, user)=>{
        if(user){
            return res.status(400).json({
                error: 'UserId already exists'
            })
        }

        const {userId, personName}=req.body
        
        
        
        let newUser=new PeopleModel({userId, personName})
        newUser.slug=slugify(userId)
        newUser.save((err, success)=>{
            if(err){
                return res.status(400).json({
                    error: err
                })
            }

            res.json({
                user: success
            })

            // return res.json({
            //     message: 'User added successfully'
            // })
        })
    })
   
}

exports.getPeople=(req,res)=>{
    PeopleModel.find({})
       
        .exec((err,data)=>{
            if(err){
                return res.json({
                    error: 'No data of people found'
                })
            }

            res.json(data);
        })
}

exports.getPerson=(req,res)=>{
    const slug=req.params.slug
    PeopleModel.findOne({slug})
      .exec((err,user)=>{
          if(err){
              return res.json({
                  error: 'User Not Found'
              })
          }

          res.json(user);
      })
}

exports.deletePerson=(req,res)=>{
    const slug=req.params.slug
    PeopleModel.findOneAndRemove({slug})
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

exports.updatePerson=(req,res)=>{
    const slug=req.params.slug
    PeopleModel.findOne({slug})
       .exec((err,data)=>{
        if(err){
            return res.json({
                error: 'Updation Failed'
            })
        }
        // res.json(data)
        const {personName}=req.body
        
        data.personName=personName
        data.save((err,success)=>{
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