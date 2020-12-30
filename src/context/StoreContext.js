import React, { createContext, useState, useEffect, useRef } from 'react';

export const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);
  const [notification, setNotification] = useState(null);
  const notificationRef = useRef();

  useEffect(() => {
    clearTimeout(notificationRef.current);

    notificationRef.current = setTimeout(() => {
      setNotification(null);
    }, 2000);
  }, [notification]);

  function selectItem(item) {
    setProduct(item);
    setNotification(<p>{item.nome} selecionado.</p>);
  }

  function addItemToCart(item) {
    setCart(prevCart => [...prevCart, item]);
  }

  return (
    <StoreContext.Provider
      value={{
        headerCount: cart.length,
        selectItem,
        product,
        addItemToCart,
        notification,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
