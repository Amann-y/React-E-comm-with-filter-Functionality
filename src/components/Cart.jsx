import React, { useState } from "react";
import { useGlobalContext } from "../context/productContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItem } = useGlobalContext();

  return (
    <div className="mt-5">
      <h1 className="custom-margin-top">Your Cart Items</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-1 my-1">
        {cartItems.length > 0 ? (
          cartItems.map((ele, ind) => {
            return (
              <NavLink
                key={ind}
                to={""}
                className="card"
                style={{ width: "18rem" }}
              >
                <img src={ele.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Title : {ele.title}</h5>
                  <p className="card-text">{ele.description}</p>
                  <h6>Category {ele.category}</h6>
                  <h6>Price Rs-{ele.price}</h6>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(ele.id)}
                  >
                    Remove Item
                  </button>
                  <button className="btn btn-success ms-1">Buy Now</button>
                </div>
              </NavLink>
            );
          })
        ) : (
          <h1>No Item In The Cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
