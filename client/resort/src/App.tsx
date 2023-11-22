import { useState } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import { Rooms } from './rooms';
import Contact from './contact';
import BookingDetails from './BookingDetails';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/rooms/:id' element={<Room />}>
      </Route>
      <Route path='/rooms' element={<Rooms />}>
      </Route>
      <Route path='/contact' element={<Contact />}>
      </Route>
      <Route path='/booking-details' element={<BookingDetails/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
