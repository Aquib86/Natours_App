const { log } = require('console');
const fs=require('fs')


const tours=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

//params
exports.checkID=(req,res,next,val)=>{
   console.log(`Hi there, The id is ${val}`);
    if(req.params.id*1>=tours.length){
        return res.status(404).json({
            status:"fail",
            message:"Invalid ID"
        })
    }

    next();

}

exports.checkBody=(req,res,next)=>{
    // if(!req.body.name)console.log("nahi hai");
    // else console.log("hai");
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status:'fail',
            message:'Missing name or price'
        })
    }
    next();
}




//Route Handlers

exports.getAllTours=(req,res)=>{
    // if(!req.body.place)console.log(req.body);
    // else console.log("this is the end");
    res.status(200).send({
        requestedAt: req.requestTime,
        status:"success",
        results:tours.length,
        data:{
            tours:tours
        }
    })
}

exports.getTour=(req,res)=>{
    const id=req.params.id*1;
    
    const tour=tours.find(el=>el.id===id)
    res.status(200).send({
        status:"success",
        data:{
            tour
        }
    })
}

exports.createTour=(req,res)=>{

    const newId=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body);

    tours.push(newTour);

    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).send({
            status:"success",
            data:{
                tours
            }
        })
    })
    
    
}

exports.updateTour=(req,res)=>{

    
    res.status(200).send({
        status:"success",
        data:{
            tour:"<updated tour>"
        }
    })
}


exports.deleteTour=(req,res)=>{

    
    if(req.params.id*1>=tours.length){
        return res.status(404).json({
            status:"fail",
            message:"Invalid ID"
        })
    }

    res.status(204).send({
        status:"success",
        data:"null"
    })
}

