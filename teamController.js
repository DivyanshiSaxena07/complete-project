const { response } = require("express");
const teamModel = require("../model/teamModel");

exports.addTeam = (request,response)=>{
   teamModel.create({
      teamName : request.body.teamName,
      playerNum : request.body.playerNum,
   }).then(result=>{
      console.log(result);
       return response.status(200).json(result);
   }).catch(err=>{
      console.log(err);
       return response.status(500).json({message :"somethin went wrong"});
   })
}

exports.viewTeam = (request,response)=>{
   teamModel.find().then(result=>{
     console.log(result);
     return response.status(200).json(result);
   }).catch(err=>{
     console.log(err);
     return response.status(500).json({message : "something went wrong"});
   })
}
