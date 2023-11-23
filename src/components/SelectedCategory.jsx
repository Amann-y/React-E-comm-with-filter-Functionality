import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/productContext";

const SelectedCategory = ({ category }) => {
  const [data, setData] = useState(category);
  const { addToCart } = useGlobalContext();

  const addCartItem = (prod) => {
    addToCart(prod);
    alert("Item Has Been Added Into Cart");
  };
  return (
    <div>
      <h1 className="container">Related Products</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
        {data?.map((ele) => (
          <NavLink
            to={`/product/${ele.id}`}
            className=" border border-danger gap-1 my-2"
            key={ele.id}
          >
            <div className="card" style={{ width: "18rem" }}>
              <img src={ele.imgSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Title : {ele.title}</h5>
                <p className="card-text">{ele.description}</p>
                <h6>Category {ele.category}</h6>
                <h6>Price Rs-{ele.price}</h6>
                <button
                  className="btn btn-primary"
                  onClick={() => addCartItem(ele)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SelectedCategory;
