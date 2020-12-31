import React, { useContext } from 'react';
import './style.css';
import { StoreContext } from '../../context/StoreContext';

function Product() {
  const {
    product,
    addItemToCart,
    isInCart,
    removeItemFromCart,
    state,
    closeProduct,
  } = useContext(StoreContext);

  const buttonStyle = {
    padding: '1rem',
    borderRadius: '.5rem',
    background: '#f00',
    color: '#fff',
    position: 'absolute',
    right: '1rem',
  };

  if (state.productStatus)
    return (
      <div className='product'>
        <img src={product.fotos[0].src} alt={product.descricao} />
        <div className='info'>
          <div className='text'>
            <h1>{product.nome}</h1>
            <p id='info-style-p'>{product.descricao}</p>
            <p>R$ {product.preco}</p>
          </div>

          <div className='button'>
            {isInCart(product) ? (
              <button onClick={() => removeItemFromCart(product)}>
                Remover do carrinho
              </button>
            ) : (
              <button onClick={() => addItemToCart(product)}>
                Adicionar ao Carrinho
              </button>
            )}
          </div>
        </div>
        <button onClick={() => closeProduct(product)} style={buttonStyle}>
          X
        </button>
      </div>
    );
  else return null;
}

export default Product;
