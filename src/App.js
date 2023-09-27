import React, { useState } from 'react';

const App = () => {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    } else {
      setToDos((prev) => [toDo, ...prev]);
      setToDo('');
    }
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((list, idx) => {
          return <li key={idx}>{list}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
