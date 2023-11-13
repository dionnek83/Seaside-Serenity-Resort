import { useState } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import { Rooms } from './rooms';
import Contact from './contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/room' element={<Room />}>
      </Route>
      <Route path='/rooms' element={<Rooms />}>
      </Route>
      <Route path='/contact' element={<Contact />}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
