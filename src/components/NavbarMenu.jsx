import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/productContext";

const NavbarMenu = () => {
  const { products, setProducts, data } = useGlobalContext();

  const filteredProducts = (prod) => {
    if (typeof prod == "string") {
      const filProd = data?.filter((ele) => {
        return ele.category === prod;
      });
      setProducts(filProd);
    } else if (typeof prod == "number") {
      const filProd = data?.filter((ele) => {
        return ele.price > prod;
      });
      setProducts(filProd);
    } else {
      setProducts(data);
    }
  };

  return (
    <div className="mt-5 pt-5 d-flex flex-wrap container justify-content-between align-items-center gap-1">
      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => filteredProducts()}
      >
        All Products
      </button>

      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => filteredProducts("mobiles")}
      >
        Mobiles
      </button>

      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => filteredProducts("laptops")}
      >
        Laptops
      </button>

      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => filteredProducts("tablets")}
      >
        Tablets
      </button>

      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => filteredProducts(29000)}
      >
        Rs 29,000 <FaGreaterThan />
      </button>

      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => filteredProducts(49000)}
      >
        Rs 49,000 <FaGreaterThan />
      </button>

      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => filteredProducts(69000)}
      >
        Rs 69,000 <FaGreaterThan />
      </button>

      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => filteredProducts(89000)}
      >
        Rs 89,000 <FaGreaterThan />
      </button>
    </div>
  );
};

export default NavbarMenu;
