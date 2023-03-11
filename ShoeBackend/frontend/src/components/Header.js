import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logOut } from "../slice/UserSlice";
import { clearCart } from "../slice/CartSlice";
function Header(){
    const {isLoggedIn} = useSelector(state=>state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signout = ()=>{
       dispatch(clearCart());
       dispatch(logOut());
       navigate("signin");
    }
 return<>

<header>
    
         <div className="header-top">
            <div className="header">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo">
                                 <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <div className="menu-area">
                           <div className="limit-box">
                              <nav className="main-menu">
                                 <ul className="menu-area-main">

                                 <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                 </li>
                                 <li className="nav-item">
                                 <Link className="nav-link" to="products">Products</Link>
                                 </li>
                                 <li className="nav-item">
                                 <Link className="nav-link" to="brand">Brands</Link>
                                 </li>
                                 <li className="nav-item">
                                   <Link className="nav-link" to="contact">Contact us</Link>
                                 </li>
                                 <li className="nav-item">
                                 <Link className="nav-link" to="viewcart">ViewCart</Link>
                                 </li>
                                 {
                                 !isLoggedIn &&
                                   <li className="nav-item">
                                     <Link className="nav-link" to="signin">Signin</Link>
                                   </li>
                                 }
                                 { !isLoggedIn &&
                                 <li className="nav-item">
                                   <Link className="nav-link" to="signup">Signup</Link>
                                 </li>
                                 }
                                 {isLoggedIn &&
                                  <li className="nav-item">
                                   <Link onClick={signout} className="nav-link">Singout</Link>
                                 </li>
                                 }
                             
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
           
          
         
         </div>
      </header>

 </>
}
export default Header;