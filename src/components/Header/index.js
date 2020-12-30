import React from 'react';
import './style.css';
import Notification from './sub/Notification';

function Header() {

  return (
    <header>
      <button>Carrinho</button>
      <Notification />
    </header>
  );
}

export default Header;
