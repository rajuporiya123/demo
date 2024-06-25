import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slice/login-slice";
import profileSlice from "../slice/profile-slice";
import getallproductSlice from "../slice/getallproduct-slice";
import productDetailsSlice from "../slice/productDetails-slice";
import productSearchSlice from "../slice/productSearch-slice";
import productShortSlice from "../slice/productShort-slice";
import categoryListSlice from "../slice/categoryList-slice";
import categorySlice from "../slice/category-slice";
import addProductSlice from "../slice/addProduct-slice";
import deleteProductSlice from "../slice/deleteProduct-slice";
import updateProductSlice from "../slice/updateProduct-slice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    profile:profileSlice,
    getAllProduct:getallproductSlice,
    productDetails:productDetailsSlice,
    productSearch:productSearchSlice,
    productShort:productShortSlice,
    categoryList:categoryListSlice,
    category:categorySlice,
    addProduct:addProductSlice,
    deleteProduct:deleteProductSlice,
    updateProduct:updateProductSlice
  },
});

export default store;
