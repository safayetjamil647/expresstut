var express = require('express');
const tourController = require('./../controller/tourController');
const {getAllTours,postTour,getTour,updateTour,deleteTour} = require('./../controller/tourController');

 
const router= express.Router();

router.param('id',tourController.checkID);

router
.route('/')
.get(getAllTours)
.post(tourController.checkBody,postTour);

router
.route('/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour);

module.exports = router;