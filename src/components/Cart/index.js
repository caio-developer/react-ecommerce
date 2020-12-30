import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function Cart() {
  const { cart, removeItemFromCart } = useContext(StoreContext);

  const cartItemsStyle = {
    display: 'flex',
  };

  const cartItemStyle = {
    border: '1px solid black',
    margin: '1rem',
    marginLeft: '0',
    padding: '.5rem',
  };

  return (
    <div style={{padding: '1rem'}} className='cart'>
      <h1>Carrinho</h1>
      <div style={cartItemsStyle} className='cart-items'>
        {cart.map((item, index) => (
          <div style={cartItemStyle} key={item + index} className='cart-item'>
            <h1>{item.nome}</h1>
            <button onClick={() => removeItemFromCart(item)}>Remover Item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
