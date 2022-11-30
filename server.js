const express = require('express');

const app= express();


const mongoose=require('mongoose');



app.use(express.json());






require('dotenv/config');


//connect to DB

console.log(process.env.DB_CONNECTION)
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on("error", err => {

    console.log("err", err)

});



mongoose.connection.on("connected", () => {

    console.log("mongoose is connected...")

});



mongoose.connection.on("disconnected", () => {

    console.log("mongoose is disconnected...")

});



//Routes

app.use(require("./routes/tutorial.routes"));


//How to start listening to server
app.listen(3000);



module.exports=app;

