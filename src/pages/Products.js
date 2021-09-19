import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Items from "../components/Items/Items";

import fetchData from "../utils/fetchData";
import { sortDescBy, sortAscBy } from "../utils/dataManipulation";
import { PRODUCTS_URL } from "../utils/urls";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceFilter, setPriceFilter] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [orderby, setOrderby] = useState("");

  const orderOps = ["Order by Ascending price", "Order by Descending price"];

  useEffect(() => {
    // fetch data on mounts
    fetchData(PRODUCTS_URL, setProducts, setLoading);
  }, []);

  useEffect(() => {
    if (!priceFilter) setFilteredProducts([]);
    else {
      let filteredData = products.filter((product) => {
        return product.price <= priceFilter;
      });
      setFilteredProducts(filteredData);
    }
    // eslint-disable-next-line
  }, [priceFilter]);

  useEffect(() => {
    if (orderby === "Order by Ascending price") {
      priceFilter
        ? setFilteredProducts(sortAscBy(filteredProducts, "price"))
        : setProducts(sortAscBy(products, "price"));
    } else if (orderby === "Order by Descending price") {
      priceFilter
        ? setFilteredProducts(sortDescBy(filteredProducts, "price"))
        : setProducts(sortDescBy(products, "price"));
    }

    // eslint-disable-next-line
  }, [orderby]);

  const sortByPrice = (option) => {
    setOrderby(option);
  };

  const onFilter = (e) => {
    setPriceFilter(Number(e.target.value));
  };
  const data = priceFilter ? filteredProducts : products;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className="slidecontainer"
            style={{ width: "50%", margin: "3% auto auto 0" }}
          >
            <label htmlFor="myRange"> Filter by price </label>
            <input
              type="range"
              name="myRange"
              min="0"
              max="1000"
              value={priceFilter}
              className="slider"
              id="myRange"
              onChange={onFilter}
            />
            <p>{priceFilter}</p>
          </div>
          <Items
            data={data}
            orderOps={orderOps}
            orderBy={sortByPrice}
            parent={"products"}
          />
        </>
      )}
    </>
  );
};

export default Products;
