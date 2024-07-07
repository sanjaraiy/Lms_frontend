import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth({allowedRoles}){
   const { isLoggedIn, role } = useSelector((state) => state.auth);
   const location = useLocation();

   return isLoggedIn && allowedRoles.find((myRole) => myRole === role) ? (
    <Outlet></Outlet>
   ) : isLoggedIn ? (<Navigate to="/denied"></Navigate>) : (<Navigate to="/login"></Navigate>)


}  

export default RequireAuth;