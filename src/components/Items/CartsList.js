// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// // import Item from "../Item";
// import "./items.css";

// const CartsList = ({ data, orderOps, orderBy }) => {
//   const [selectedFilter, setSelectedFilter] = useState("");

//   useEffect(() => {
//     if (orderOps && orderBy) orderBy(selectedFilter);
//     // eslint-disable-next-line
//   }, [selectedFilter]);

//   const handleChange = (e) => {
//     e.preventDefault();
//     setSelectedFilter(e.target.value);
//   };
//   return (
//     <>
//       {orderOps && (
//         <select value={selectedFilter} onChange={handleChange}>
//           {orderOps.map((option) => (
//             <option key={option}>{option}</option>
//           ))}
//         </select>
//       )}
//       <main className="grid">
//         {data.map((item) => (
//           <article>
//             <div className="text">
//               <h3>{item.date}</h3>
//               <p>Product's count: {item.products && item.products.length}</p>
//             </div>
//           </article>
//         ))}
//       </main>
//     </>
//   );
// };

// CartsList.propTypes = {
//   data: PropTypes.array.isRequired,
//   orderOps: PropTypes.array,
//   orderBy: PropTypes.func,
// };

// export default CartsList;
