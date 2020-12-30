import React from 'react';
import Header from './components/Header';
import StoreContextProvider from './context/StoreContext';

function App() {
  return <StoreContextProvider>
    <Header />
  </StoreContextProvider>;
}

export default App;
