import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Page from '../pages/page';
import Registro from '../pages/Registro';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Page' element={<Page />} />
        <Route path='/Registro' element={<Registro />} />
        
      </Routes>
    </Router>
  );
};

export default Routing
