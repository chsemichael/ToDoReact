//Below we are making a component that redirects the unauthenticated user to the login screen. We pass in children in the params as a prop which refers to any component that is nested inside of ProtectedRoute tags.
//import { useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
  const { currentUser } = useAuth();

  //Below we check to see if there's a currentUser. If so, render the children components. Else navigate the user to login.
  return currentUser ? children : <Navigate to="/login" />;
}