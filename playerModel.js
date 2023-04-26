const { request } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.schema;

const playerSchema = new mongoose.Schema({
  name:{
      type:String,
      required:true
  },
 age:{
     type:Number,
     required:true
 },
  mobile:{
      type:String,
      required:true
  }
//   request:[
//       {
//           teamId:Object,
//           tounamentId:Object,
//       }
//   ]

})
module.exports=mongoose.model('player',playerSchema);

