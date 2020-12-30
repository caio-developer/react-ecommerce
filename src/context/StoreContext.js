import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return <StoreContext.Provider value={{headerCount: cart.length}}>{children}</StoreContext.Provider>;
}

export default StoreContextProvider;
