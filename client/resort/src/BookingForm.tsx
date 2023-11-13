import React from 'react';
import Popup from 'reactjs-popup';
import beach from './assets/images/pool-image.jpg'


export const BookingForm = () => {
  return (
   
      <Popup trigger={<button className="bg-primary-200  text-slate-200 px-10 mb-14 py-2 md2:float-right  mt-6 md:px-12 md:py-3 text-lg md2:mt-12"> Book Room </button>} modal>
       <div className='font-forum  md:px-0   flex flex-col md:flex-row md:justify-between '>
       <img src={beach} alt=""  className='w-1/2 h-auto pr-4 hidden md:block' />
       <div className=' mr-4'>
        <h3 className='font-medium font-kameron text-2xl pt-2'>Make your Reservation</h3>
        <form action="" className='flex flex-col mt-2 w-80 '>
        <label htmlFor="" className='font-bold mb-1'>Check-In</label>
        <input type="date" name="" id="" placeholder='yyyy/mm/dd' className='bg-gray-50 py-2 px-1 mb-1'/>
        <label htmlFor=""  className='font-bold mb-1'>Check-Out</label>
        <input type="date" name="" id="" placeholder='yyyy/mm/dd' className='bg-gray-50 py-2 px-1 mb-1'/>
        <label htmlFor=""  className='font-bold mb-1'>Full name</label>
        <input type="text" className='bg-gray-50 py-2 px-2 mb-3' placeholder='full name'/>
        <label htmlFor=""  className='font-bold mb-1'>Email Address</label>
        <input type="email" name="" id="" className='bg-gray-50 py-2 px-2 mb-1' placeholder='Email Address'/>
        <label htmlFor=""  className='font-bold mb-2'>Cellphone number</label>
        <input type="text" className='bg-gray-50 py-2 px-2 mb-1' placeholder='Cellphone Number'/>
        <label htmlFor=""  className='font-bold mb-1'>Physical Address</label>
        <input type="text" className='bg-gray-50 py-2 px-2 mb-1' placeholder='Physical Address'/>
        <button className='py-4 mb-2 px-4 bg-primary-200 text-white'> Book Now</button>
        </form>
       </div>
       </div>
      </Popup>
  
  )
}
