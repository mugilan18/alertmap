 const express=require('express');
 const {mongoose}=require('mongoose');
 const Location=require("./Locationschema");
 const app=express();
 const port=5000;
 const cors = require("cors")
 const bodyparser = require("body-parser")
 
 app.use(bodyparser.json())
 app.use(cors())
 
 mongoose.connect("mongodb+srv://test101:email712pa@alertmap.48oxfdn.mongodb.net/location")
 .then(() => console.log("Connected to MongoDB..."))
 .catch((err) => console.log("Cloud not connect to MongoDB..."));

 app.get("/location",async(req,res)=>{
    // console.log("alloooo")
    var location=await Location.find();
    res.send(location);
 })





 app.listen(port,()=>{
    console.log("listering to port 5000")
 })