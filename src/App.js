import React, { useState } from "react";
import "./App.css";
import Add from "./Pages/AddProduct";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import ProductDetails from "./Pages/ProductDetails";
import AddProduct from "./Pages/AddProduct";
import UpdateProduct from "./Pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./Routes/PrivateRouter";
import SignUp from "./Pages/SignUp";
import PublicRouter from "./Routes/PublicRouter";
const App = () => {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        closeButton={false}
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<PublicRouter />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateRouter />}>
          <Route path="/" element={<Profile />} />
        </Route>
        <Route path="/addproduct" element={<PrivateRouter />}>
          <Route path="/addproduct" element={<AddProduct />} />
        </Route>
        <Route path="/signup" element={<PublicRouter />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/productdetails/:id" element={<PrivateRouter />}>
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/updateproduct/:id" element={<PrivateRouter />}>
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
