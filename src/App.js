import React from 'react';
import img from "./Images/hero.7666b2a4.gif"
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home"
import Contact from './Components/Contact';
import About from './Components/About';
import Blog from './Components/Blog';
import Portfolio from './Components/Portfolio';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      {/* <img src={img} alt="" /> */}

    </div>
  );
}

export default App;
