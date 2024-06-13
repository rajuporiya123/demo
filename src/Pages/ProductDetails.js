import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productDetailsHandler } from "../Redux/slice/productDetails-slice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Components/Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ProductDetail = useSelector((state) => state?.productDetails);

  useEffect(() => {
    if (id) {
      dispatch(productDetailsHandler(id));
    }
  }, [id, dispatch]);

  if (ProductDetail?.isLoading == true) {
    return <Spinner/>
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <div className="product-card">
        {ProductDetail?.data?.data ? (
          <>
            <img
              src={ProductDetail?.data?.data?.images[0]}
              alt={ProductDetail?.data?.data?.title}
              className="product-image"
            />
            <div className="product-info">
              <h2>{ProductDetail?.data?.data?.title}</h2>
              <p><strong>Brand:</strong> {ProductDetail?.data?.data?.brand}</p>
              <p><strong>Category:</strong> {ProductDetail?.data?.data?.category}</p>
              <p><strong>Price:</strong> ${ProductDetail?.data?.data?.price}</p>
              <p><strong>Discount:</strong> {ProductDetail?.data?.data?.discountPercentage}%</p>
              <p><strong>Rating:</strong> {ProductDetail?.data?.data?.rating}</p>
              <p><strong>Stock:</strong> {ProductDetail?.data?.data?.stock}</p>
              <p><strong>Availability:</strong> {ProductDetail?.data?.data?.availabilityStatus}</p>
              <p><strong>Minimum Order Quantity:</strong> {ProductDetail?.data?.data?.minimumOrderQuantity}</p>
              <p><strong>Return Policy:</strong> {ProductDetail?.data?.data?.returnPolicy}</p>
              <p><strong>Warranty:</strong> {ProductDetail?.data?.data?.warrantyInformation}</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
