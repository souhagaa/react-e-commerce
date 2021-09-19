import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import Items from "../components/Items/Items";
import Loading from "../pages/Loading";
import fetchData from "../utils/fetchData";
import { USER_CART_URL } from "../utils/urls";

const UserCart = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, loadUser } = authContext;

  const [userCart, setUserCart] = useState([]);
  const [username, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      loadUser();
      const fullname = user.name.firstname + " " + user.name.lastname;
      setUserName(fullname);
      fetchData(USER_CART_URL + user.id, setUserCart, setLoading);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <h1>Welcome {username}</h1>
      {loading ? (
        <Loading />
      ) : (
        <Items
          data={userCart}
          // orderOps={orderOps}
          // orderBy={sortBy}
          parent={"userCart"}
        />
      )}
    </>
  );
};

export default UserCart;
