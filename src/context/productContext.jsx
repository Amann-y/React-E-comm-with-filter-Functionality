import { createContext, useContext, useEffect, useState } from "react";
import { items } from "../utils/data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(items);
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setData(items);
  }, []);

  function addToCart(prod) {
    let arr = [...cartItems];
    arr.push(prod);
    setCartItems(arr);
  }

  function removeItem(id) {
    const data = cartItems.filter((ele) => ele.id !== id);
    setCartItems(data);
  }

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        data,
        setData,
        cartItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
