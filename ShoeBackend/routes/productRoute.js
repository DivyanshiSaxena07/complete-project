import express from 'express'
import {list,addProduct,deleteProduct,updateProduct}from '../controller/productController.js'
import { body } from 'express-validator';
import multer from 'multer';
const upload = multer({dest: 'public/images'});
const router=express.Router();

 
router.route("/add")
.get(addProduct)
.post(upload.array('productImage',5),
body('productName','please enter product name').notEmpty(),
body('productPrice','please enter product price').notEmpty(),
body('productPrice','only digit is allowed').isNumeric().notEmpty(),addProduct);
router.get('/list',list);
router.get('/delete/:id',deleteProduct);
router.get('/update',updateProduct);
export default router