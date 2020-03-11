const fs = require('fs');
const tours = JSON.parse(
fs.readFileSync(`./dev-data/tour-simple.json`)
);
//route handlers
exports.getAllTours=(req, res, next)=>{
res.status(200).json({
  status:'success',
  results:tours.length,
  data:{
    tours:tours
  }
});
};

exports.postTour= (req, res, next)=> {
const newId= tours[tours.length - 1].id + 1;
const newTour= Object.assign({id:newId}, req.body);
tours.push(newTour);
fs.writeFile(`./dev-data/tour-simple.json`, JSON.stringify(tours),err=>{
  res.status(201).json({
    status:'success',
    data:{
      tour:newTour
    }
  })
})

}

exports.getTour=(req, res, next)=> {
console.log(req.params)
const id = req.params.id * 1;
if(id>tours.length){
  return res.status(404).json({
    status:'fail',
    message:'Invalid ID'
  });
}
const tour = tours.find(el => el.id ===id)
res.status(200).json({
  status:'success',
  results:tours.length,
  data:{
    tour
  }
});
}
exports.updateTour= (req, res, next)=>{

if(req.params.id*1>tours.length){
  return res.status(404).json({
    status:'fail',
    message:'Invalid ID'
  });
}    
res.status(200).json({
  status:'success',
  
  data:{
    tour:'<updated>'
  }
});
}
exports.deleteTour= (req, res, next)=>{

if(req.params.id*1>tours.length){
  return res.status(404).json({
    status:'fail',
    message:'Invalid ID'
  });
}    
res.status(204).json({
  status:'success',
  
  data:null
});
}