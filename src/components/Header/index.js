import React, { useContext } from 'react';
import './style.css';
import Notification from './sub/Notification';
import { StoreContext } from '../../context/StoreContext';

function Header() {
  const { state, openCart } = useContext(StoreContext);

  if(state.headerStatus)
    return (
      <header>
        <button onClick={openCart}>Carrinho</button>
        <Notification />
      </header>
    );
  else return null;
}

export default Header;
