import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log('I run all the time');

  useEffect(() => {
    console.log('- - - CALL THE API - - -');
  }, []);

  useEffect(() => {
    console.log(`keyword 변경될 때마다 실행 ${keyword}`);
  }, [keyword]);

  useEffect(() => {
    console.log(`counter 변경될 때마다 실행 ${counter}`);
  }, [counter]);

  return (
    <div className='App'>
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type='text'
          placeholder='Search here'
        />
        <h1>Hello React {counter}</h1>
        <button onClick={onClick}>Click!</button>
      </div>
    </div>
  );
}

export default App;
