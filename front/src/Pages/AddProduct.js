import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductHandler } from '../Redux/slice/addProduct-slice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const addProduct = useSelector((state)=>state?.addProduct)

  const navigate = useNavigate()
  
  const [product, setProduct] = useState({
    title: '',
    brand: '',
    category: '',
    price: '',
    discount: '',
    rating: '',
    stock: '',
    availability: '',
    minimumOrderQuantity: '',
    returnPolicy: '',
    warranty: '',
  });
const dispatch = useDispatch()
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductHandler(product))
    navigate('/')
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input
            type="text"
            className="form-control"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input
            type="number"
            className="form-control"
            name="discount"
            value={product.discount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Availability</label>
          <input
            type="text"
            className="form-control"
            name="availability"
            value={product.availability}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Minimum Order Quantity</label>
          <input
            type="number"
            className="form-control"
            name="minimumOrderQuantity"
            value={product.minimumOrderQuantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Return Policy</label>
          <input
            type="text"
            className="form-control"
            name="returnPolicy"
            value={product.returnPolicy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Warranty</label>
          <input
            type="text"
            className="form-control"
            name="warranty"
            value={product.warranty}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
