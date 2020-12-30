import React, { useContext } from 'react';
import { StoreContext } from '../../../context/StoreContext';

function Notification() {
  const { notification } = useContext(StoreContext);

  if (notification) return <div className='notification'>{notification}</div>;
  else return null;
}

export default Notification;
