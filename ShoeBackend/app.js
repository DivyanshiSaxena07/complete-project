import express from "express";
import mongoose from 'mongoose';
import brandRoute from './routes/brandRoute.js'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import cartRoute from './routes/cartRoute.js'
import path from 'path';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';
import cors from 'cors'
const app=express();
app.use(cors())
app.use(express.json())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://divyanshi:root@cluster.1wtwgej.mongodb.net/shoeApp?retryWrites=true&w=majority',err=>{
    if(err)
    console.log(err);
    else{
        app.use(bodyParser.json());
        console.log("Connected!");
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/brand',brandRoute);
    app.use('/product',productRoute);
    app.use('/user',userRoute);
    app.use('/cart',cartRoute);
    app.listen(3001,()=>{
        console.log("server Started!");
    })

    }
})
