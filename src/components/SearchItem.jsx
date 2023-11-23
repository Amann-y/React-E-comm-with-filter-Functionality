import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/productContext";
import SingleCard from "./SingleCard";

const SearchItem = () => {
  const { item } = useParams();
  const { products } = useGlobalContext();
  const [prodData, setProdData] = useState([]);

  useEffect(() => {
    const filteredData = products.filter((ele) =>
      ele.title.toLowerCase().includes(item.toLowerCase())
    );

    setProdData(filteredData);
  }, [item]);

  return (
    <div className="custom-margin-top d-flex flex-wrap justify-content-center align-items-center gap-1">
      {prodData == "undefined" || prodData == "" ? (
        <h1 className="mt-5">No Item Found</h1>
      ) : (
        prodData?.map((ele) => {
          return <SingleCard prod={ele} key={ele.id} />;
        })
      )}
    </div>
  );
};

export default SearchItem;
