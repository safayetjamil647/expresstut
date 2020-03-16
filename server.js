const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const app = require ('./app');
dotenv.config({path:'./config.env'});

//mongodb
mongoose.connect('mongodb://localhost/expresstut',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});
mongoose.connection.once('open',function(){
   console.log('Congrats');
});

const tourSchema= new mongoose.Schema({
   name: {
        type: String,
        required:[true,'Must have a name'],
        unique:true
   },

   rating: {
      type: Number,
      default:4.5
   },

   price: {
      type: Number,
      required:[true,'Must have a number']
   },

})

const Tour = mongoose.model('Tour',tourSchema);

const TestTour= new Tour ({
   name:'The park camp ',
   rating :4.7,
   price:497
})
TestTour.save().then(doc=>{
   console.log(doc);
}).catch(err=>{
   console.log("Errror",err);
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
   console.log(`app running ${port}..`);
});