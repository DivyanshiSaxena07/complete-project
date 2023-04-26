const { response } = require("express");
const playerModel = require("../model/playerModel");


exports.addPlayer=(request,response)=>{
    playerModel.create({
      name : request.body.name,
      age: request.body.age,
     mobile: request.body.mobile
    }).then(result=>{
      console.log(result);
      return response.status(200).json(result);
    }).catch(err=>{
      console.log(err);
      return response.status(500).json({message: "Error........"});
    })
}

exports.ViewPlayer=(request,response)=>{
  playerModel.find().then(result=>{
     console.log(result);
     return response.status(200).json(result);
  }).catch(err=>{
   console.log(err);
   return response.status().json({message:"Error......."});
  })
}

exports.updatePlayer=(request,response)=>{
playerModel
.updateOne({id:request.body.id},{
  $set:{
    name : request.body.name,
      age: request.body.age,
     mobile: request.body.mobile,
  }
}).then(result=>{
   console.log(result);
   return response.status(200).json(result)
}).catch(err=>{
  console.log(err);
  return response.status(500).json({message : "error.........."})
})
}


exports.deletePlayer= ()=>{
  playerModel
  .deleteOne({id:request.body.id}).then(result=>{
    console.log(result);
    return response.status(200).json(result)
  
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({message: "Error.........."})
  })
}