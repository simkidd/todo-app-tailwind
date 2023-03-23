import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Todos from './pages/Todos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='todos' element={<Todos />} />
      </Routes>
    </Router>
  )
}

export default App