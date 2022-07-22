import React from 'react';
import './style.css';
import Create from './Create';
import Edit from './Edit';
import View from './View';
// https://my-project-2-77ea0-default-rtdb.firebaseio.com/users.json
export default function App() {
  return (
    <div>
      <Create />
      <Edit />
      <View />
    </div>
  );
}
