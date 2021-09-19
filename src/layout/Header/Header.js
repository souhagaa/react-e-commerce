import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import AuthContext from "../../context/auth/authContext";

const Header = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <div className="header-right">
      <a className="active" href="/" onClick={onLogout}>
        Logout
      </a>
    </div>
  );

  const guestLinks = (
    <div className="header-right">
      <Link className="active" to="/login">
        Login
      </Link>
    </div>
  );
  return (
    <div className="header">
      <Link to="/" className="welcome btn-shine">
        Welcome to our E-Shop!
      </Link>
      {/* check if user is logged in show button logout else login */}
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
};

export default Header;
