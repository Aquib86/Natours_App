const express=require('express')
const morgan=require('morgan')
const tourRouter=require('./routes/tourRoutes')
const userRouter=require('./routes/userRoutes')

const app=express();


//middlewares

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

// app.use((req,res,next)=>{
//     console.log("Hi from the middleware!");
//     next();
// })


// app.use((req,res,next)=>{
    
//     req.requestTime= new Date().toISOString();
//     next();
// })


// app.use(morgan('dev'))








//Routes



app.use('/api/v1/users',userRouter);
app.use('/api/v1/tours',tourRouter);








// app.get('/api/v1/tours',getAllTours);
// app.get('/api/v1/tours/:id',getTour);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',updateTour);
// app.delete('/api/v1/tours/:id',deleteTour)


module.exports=app;