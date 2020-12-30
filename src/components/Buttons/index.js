import React from 'react';
import './style.css';

function Buttons({ items }) {
  if (items)
    return (
      <div className='buttons'>
        {
          items.map((item, index) => (
            <button key={item+index}>{item.nome}</button>
          ))
        }
      </div>
    );
  else return null;
}

export default Buttons;
