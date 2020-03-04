var express = require('express');
var router = express.Router();
const app = express();
//filesystem
const fs = require('fs');
const path = require('path');
//middleware
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`./dev-data/tour-simple.json`)
  );

/* GET users listing. */
router.get('/v1/tours', function(req, res, next) {
  res.status(200).json({
    status:'success',
    results:tours.length,
    data:{
      tours:tours
    }
  });
});
router.post('/v1/tours', function(req, res, next) {
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
   
  });

  router.get('/v1/tours/:id', function(req, res, next) {
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
  });


  router.patch('/v1/tours/:id', function(req, res, next) {
  
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
  });
module.exports = router;
