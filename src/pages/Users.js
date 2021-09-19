import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import Items from "../components/Items/Items";
import FilterItem from "../components/FilterItems";
import Loading from "./Loading";

import { USERS_URL } from "../utils/urls";
import { orderAlpahbetic, filterBy } from "../utils/dataManipulation";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderby, setOrderby] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilterUsers] = useState([]);
  const orderOps = ["Order by Full name", "Order by email"];

  useEffect(() => {
    fetchData(USERS_URL, setUsers, setLoading);
  }, []);

  useEffect(() => {
    if (orderby === "Order by Full name") {
      setUsers(orderAlpahbetic(users, "name"));
    } else if (orderby === "Order by email") {
      setUsers(orderAlpahbetic(users, "email"));
    }
    // eslint-disable-next-line
  }, [orderby]);
  useEffect(() => {
    if (!filter) setFilterUsers([]);
    setFilterUsers(filterBy(users, filter, "email", "name"));

    // eslint-disable-next-line
  }, [filter]);
  const sortBy = (option) => {
    setOrderby(option);
  };
  const onFilter = (option) => {
    setFilter(option);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FilterItem onFilter={onFilter} />
          {filteredUsers.length !== 0 ? (
            <Items
              data={filteredUsers}
              orderOps={orderOps}
              orderBy={sortBy}
              parent={"users"}
            />
          ) : (
            <Items
              data={users}
              orderOps={orderOps}
              orderBy={sortBy}
              parent={"users"}
            />
          )}
        </>
      )}
    </>
  );
};

export default Users;
