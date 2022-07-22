import React, { useRef, useEffect } from 'react';
import axios from 'axios';
function Edit(props) {
  const url = `https://my-project-2-77ea0-default-rtdb.firebaseio.com/users/${props.id}.json`;
  const ref = useRef();

  const update = () => {
    const name = ref.current.value;
    axios.patch(url, { name: name });
  };

  const boot = () => {
    axios
      .get(url)
      .then((d) => d.data)
      .then((d) => {
        if (d?.name) {
          ref.current.value = d?.name;
        }
      });
  };
  useEffect(boot, [props.id]);

  return (
    <div>
      <h1>Edit</h1>
      <h2>editing {props.id}</h2>
      <input ref={ref} />
      <button onClick={update}>update</button>
    </div>
  );
}
export default Edit;
