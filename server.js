const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const app = require ('./app');
dotenv.config({path:'./config.env'});

//mongodb
mongoose.connect('mongodb://localhost/expresstut',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});
mongoose.connection.once('open',function(){
   console.log('Congrats database connection ');
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
   console.log(`app running ${port}..`);
});