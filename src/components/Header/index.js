import React, { useContext } from 'react';
import './style.css';
import { StoreContext } from '../../context/StoreContext';

function Header() {
  const { headerCount } = useContext(StoreContext);

  return (
    <header>
      <p>Qtd. Cart: {headerCount}</p>
    </header>
  );
}

export default Header;
