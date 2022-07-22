import React, { useState } from 'react';
import axios from 'axios';
const url = 'https://my-project-2-77ea0-default-rtdb.firebaseio.com/users.json';
function Create() {
  const [name, setname] = useState('');

  const handleChange = (e) => {
    let value = e.target.value;
    setname(value);
  };
  const insert = () => {
    axios.post(url, { name: name });
  };
  return (
    <div>
      <h1>create</h1>
      <input value={name} onChange={handleChange} />
      <button onClick={insert}>+</button>
    </div>
  );
}
export default Create;
