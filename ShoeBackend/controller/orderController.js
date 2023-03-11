
import { Order } from "../model/orderModel.js"
export const order=(req,res,next)=>{

   Order.create({
    brandId:req.session.currentUserId,
    total:req.body.total*1,
    contactPersonName:req.body.contactPersonName,
    contactNumber:req.body.contactNumber,
    deliverAddress:req.body.deliveryAddress,
    paymentMode:'CASH',
    itemList:JSON.parse(req.body.itemList)
}).then(result=>{
    console.log("hii")
    return res.status(200).json({message:'order placed successfuly! '})
   }).catch(err=>{
    console.log(err)
    return res.status(200).json({message:'Something went wrong'})
   })
}