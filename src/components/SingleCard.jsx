import React from "react";
import { NavLink } from "react-router-dom";

const SingleCard = ({ prod }) => {
  return (
    <>
      {
        <NavLink
          to={`/product/${prod.id}`}
          className="card"
          style={{ width: "18rem" }}
        >
          <img src={prod.imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Title : {prod.title}</h5>
            <p className="card-text">{prod.description}</p>
            <h6>Category {prod.category}</h6>
            <h6>Price Rs-{prod.price}</h6>
          </div>
        </NavLink>
      }
    </>
  );
};

export default SingleCard;
