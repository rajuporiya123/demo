import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductHandler } from "../Redux/slice/addProduct-slice";
import { useNavigate, useParams } from "react-router-dom";
import { updateProductHandler } from "../Redux/slice/updateProduct-slice";
import { productDetailsHandler } from "../Redux/slice/productDetails-slice";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [title, setTitle] = useState();
  const dispatch = useDispatch();
  const ProductDetail = useSelector((state) => state?.productDetails);
  useEffect(() => {
    if (id) {
      dispatch(productDetailsHandler(id));
    }
  }, [id, dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let payload = {
      title: title,
    };
    dispatch(updateProductHandler(id, payload));
    navigate("/")
    toast.success("Product update successfully");

  };
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Update Product</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title ? title : ProductDetail?.data?.data?.title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
