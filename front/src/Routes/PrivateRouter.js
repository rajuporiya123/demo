import React from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const useAuth = () => {
  const user = Cookies.get('token')
  if (user) {
    sessionCreated();
    return true;
  } else {
    return false;
  }
};
export const sessionCreated = () => {
  const sessionStartTime = new Date().getTime();
  localStorage.setItem('sessionStartTime', sessionStartTime.toString());

  const timer = setTimeout(() => {
    Cookies.remove('token')
    window.location.href='/login'
  }, 24 * 60 * 60 * 1000);
  return () => clearTimeout(timer)
}
const PrivateRouter = () => {

  const token = Cookies.get('token')
  const auth = useAuth();

  return token && auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
