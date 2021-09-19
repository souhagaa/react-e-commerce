import React, { useState, useEffect } from "react";
import { CATEGORIES_URL } from "../utils/urls";
import fetchData from "../utils/fetchData";

import Items from "../components/Items/Items";
import Loading from "../pages/Loading";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(CATEGORIES_URL, setCategories, setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Items data={categories} parent={"categories"} />
      )}
    </>
  );
};

export default Categories;
