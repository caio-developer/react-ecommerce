import React, { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Product from './components/Product';
import StoreContextProvider from './context/StoreContext';

function App() {
  const [api, setApi] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto'
      ).then(response => response.json());

      setApi(response);
    })();
  }, []);

  return (
    <StoreContextProvider>
      <Header />
      <Buttons items={api} />
      <Product />
    </StoreContextProvider>
  );
}

export default App;
