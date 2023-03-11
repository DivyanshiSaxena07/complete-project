
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBrand } from "../slice/BrandSlice";

function Brand(){
	let brandItem=useSelector(state=>state.brand.value.brandList);
	const dispatch=useDispatch();
	console.log(brandItem);
	useEffect(()=>{
		dispatch(fetchBrand())
	  },[]);
	return<>
    <div className="colorlib-partner">
			<div className="container">
                <div className="mt-5 mb-5 text-center" style={{backgroundColor:'#EBBF60'}}>
                <h2 className="text-bold">Trusted Partners</h2>
                </div>
            <div className="row bg-light mt-5 mb-5">
                {brandItem.map((brand,index)=><div key={index} className="col-2 font-weight-bold">{brand.brandName}</div>)}
                
            </div>
			</div>
		</div>
		</>

}
export default Brand



 