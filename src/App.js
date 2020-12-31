import React, { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';
import StoreContextProvider from './context/StoreContext';

function App() {

  return (
    <StoreContextProvider>
      <Header />
      <Buttons />
      <Product />
      <Cart />
    </StoreContextProvider>
  );
}

export default App;
