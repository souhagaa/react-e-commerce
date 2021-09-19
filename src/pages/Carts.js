import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import Items from "../components/Items/Items";
import Loading from "../pages/Loading";
// import CartsList from "../components/Items/CartsList";
import {
  sortItemsByNumberElements,
  orderByDate,
} from "../utils/dataManipulation";

import { CARTS_URL } from "../utils/urls";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderby, setOrderby] = useState("");

  const orderOps = ["Order by date", "Order by product count"];

  useEffect(() => {
    // I limit the number to 5 because there's a problem in the data two carts have same id
    fetchData(CARTS_URL + "?limit=5", setCarts, setLoading);
  }, []);

  useEffect(() => {
    if (orderby === "Order by product count") {
      setCarts(sortItemsByNumberElements(carts, "products"));
    } else if (orderby === "Order by date") {
      setCarts(orderByDate(carts, "date"));
    }
    // eslint-disable-next-line
  }, [orderby]);

  const sortBy = (option) => {
    setOrderby(option);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Items
          data={carts}
          orderOps={orderOps}
          orderBy={sortBy}
          parent={"carts"}
        />
      )}
    </>
  );
};

export default Carts;
