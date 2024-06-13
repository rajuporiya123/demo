import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction, loginHandler } from "../Redux/slice/login-slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isLoading, error, message,data } = useSelector((state) => state.login);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginHandler({username,password}))
    
  };

  useEffect(()=>{
    if (data) {
      setTimeout(() => {
        toast.success('login success')
        navigate('/')
      }, 1000);
      dispatch(authAction.loginSliceReset())
    }
  },[data])
  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label htmlFor="username" className="label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button" disabled={isLoading}>Login</button>
      </form>
      {isLoading && <p className="message">Loading...</p>}
      {error && <p className="message error">{error}</p>}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
