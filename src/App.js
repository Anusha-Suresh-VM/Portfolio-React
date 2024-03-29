import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';

import Home from './Components/Home';
import About from './Pages/About';
import Navbar from './Navigation/Navbar';
import Academic from './Pages/Academic';
import Myprojects from './Pages/Myprojects';




export default function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Navbar/>
      <Routes>
        
        <Route path='/aboutme' element={<About/>}></Route>
        <Route path='/academic' element={<Academic/>}></Route>
        <Route path='/myprojects' element={<Myprojects/>}></Route>
      </Routes>
    
    </div>
  );
}


