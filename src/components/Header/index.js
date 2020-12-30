import React, { useContext } from 'react';
import './style.css';
import { StoreContext } from '../../context/StoreContext';
import Notification from './sub/Notification';

function Header() {
  const { headerCount } = useContext(StoreContext);

  return (
    <header>
      <p>Qtd. Cart: {headerCount}</p>
      <Notification />
    </header>
  );
}

export default Header;
