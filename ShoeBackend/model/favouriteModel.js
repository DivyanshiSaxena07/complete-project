import mongoose from "mongoose";

const favouriteSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    itemList:[]
})
export const Fav=mongoose.model('favourite',favouriteSchema)