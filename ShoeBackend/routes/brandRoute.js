import express from 'express';
import {brandList,addBrand,removeBrand,updateBrand} from '../controller/brandController.js'
const router=express.Router();
router.get('/list',brandList);
router.post('/add',addBrand);
router.get('/delete/:id',removeBrand);
router.get('/update',updateBrand);
 export default router