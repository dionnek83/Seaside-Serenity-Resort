import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './header';
import Footer from './footer';
import pool from './assets/images/pool-image.jpg';
import room from './assets/images/room-preview.jpg';
import room_two from './assets/images/room-preview-two.jpg'
import { Icon } from '@iconify/react';
import Testimonials from './testimonials';
import {Link} from 'react-router-dom';
import Room from './Room';

function Home() {
const [rooms, setRooms] = useState([]);


  useEffect(()=>{
axios.get("http://localhost:8081/retrieve-three-rooms").then(res => setRooms(res.data)).catch(err=> console.log(err))
  },[])
  
  


 
  
  return <>
  
    <Header />

    {/* HERO SECTION ---------------------------------------------------------------- */}
    <section className='hero bg-hero bg-cover bg-center pb-6'>
      <div className='m-auto' >
        <div className="  text-white text-center pt-28 md:pt-40  ">
        <p className='font-forum text-2xl md:text-4xl mb-4 text-gray-300'>Luxury resort</p>
<hr  className=' border-gray-200 m-auto w-24 border '/>
<h1 className=' font-forum text-5xl mb-8 md:mb-20 mt-8 md:text-8xl'>Escape to Paradise</h1>

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

{/*  SECTION TWO  ---------------------------------------------------------------- */}
<section className='flex pt-16 px-6 pb-8 flex-col lg:flex-row' >
  <div className='flex flex-col justify-center items-center mb-12 lg:w-1/3 '>
    <p className='text-primary-200 font-forum text-center lg:text-xl'>Luxury resort</p>
    <h3 className='font-kameron text-3xl text-center lg:text-4xl'>Adventure Awaits, <br /> Your Way</h3>
    <p className='text-gray-100 text-center mt-4  max-w-2xl'>Immerse yourself in a world of unparalleled beauty and relaxation at our stunning seaside resort. Here, you'll wake up to the gentle lull of ocean waves and unparalleled sunrises, with each moment becoming a masterpiece of nature. Our resort isn't just a destination; it's an experience you'll cherish forever. </p>
    <button className='bg-primary-200  text-slate-100 px-12 py-2 m-auto mt-6 '>About us</button>
  </div>
  <div className='images-container flex  justify-center item lg:w-2/3 md:px-16'>
<div className='large-image w-2/4 pt-3 mr-2'>
  <img src={pool} alt="pool-image" className='w-full' />
</div>
<div className='two-images flex flex-col w-2/4'>
<img src={room} alt="room-image" className=' pb-2'  />
<img src={room_two} alt="room-two-image" className='' />
</div>
  </div>
</section>

{/* FACILITIES & SERVICES SECTION ---------------------------------------------------------------- */}

<section className='bg-primary-100 font-kameron px-6 pb-6 pt-10 text-center md:text-left grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
 
    <div className='restaurant flex pb-6 sm:pb-10 flex-col justify-center items-center md:flex-row md:items-start'>
  
    <Icon icon="iconoir:cutlery" width={45}  className='text-primary-200 w-1/4 mb-4' />
    <div className='facilities-text w-3/4 '>
      <h3 className='font-bold'>Restaurant & Bar</h3>
      <p className='max-w-md m-auto'>Multiple dining options serving a variety of cuisines. We offer a place to relax and enjoy cocktails, wines, and other beverages.</p>
    </div>
    </div>

    <div className='gift-shop flex pb-6 sm:pb-16 flex-col justify-center items-center md:flex-row md:items-start'>

    <Icon icon="material-symbols-light:shopping-bag-outline" width={45}  className='text-primary-200 w-1/4 mb-4' />
    <div className='facilities-text  w-3/4'>
      <h3  className='font-bold'>Gift shop</h3>
      <p className='max-w-sm m-auto'>Boutiques and stores for souvenirs and essentials are present on the resort.</p>
    </div>
    </div>
 

 
    <div className='beach flex  pb-6  sm:pb-16 flex-col justify-center items-center md:flex-row md:items-start'>
  
    <Icon icon="mdi:palm-tree"  width={45}  className='text-primary-200 w-1/4 mb-4'/>
    <div className='facilities-text  w-3/4'>
      <h3  className='font-bold'>Beach access</h3>
      <p className='max-w-sm m-auto'>Private access to a pristine beach with water sports and sun loungers.</p>
    </div>
    </div>

    <div className='transport flex pb-6 sm:pb-16 flex-col justify-center items-center md:flex-row md:items-start'>
   
    <Icon icon="carbon:shuttle" width={45}  className='text-primary-200 w-1/4 mb-4' />
    <div className='facilities-text  w-3/4'>
      <h3  className='font-bold'>Transportation</h3>
      <p className='max-w-sm m-auto'>Shuttle services and car rentals are available upon request. </p>
    </div>
    </div>



    <div className='wifi flex pb-6 sm:pb-16 flex-col justify-center items-center md:flex-row md:items-start'>

    <Icon icon="material-symbols-light:wifi" width={45}  className='text-primary-200 w-1/4 mb-4' />
    <div className='facilities-text  w-3/4'>
      <h3  className='font-bold'>Free Wi-Fi</h3>
      <p className='max-w-sm m-auto'>Complimentary internet access throughout the resort.</p>
    </div>
    </div>

    <div className='shows flex pb-6 sm:pb-16 flex-col justify-center items-center md:flex-row md:items-start'>

    <Icon icon="material-symbols:mic-external-on" width={45}  className='text-primary-200 w-1/4 mb-4' />
    <div className='facilities-text  w-3/4'>
      <h3 className='font-bold'>Nightly Shows & Entertainment</h3>
      <p className='max-w-sm m-auto'>Live performances, music, and themed events.</p>
    </div>
    </div>
  

</section>

{/* ROOMS SECTION ---------------------------------------------------------------- */}

<section className=' px-4 py-24'>
  <p className='text-primary-200 font-forum text-md md:text-lg text-center'>Pure Elegance, Pure Pleasure</p>
  <h1 className='text-kameron text-4xl md:text-5xl text-center '>Rooms & Suites</h1>
  <p className='text-gray-100 mt-4 mb-16 text-center max-w-5xl mx-auto md:text-xl'>Discover unparalleled comfort and style in our range of excellent rooms and suites, where affordability meets luxury. At Seaside Serenity resort we're committed to providing you with an exceptional stay without breaking the bank. </p>


<div className='cards-container grid md2:grid-cols-2  xl:grid-cols-3 font-forum'>

{rooms.map(room =>(


<div className='shadow-xl  w-80 sm:w-96  relative pb-4 mb-7 mx-auto '>
<Link to='/room' state={room["RoomID"]}>
<img src={room["Image"]} alt=""  />
</Link>
 
  <span className=''>
  <button className='bg-primary-200  text-slate-200 px-7 sm:px-10 py-4 mr-2  absolute left-6 sm:left-8 top-52 sm:top-64 '>N${room["Price"]}/Night</button>
  <button className='bg-primary-200  text-slate-200 px-7 sm:px-10 py-4  absolute right-6 sm:right-8 top-52 sm:top-64  '>Book Now</button>
  </span>
<h3 className='mt-10 font-medium text-2xl ml-3'>{room["Name"]}</h3>
<hr  className=' border-primary-200  w-24 border my-4 ml-3'/>
<p className='text-gray-100 px-3'>{room["Description"]}</p>

<div className='text-primary-200 float-right flex mr-10'><Icon icon="material-symbols-light:person-outline" width="30" height="30"  /> {room["No_Of_Guests"]} guests</div>
</div>
))}

</div>

</section>

{/* SECTION ---------------------------------------------------------------- */}

<section className='bg-sale bg-cover w-full h-96  bg-center '>
  <div className='w-full h-full flex flex-col text-center px-10 font-kameron  justify-center items-center backdrop-brightness-50'>
  <h3 className='text-white text-2xl font-bold max-w-3xl md2:text-4xl'>Book a room today and enjoy an automatic 20% discount on your stay.</h3>
  <hr  className=' border-primary-200  w-24 border my-4 ml-3'/>
  <p className='text-neutral-200 text-lg max-w-3xl md:text-2xl'>This special promotion is valid only for bookings made today. Limited availability secure your spot now!</p>
  <button className='bg-primary-200  text-slate-200 px-10 py-2  mt-6 md:px-12 md:py-3 text-lg '>view rooms</button>
  </div>
  
</section>

{/* SECTION ---------------------------------------------------------------- */}

<section className='py-20'>
  <p className='font-forum text-primary-200 text-center text-lg md:text-2xl'>Client experience</p>
  <h1 className='font-kameron text-4xl text-center  mb-14 md:text-6xl'>Testimonials</h1>

 {/* font for  card is kameron */}
 <Testimonials/>

</section>

<Footer />
  </>
}

export default Home