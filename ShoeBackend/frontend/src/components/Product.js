import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchProduct } from "../slice/ProductSlice";

function Product(){
   const {productList}=useSelector(state=>state.product.value);
   const dispatch=useDispatch();
   useEffect(()=>{
      dispatch(fetchProduct());
   
   },[]);
    return<>
     <div id="jewellery" className="Best">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Best jewellery</h2>
                     <p> a reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="best_main">
                     <div className="row d_flex">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="best_text">
                           
                              <p>A reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                              <Link to="moreProduct" style={{cursor:'pointer'}}>See More</Link>
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div className="best_img">
                              <h4>Best Design Of Ring</h4>
                              {productList.map((product,index)=><figure><img src={'/images/'+product.productImage}/></figure>)}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="best_main">
                     <div className="row d_flex">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div className="best_img croos_rt">
                              <h4>Best Design Of Ring</h4>
                              <figure><img src="images/beimg2.png"/></figure>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="best_text flot_left">
                              <p>A reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                              <Link to="/moreProduct" style={{cursor:'pointer'}}>See More</Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="best_main pa_bot">
                     <div className="row d_flex">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="best_text">
                              <p>A reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                              <Link to="/moreProduct" style={{cursor:'pointer'}}>See More</Link>
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div className="best_img d_none">
                              <h4>Best Design Of Ring</h4>
                              <figure><img src={"/images/"}/></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
    </>
}
export default Product