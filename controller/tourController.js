const Tour = require('./../models/tourModel');
// const tours = JSON.parse(
// fs.readFileSync(`./dev-data/tour-simple.json`)
// );


//route handlers
exports.getAllTours=async (req, res, next)=>{
  try{
 const tours= await Tour.find();
res.status(200).json({
  status:'success',
  results:tours.length,
  data:{
    tours:tours
  }
});
  }catch(err){
    res.status(404).json({
      status:'failed',
    message:err
    })

  }
};


exports.createTour= async(req, res, next)=> {
  try{

  const newTour=await Tour.create(req.body);
  res.status(201).json({
    status:'success',
    data:{
      tour:newTour
    }
  });
}catch(err){
  res.status(400).json({
    status:'failed',
    message:'invalid data send'
    
  });
}
};

exports.getTour=async (req, res, next)=> {
try{
 const tour= await Tour.findById(req.params.id);
 res.status(200).json({
  status:'success',
  data:{
    tour
  }
});
}catch(err){
  res.status(404).json({
    status:'failed',
    message:err
    
  })
}

}
exports.updateTour= async(req, res, next)=>{
try{
  const tour= await Tour.findByIdAndUpdate(req.params.id, req.body,{
    new:true,
    runValidators:true
  });
  res.status(200).json({
    status:'success',
    
    data:{
      tour
    }
  });

}catch(err){
  res.status(404).json({
    status:'failed',
    message:err
    
  })

}  

}



exports.deleteTour= async(req, res, next)=>{
try{
await Tour.findByIdAndDelete(req.params.id)
res.status(204).json({
  status:'success',
  
  data:null
});
}catch(err){

  res.status(404).json({
    status:'failed',
    message:err
    
  })
}
}