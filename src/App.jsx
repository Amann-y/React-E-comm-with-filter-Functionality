import React from "react";
import Navbarcomp from "./components/Navbarcomp";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import SearchItem from "./components/SearchItem";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbarcomp />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:item" element={<SearchItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
