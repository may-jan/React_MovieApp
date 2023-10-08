import React from 'react';
import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/font.css';
<link
  href='https://fonts.googleapis.com/css2?family=Young+Serif&display=swap'
  rel='stylesheet'
></link>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
