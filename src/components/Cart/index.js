import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function Cart() {
  const { cart, removeItemFromCart, state, closeCart } = useContext(StoreContext);

  const cartItemsStyle = {
    display: 'flex',
  };

  const cartItemStyle = {
    border: '1px solid black',
    margin: '1rem',
    marginLeft: '0',
    padding: '.5rem',
  };
  
  const buttonStyle = {
    padding: '1rem',
    borderRadius: '.5rem',
    background: '#f00',
    color: '#fff'
  }

  if(state.cartStatus)
    return (
      <div style={{ padding: '1rem' }} className='cart'>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          className='header'
        >
          <h1>Carrinho</h1>
          <p style={{fontSize: '20px'}}>Elementos no carrinho {cart.length}</p>
          <button onClick={closeCart} style={buttonStyle}>X</button>
        </div>
        <div style={cartItemsStyle} className='cart-items'>
          {cart.map((item, index) => (
            <div style={cartItemStyle} key={item + index} className='cart-item'>
              <h1>{item.nome}</h1>
              <button onClick={() => removeItemFromCart(item)}>
                Remover Item
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  else return null;
}

export default Cart;
