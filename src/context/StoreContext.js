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

  function isInCart(item) {
    if (cart.includes(item)) return true;
    else return false;
  }

  function removeItemFromCart(item) {
    setCart(prevState => prevState.filter(element => element !== item));
    setNotification(<p>O item {item.nome} foi removido do carrinho.</p>);
  }

  function addItemToCart(item) {
    setCart(prevState => [...prevState, item]);
    setNotification(<p>O item {item.nome} foi adicionado ao carrinho.</p>);
  }

  return (
    <StoreContext.Provider
      value={{
        cart,
        selectItem,
        product,
        addItemToCart,
        notification,
        isInCart,
        removeItemFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
