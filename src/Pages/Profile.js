import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileHandler } from "../Redux/slice/profile-slice";
import { getAllProductHandler } from "../Redux/slice/getallproduct-slice";
import { useNavigate } from "react-router-dom";
import { productSearchHandler } from "../Redux/slice/productSearch-slice";
import "bootstrap/dist/css/bootstrap.min.css";
import { productShortHandler } from "../Redux/slice/productShort-slice";
import { categoryListHandler } from "../Redux/slice/categoryList-slice";
import { categoryHandler } from "../Redux/slice/category-slice";
import { deleteProductHandler } from "../Redux/slice/deleteProduct-slice";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Profile = () => {
  const getAllProduct = useSelector((state) => state?.getAllProduct);
  const productSearch = useSelector((state) => state?.productSearch);
  const productShort = useSelector((state) => state?.productShort);
  const categoryList = useSelector((state) => state?.categoryList);
  const category = useSelector((state) => state?.category);
  const deleteProduct = useSelector((state) => state?.deleteProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [values, setValues] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(profileHandler());
    dispatch(getAllProductHandler());
    dispatch(categoryListHandler());
  }, []);

  useEffect(() => {
    if (search) {
      const handler = setTimeout(() => {
        dispatch(productSearchHandler(search));
      }, 700);
      return () => {
        clearTimeout(handler);
      };
    }
  }, [search]);

  const productsToShow = search
    ? productSearch?.data?.data?.products
    : productShort?.data?.data?.products
    ? productShort?.data?.data?.products
    : values
    ? category?.data?.data?.products
    : getAllProduct?.data?.data?.products;

  const handleShort = (sortBy) => {
    let neworder = sortOrder == "asc" ? "desc" : "asc";
    setSortOrder(neworder);
    dispatch(productShortHandler(sortBy, neworder));
  };

  const handleDelete = (id) => {
    dispatch(deleteProductHandler(id));
    toast.success("Product Deleted Successfully");
  };

  useEffect(() => {
    if (values) {
      dispatch(categoryHandler(values));
    }
  }, [values]);

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };



  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(getAllProduct?.data?.data?.products?.length / 10); i++) {
    paginationNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    // if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    // }
  };

  const handleNext = () => {
    // if (currentPage < paginationNumbers.length) {
      setCurrentPage(currentPage + 1);
    // }
  };

  const currentProducts = productsToShow?.slice((currentPage-1)*10,currentPage*10)
console.log('currentProducts',currentProducts);
  return (
    <>
      <div className="container mt-5">
        <div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/addproduct")}
          >
            Create New Product
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h1>Product Page</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <select value={values} onChange={(e) => setValues(e.target.value)}>
              <option disabled="disabled" selected="selected">
                Please select a name
              </option>
              {categoryList?.data?.data?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {currentProducts && currentProducts.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th onClick={() => handleShort("title")}>
                  Title {sortOrder == "asc" ? "↑" : "↓"}
                </th>
                <th onClick={() => handleShort("brand")}>
                  Brand {sortOrder == "asc" ? "↑" : "↓"}
                </th>
                <th>Images</th>
                <th>Category</th>
                <th onClick={() => handleShort("price")}>
                  Price {sortOrder == "asc" ? "↑" : "↓"}
                </th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td
                    onClick={() => navigate(`/productdetails/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.title}
                  </td>
                  <td>{item.brand}</td>
                  <td>
                    <img src={item.images[0]} alt={item.title} width="50" />
                  </td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => navigate(`/updateproduct/${item?.id}`)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products found.</p>
        )}

        <div className="pagination">
          <button
            className="btn btn-primary mx-1"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {paginationNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`btn mx-1 ${currentPage === pageNumber ? "active" : ""}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className="btn btn-primary mx-1"
            onClick={handleNext}
            disabled={currentPage === paginationNumbers.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
