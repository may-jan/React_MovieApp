import React from 'react';
import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/:id' element={<Detail />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
