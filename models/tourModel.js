const mongoose = require('mongoose');
const tourSchema= new mongoose.Schema({
    name: {
         type: String,
         required:[true,'Must have a name'],
         unique:true,
         trim:true
    },

    duration:{
      type: String,
      required:[true,'Must have a duration'],
    },
    maxGroupSize:{
      type: String,
      required:[true,'Must have a group size'],
    },
    difficulty:{
      type: String,
      required:[true,'Must have a difficulty'],
    },
 
    ratingsAverage: {
       type: Number,
       default:4.5
    },
    ratingsQuantity: {
      type: Number,
      default:0
   },
    price: {
       type: Number,
       required:[true,'Must have a number']
    },
    priceDiscount: {
      type: Number,
   },
   summary:{
     type:String,
     trim:true,
     required:[true,'Must have a summary']
   },
   imageCover:{
      type:String,
   },
   images:[String],
   createdAt:{
        type:Date,
        default:Date.now()
   },
   startDates:[Date],
 
 })
 
 const Tour = mongoose.model('Tour',tourSchema);

 module.exports=Tour;