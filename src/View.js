import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://my-project-2-77ea0-default-rtdb.firebaseio.com/users.json';
function View() {
  const [a, seta] = useState([]);
  const _nasa = (ob) => {
    if (!ob) return [];
    let temp = [];
    let keys = Object.keys(ob);
    let values = Object.values(ob);
    keys.forEach((item, index) => {
      temp.push({
        id: keys[index],
        ...values[index],
      });
    });
    return temp;
  };
  const boot = () => {
    axios
      .get(url)
      .then((d) => d.data)
      .then((d) => _nasa(d))
      .then((d) => seta(d));
  };
  useEffect(boot, []);
  return (
    <div>
      <h1>View {a.length}</h1>
      <table>
        <th>id</th>
        <th>name</th>
        <th>delete</th>
        {a.map((x) => (
          <tr>
            <td>{x.id}</td>
            <td>{x.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default View;
