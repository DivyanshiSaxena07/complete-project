const mongoose = require("mongoose");
const schema = mongoose.schema;

const teamSchema =new mongoose.Schema({
    teamName:{
        type:String,
        required:true,
    },
    playerNum:{
         type:Number,
         required:true,
    }
    
})
module.exports=mongoose.model('teams',teamSchema);