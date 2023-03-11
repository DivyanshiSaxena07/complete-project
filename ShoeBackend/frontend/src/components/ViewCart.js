import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQty, } from "../slice/CartSlice";
import { useNavigate } from "react-router-dom";

function ViewCart(){
    const {cartList,totalBillAmount} = useSelector(state=>state.cart.value);
    const [totalPrice,setTotalPrice]=useState()
    const navigate  = useNavigate();
   const dispatch=useDispatch();
   const changeProductQty = (index,qty,productPrice)=>{
      dispatch(changeQty({qty: qty, index: index}));
      setTotalPrice(productPrice*qty);
    } 
    return<>
      <div id="contact" className="contact">
             <div className="container">
                <div className="row">
                   <div className="col-md-12">
                      <div className="titlepage">
                         
                      <div className="row p-2 text-white font-weight-bold" style={{backgroundColor:"#EBBF60"}}>
                            <div className="col-2">S.No</div>
                            <div className="col-2">Product</div>
                            <div className="col-2">Name</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Qty</div>
                            <div className="col-2">Total</div>
                     </div>
                     </div>
                   </div>
                </div>
                {cartList.map((item,index)=><div key={index} className="row p-2">
                    <div className="col-2">{index+1}</div>
                    <div className="col-2">
                        <img src={'/images/'+item.productImage}></img>
                    </div>
                    <div className="col-2">{item.productName}</div>
                    <div className="col-2">{item.productPrice}</div>
                    <div className="col-2">
                     <button onChange={(event)=>dispatch(changeQty({qty: event.target.value, index:index}))} style={{borderRadius:'50%',width:'30px',height:'30px'}}>+</button>
                     <span>{item.qty}</span>
                     <button onChange={(event)=>dispatch(changeQty({qty: event.target.value, index:index}))} style={{borderRadius:'50%',width:'30px',height:'30px'}}>-</button>
                    </div>
                    <div className="col-2">{item.total}</div>

                   </div>

                )}

                <div style={{float:'center',backgroundColor:'#EBBF60'}} className="row mt-5 mb-5 border p-2">
                  <div className="col md-4">
                <p style={{fontSize: "20px",color:"white"}}>Number Of Item : {}</p>
                <h2 className="mt-3">Bill Amount : <span className="text-success">{totalBillAmount} Rs.</span></h2>
                <div className="text-center">
                  <button onClick={()=>navigate("/checkout")} className="btn btn-outline-dark mt-5">Checkout</button>
                </div>
                </div>
            </div>
        
             </div>
          </div> 










          
 
    </>
    }
    export default ViewCart;