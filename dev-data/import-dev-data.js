const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const Tour=require('./../models/tourModel');


//mongodb
mongoose.connect('mongodb://localhost/expresstut',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});
mongoose.connection.once('open',function(){
   console.log('Congrats database connection ');
});

// read json
const tours = fs.readFileSync(`./dev-data/tour-simple.json`, 'utf-8');

const importData =async()=>{
    try{
     await Tour.create(tours);
     console.log('imported all');
     process.exit();
    }catch(err){
     console.log(err);
    }
};


//delete data all from data

const deleteData =async ()=>{
    try{
     await Tour.deleteMany();
     console.log('deleted all');
     process.exit();
    }catch(err){
     console.log(err);
    }
};
if(process.argv[2]==='--import'){
    importData()
}else if (process.argv[2]==='--delete'){
    deleteData();
}
console.log(process.argv);