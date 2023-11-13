import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

export const Rooms = () => {

    const [rooms, setRooms] = useState([]);


    useEffect(()=>{
  axios.get("http://localhost:8081/").then(res => setRooms(res.data)).catch(err=> console.log(err))
    },[])

  return <>
  <Header/>
   
    <section className=' bg-rooms bg-cover bg-center pb-6 '>
    
    <div className='m-auto' >
        <div className="  text-white text-center pt-28 md:pt-40  ">
       
<h1 className=' font-forum text-5xl mb-8 md:mb-20 mt-8 md:text-8xl font-bold'>Rooms</h1>

  {/* AVAILABILITY CHECKER ---------------------------------------------------------------- */}
<div className='check-availability w-80 md:w-3/5 md:flex  bg-white  m-auto font-forum '>

  <div  className='flex flex-col pt-2 pr-6 pb-5 pl-4' >
  <label htmlFor="" className='text-slate-400 text-left text-xl mb-2'>Check-In</label>
  <input type="date" name="" id="" className='text-black outline-none' />
  </div>
 <div className='flex flex-col pt-2 pr-6 pb-5 pl-4 ' >
 <label htmlFor="" className='text-slate-400 text-left text-xl mb-2'>Check-Out</label>
  <input type="date" name="" id="" className='text-black outline-none'/>
 </div>
  
  <div className='flex flex-col pt-2 pr-0 pb-5 pl-4 ' >
  <label htmlFor="" className='text-slate-400 text-left text-xl mb-2'>Guests</label>
  <input type="number" name="" id=""  className='text-black w-24 outline-none'/>
  </div>
 
  <button className='bg-primary-200  text-slate-100 px-4 py-4 w-full  '>Check Availability</button>
</div>
        </div>
    
      </div>
        </section>

        <section className='rooms-area pt-16 pb-32 md2:px-10'>
        <div className='cards-container grid md2:grid-cols-2 xl:grid-cols-3 font-forum gap-y-14 '>

{rooms.map(room =>(


<div className='shadow-xl  w-80  sm:w-96  relative pb-4 mb-7 mx-auto '>
<Link to='/room' state={room["RoomID"] } className='w-full'>
<img src={room["Image"]} alt=""  className='h-64 w-full'/>

</Link>
 
  <span className=''>
  <button className='bg-primary-200  text-slate-200 px-7 sm:px-10 py-4 mr-2  absolute left-2  top-2  '>N${room["Price"]}/Night</button>
  
  </span>
<h3 className='mt-6 font-medium text-2xl ml-3'>{room["Name"]}</h3>
<hr  className=' border-primary-200  w-24 border my-4 ml-3'/>
<p className='text-gray-100 px-3'>{room["Description"]}</p>


</div>
))}

</div>
        </section>
    <Footer/>
  </>
}
