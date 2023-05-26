import React, { useContext } from "react";
import { UserContext } from "../../providers/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const ProtectedRoute = ({ children }) => {
  let { user, dataLoading } = useContext(UserContext);
  let location = useLocation();
  
  if (dataLoading) {
     return <Loader />
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default ProtectedRoute;
