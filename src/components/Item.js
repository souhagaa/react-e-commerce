import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../utils/dataManipulation";

const Item = ({ item, parent }) => {
  const renderSwitch = () => {
    switch (parent) {
      case "products":
        return (
          <article>
            {console.log("item", item)}
            <img src={item.image} alt={item.title} />
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Category: {item.category}</p>
              <div className="btn-holder">
                <button>Buy for {item.price}$</button>
              </div>
            </div>
          </article>
        );
      case "userCart":
      case "carts":
        return (
          <article>
            <div className="text">
              <h2>Cart {item.id}</h2>
              <h3>{formatDate(item.date)}</h3>
              <p>Product's count: {item.products && item.products.length}</p>
            </div>
          </article>
        );
      case "users":
        return (
          <article>
            <div className="text">
              {item.name.firstname && (
                <h2>{item.name.firstname + " " + item.name.lastname}</h2>
              )}
              <h3>{item.username}</h3>
              <h4>email: {item.email}</h4>
              <p>Phone number: {item.phone}</p>
            </div>
          </article>
        );
      case "categories":
        return (
          <article>
            <div className="text">
              <h3>{item}</h3>
            </div>
          </article>
        );
      default:
        return "Unavailable";
    }
  };
  return <>{renderSwitch()}</>;
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  parent: PropTypes.string.isRequired,
};
export default Item;
