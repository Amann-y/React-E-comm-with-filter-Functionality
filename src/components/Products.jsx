import React from "react";
import { useGlobalContext } from "../context/productContext";
import SingleCard from "./SingleCard";
import NavbarMenu from "./NavbarMenu";

const Products = () => {
  const { data, products } = useGlobalContext();

  return (
    <>
      <NavbarMenu />
      <div className="container d-flex flex-wrap justify-content-center gap-3 my-3">
        {products?.map((prod) => {
          return <SingleCard key={prod.id} prod={prod} />;
        })}
      </div>
    </>
  );
};

export default Products;
