import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./items.css";

const Items = ({ data, parent, orderOps, orderBy }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    if (orderOps && orderBy) orderBy(selectedFilter);
    // eslint-disable-next-line
  }, [selectedFilter]);

  const handleChange = (e) => {
    e.preventDefault();
    setSelectedFilter(e.target.value);
  };
  return (
    <>
      {orderOps && (
        <select value={selectedFilter} onChange={handleChange}>
          {orderOps.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <main className="grid">
        {data.map((item) => (
          <Item key={item.id} item={item} parent={parent} />
        ))}
      </main>
    </>
  );
};

Items.propTypes = {
  parent: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  orderOps: PropTypes.array,
  orderBy: PropTypes.func,
};

export default Items;
