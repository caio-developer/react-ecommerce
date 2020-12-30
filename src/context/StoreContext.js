import React, { createContext } from 'react';

export const StoreContext = createContext();

function StoreContextProvider({ children }) {
  return <StoreContext.Provider value>{children}</StoreContext.Provider>;
}

export default StoreContextProvider;
