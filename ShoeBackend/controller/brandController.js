import { Brand } from "../model/brandModel.js";

export const brandList=(req,res,next)=>{
    Brand.find().then(result=>{
        return res.status(200).json({brandList:result,status:true});
    }).catch(err=>{
        console.log(err);
    })
}
export const addBrand=  (req,res,next)=>{
    // console.log(req.body)
Brand.create(req.body)
.then(result=>{
   return res.status(200).json({msg:result,status:true})

}).catch(err=>{
   console.log(err);
})
}
export const updateBrand=(req,res,next)=>{
    const id=req.body._id;
    delete req.body._id;
    console.log("requestBody"+req.body);
    Brand.updateOne({_id:id},{
        $set:req.body
    }).then(data=>{
        return res.status(200).json({updateItem:data})
    }).catch(err=>{
        console.log(err);
    })
}

export const removeBrand=(req,res,next)=>{
    Brand.deleteOne({_id:req.params.id})
    .then(result=>{
        return res.status(200).json({deleteItem:result,status:true})
    }).catch(err=>{
        console.log(err);
    })
}