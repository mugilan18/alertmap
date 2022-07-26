const mongoose=require("mongoose");

const location_recordsschema=new mongoose.Schema(

{

lat:{
    type:String,
},
long:{
    type:String,
},
time:{
    type:String,
},

})

module.exports=mongoose.model("location_record",location_recordsschema)