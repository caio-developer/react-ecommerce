import React, { useContext } from 'react';
import './style.css';
import { StoreContext } from '../../context/StoreContext';

function Buttons() {
  const { selectItem, state, api } = useContext(StoreContext);

  if (state.buttonsStatus)
    return (
      <div className='buttons'>
        {api.map((item, index) => (
          <button onClick={() => selectItem(item)} key={item + index}>
            {item.nome}
          </button>
        ))}
      </div>
    );
  else return null;
}

export default Buttons;
