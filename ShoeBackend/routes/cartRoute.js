import express from 'express';
import { addToCart,cartList } from '../controller/cartController.js';
const router =express.Router();
router.post("/list",cartList);
router.post("/addToCart",addToCart);
export default router;