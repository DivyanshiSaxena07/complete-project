import { validationResult } from "express-validator";
import { Brand } from "../model/brandModel.js";
import { Product } from "../model/productModel.js"

export const list = (req,res,next)=>{
    Product.find().populate({path: 'brandId'})
    .then(result=>{
        // console.log(result)
       return res.status(200).json({productList: result,status:true});
    })
    .catch(err=>{
        console.log(err);
    });
}
// export const addProduct=(req,res,next)=>{
//     Product.create()
//     .then(result=>{
//         console.log(req.body)
//         return res.status(200).json({productList:result,status:true})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }



export const addProduct = (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        Brand.find().then(result => {
            return response.status(200).json({ categoryList: result,errors: errors.array() });
        }).catch();
    }
    else {
        request.body.productImage = request.file;
        Product.create(request.body)
            .then(result => {
                return response.status(200).json({productList:result,status:true})
            })
            .catch(err => {
                console.log(err);
            });
    }
}




export const updateProduct=(req,res,next)=>{
    const id=req.body._id;
    delete req.body._id;
    console.log(req.body);
    Product.updateOne({_id:id},{
        $set:req.body
    }).then(data=>{
        return res.status(200).json({updateList:data,status:true})
    }).catch(err=>{
        console.log(err);
    })
}

export const deleteProduct=(req,res,next)=>{
        Product.deleteOne({_id:req.params.id})
        .then(result=>{
            return res.status(200).json({deleteItem:result,status:true})
        }).catch(err=>{
            console.log(err);
        })
    }
    
