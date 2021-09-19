import React, { useState, useRef, useEffect } from "react";

const Filter = ({ onFilter }) => {
  //   const contactContext = useContext(ContactContext);
  //   const { filtered, filterContact, clearFilter } = contactContext;
  const text = useRef("");
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, [filtered]);

  const onChange = (e) => {
    e.preventDefault();

    if (text.current.value !== "") {
      onFilter(e.target.value);
    } else onFilter(null);
  };
  return (
    <form id="filter-form">
      <input
        ref={text}
        type="text"
        placeholder="Filter..."
        onChange={onChange}
      />
    </form>
  );
};

export default Filter;
