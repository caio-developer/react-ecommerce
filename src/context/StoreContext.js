import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);

  function selectItem(item) {
    setProduct(item);
  }

  function addItemToCart(item) {
    setCart(prevCart => [...prevCart, item]);
  }

  return (
    <StoreContext.Provider
      value={{ headerCount: cart.length, selectItem, product, addItemToCart }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
