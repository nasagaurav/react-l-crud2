import React, { useState } from 'react';
import './style.css';
import Create from './Create';
import Edit from './Edit';
import View from './View';
// https://my-project-2-77ea0-default-rtdb.firebaseio.com/users.json
export default function App() {
  const [id, setid] = useState('');
  const handleOnEDit = (e) => {
    console.log(e);
    setid(e);
  };
  return (
    <div>
      <Create />
      <Edit id={id} />
      <View onEdit={handleOnEDit} />
    </div>
  );
}
