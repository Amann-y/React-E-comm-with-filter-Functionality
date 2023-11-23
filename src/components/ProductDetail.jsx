import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/productContext";
import SelectedCategory from "./SelectedCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const { data, addToCart } = useGlobalContext();

  useEffect(() => {
    const filteredProducts = data?.filter((prod) => prod.id == id);

    if (filteredProducts) {
      setProduct(filteredProducts[0]);
      setLoading(false);
      const filteredCategory = data?.filter(
        (cate) => cate.category == filteredProducts[0].category
      );
      setCategory(filteredCategory);
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center custom-margin-top">
        <h1 className="mt-5">Loading...</h1>
      </div>
    );
  }

  const addCartItem = (prodItem) => {
    addToCart(prodItem);
    alert("Item Has Been Added To The Cart");
  };

  return product ? (
    <div className="d-flex flex-column justify-content-center align-items-center custom-margin-top">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product?.imgSrc}
              className="img-fluid rounded-start"
              alt={product?.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product?.title}</h5>
              <p className="card-text">{product?.description}</p>
              <div className="card-text">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <strong className="text-body-secondary">
                    Price: {product?.price}
                  </strong>
                  <button
                    className="btn btn-success"
                    onClick={() => addCartItem(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
        <SelectedCategory category={category} />
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center custom-margin-top">
      <h1 className="mt-5">No Data, Go To Home Page</h1>
    </div>
  );
};

export default ProductDetail;
