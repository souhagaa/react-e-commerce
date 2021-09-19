import React, { useState, useContext, useEffect } from "react";
import "./login.css";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { loginUser, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { username, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/"); //redirect to the home page if user authenticated
    }
  }, [props.history, isAuthenticated]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser({
      username,
      password,
    });
    // }
  };

  return (
    <div className="overlay">
      <form onSubmit={onSubmit}>
        <div className="con">
          <header className="head-form">
            <h2>Log In</h2>
            <p>Login here using your username and password</p>
          </header>
          <br />
          <div className="field-set">
            <input
              className="form-input"
              id="txt-input"
              type="text"
              name="username"
              placeholder="@UserName"
              onChange={onChange}
              required
            />

            <br />

            <input
              className="form-input"
              type="password"
              placeholder="Password"
              id="pwd"
              name="password"
              onChange={onChange}
              required
            />
            <br />
            <button className="log-in"> Log In </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
