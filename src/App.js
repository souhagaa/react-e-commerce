import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./context/auth/authState";

// import axios from "axios";
import Home from "./pages/Home";
import Sidebar from "./layout/Sidebar/Sidebar";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer";
import Login from "./pages/Login/Login";
import Users from "./pages/Users";
import Carts from "./pages/Carts";
import Categories from "./pages/Categories";
import UserCart from "./pages/UserCart";
import Products from "./pages/Products";
import PrivateRoute from "./routing/PrivateRoute";

import Error from "./pages/Error";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Header />
          <Sidebar />

          <Footer />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/carts" component={Carts} />
              <Route exact path="/categories" component={Categories} />
              <PrivateRoute exact path="/userCart" component={UserCart} />
              <Route exact path="/login" component={Login} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    </AuthState>
  );
};

export default App;
