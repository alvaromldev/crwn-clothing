import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import './styles.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
