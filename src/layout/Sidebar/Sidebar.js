import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="active" to="/">
        Home
        {/* <img src={process.env.PUBLIC_URL + "/favicon.ico"} /> */}
      </Link>
      <Link to="/products">Products</Link>
      <Link to="/carts">Carts</Link>
      <Link to="/userCart">My Cart</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Sidebar;
