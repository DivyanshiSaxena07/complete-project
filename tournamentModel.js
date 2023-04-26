const mongoose = require('mongoose');
const schema = mongoose.Schema;
 const tournamentSchema = mongoose.Schema({
  tournamentName:{
     type:String,
     required:true,
  },
  tournamentPlace:{
      type:String,
      required:true,
  }
 })
module.exports=mongoose.model("tournament",tournamentSchema);