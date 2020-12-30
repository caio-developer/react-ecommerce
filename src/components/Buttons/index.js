import React, { useContext } from 'react';
import './style.css';
import { StoreContext } from '../../context/StoreContext';

function Buttons({ items }) {
  const { selectItem } = useContext(StoreContext);

  if (items)
    return (
      <div className='buttons'>
        {items.map((item, index) => (
          <button onClick={() => selectItem(item)} key={item + index}>
            {item.nome}
          </button>
        ))}
      </div>
    );
  else return null;
}

export default Buttons;
