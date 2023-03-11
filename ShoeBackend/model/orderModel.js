import mongoose from 'mongoose';
const orderSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    total:{
        type:Number
},
contactPersonName:{
type:String,
required:true
},
contactNumber:{
    type:Number,
    required:true
},
deliverAddress:{
    type:String,
    required:true
},
paymentMode:{
    type:String
},
date:{
    type:Date,
    default: new Date().now
},
itemList:[]
});
export const Order=mongoose.model('order',orderSchema)