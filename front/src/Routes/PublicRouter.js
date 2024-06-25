import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const useAuth = () => {
  const user = Cookies.get("token");
  if (user) {
    sessionCreated();
    return true;
  } else {
    return false;
  }
};
const sessionCreated = () => {
  const sessionStartTime = new Date().getTime();
  localStorage.setItem('sessionStartTime', sessionStartTime.toString());
  const timer = setTimeout(() => {
    Cookies.remove('token')
    localStorage.clear();
  }, 24 * 60 * 60 * 1000);
  return () => clearTimeout(timer)
}

const PublicRouter = () => {
  const auth = useAuth();
  const token = Cookies.get("token");

  return token && auth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRouter;
