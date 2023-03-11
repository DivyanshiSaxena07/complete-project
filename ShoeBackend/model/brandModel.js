import mongoose from "mongoose";
const brandSchema= new mongoose.Schema({
    brandName:{
        type:String,
        required:true,
        trim:true

    }
})
export const Brand=mongoose.model('brand',brandSchema)

