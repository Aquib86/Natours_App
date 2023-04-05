//starting server
const  dotenv=require('dotenv')
const app=require('./app')
// import dotenv from 'dotenv'

dotenv.config({path:'./config.env'})

// console.log(process.env);

const port=3000;

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})


