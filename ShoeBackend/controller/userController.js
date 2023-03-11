import { User } from "../model/userModel.js";
import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import {Brand} from '../model/brandModel.js';
export const userIndex = (request,response,next)=>{
    return response.status(200).json({currentUser: '',brandList: []});
}

export const signUpPage = (request,response,next)=>{
  console.log(request.body);
    return response.status(200).json({currentUser: '',brandList: []});
} 

export const signup = async (request,response,next)=>{
  console.log(request.body);
   const errors =  validationResult(request);
   if(!errors.isEmpty())
     return response.status(200).json({currentUser: '',brandList: []});
   else{
      let password = request.body.password;      
      let saltKey = await bcrypt.genSalt(10);
      let encryptedPassword = await bcrypt.hash(password,saltKey);    
      User.create({
        email: request.body.email,
        password: encryptedPassword
      }).then(result=>{
        return response.status(200).json({user:result,status:true});
      }).catch(err=>{
        return response.status(200).json({currentUser: '',brandList: []});
      })
   }
}
   
export const signin = async (request,response,next)=>{
  let user = await User.findOne({email: request.body.email});       
  console.log(user) 
  if(user){
    let validPassword = await bcrypt.compare(request.body.password,user.password);
    if(validPassword){
      request.body.currentUserId = user._id; 
      request.body.currentUserEmail = user.email;
      let brands = await Brand.find();
      return response.status(200).json({currentUser: request.body,categoryList: brands,status:true});
    }
    else
     return response.status(200).json({status:true}); 
  } 
  else
    return response.status(200).json({status:true}); 
}
export const signout = (request,response,next)=>{
   request.body.currentUserId = null;
   request.body.currentUserEmail = null;
   request.body.destroy();
   return response.status(200).json({status:true});   
}