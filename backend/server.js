//packages

const express= require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser')
const cors=require('cors')
require('dotenv').config()

//bringing routes
const peopleRoutes=require('./Routes/people')

//app

const app=express()

//database

mongoose.connect(
    process.env.DATABASE,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    }
    ).then(()=>console.log('DB connected'));

//middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//cors

if(process.env.NODE_ENV == 'development'){
    app.use(cors({origin: `${process.env.CLIENT_URL}` }))
}


//routes middleware
app.use('/api',peopleRoutes)



//port
const port= process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})