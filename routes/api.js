var express = require('express');
// var router = express.Router();
const morgan =require("morgan");
const app = express();
//filesystem

const path = require('path');
//middleware
app.use(morgan('dev'));
app.use(express.json());


// app.use((req,res,next)=>{
//   console.log('hello from the code')
//   next();
// })


//All Route Handlers 

/* GET users listing. */
// router.get('/v1/tours',getAllTours);
// router.post('/v1/tours',postTour);

// router.get('/v1/tours/:id',getTour);


// router.patch('/v1/tours/:id',updateTour);


// router.delete('/v1/tours/:id',deleteTour);

//All route


