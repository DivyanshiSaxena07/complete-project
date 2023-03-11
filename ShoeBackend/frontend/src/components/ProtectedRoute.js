import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {isLoggedIn}=useSelector(state=>state.user.value);
    const navigate=useNavigate();
    if(isLoggedIn)
    return children;
    else
    return <Navigate to='/signin'></Navigate>

}
export default ProtectedRoute