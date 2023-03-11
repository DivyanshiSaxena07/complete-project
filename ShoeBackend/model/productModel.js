import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
     type:Number
    },
    brandId:{
        type:mongoose.Schema.ObjectId,
        ref:'brand'
    },
   productImage:{
        type:String,
   },
    productSize:[],
    productColor:{
        type:String
    },
    productDiscount:{
        type:Number
    },
    offer:[],
    comments:[],
    itemSold:{
        type:Number
    }


})
export const Product=mongoose.model('product',productSchema)