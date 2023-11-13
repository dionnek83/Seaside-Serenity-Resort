import React from 'react'
import Header from './header'
import Footer from './footer'
import { Icon } from '@iconify/react/dist/iconify.js'

const Contact = () => {
  return <>
  <Header/>
  <section className=' bg-contact bg-cover  h-96 bg-center pb-6  '>
    
    <div className=' w-full h-96 flex flex-col text-center px-10 font-kameron  justify-center items-center backdrop-brightness-50' >
        <div className="  text-white text-center pt-28 md:pt-40  ">
       
<h1 className=' font-forum text-5xl mb-8 md:mb-20 mt-8 md:text-8xl font-bold'>Contact Us</h1>

</div>
</div>
</section>


<section className='md2:px-0 px-8 py-10 font-forum '>
    <div className='flex flex-col md2:flex-row justify-center items-center md2:justify-around  '>
        <div className='text-side relative'>
            <h1 className='text-2xl font-medium font-kameron mb-6  '>Your Seaside Family</h1> 
           
            <p className='max-w-lg '>At Seaside Serenity Resort, we are dedicated to providing you with the best experience possible during your stay. 
                Your comfort and satisfaction are of the utmost importance to us, and we want to make sure you have a memorable 
                and enjoyable time with us. <br /><br /> If you have any questions, concerns, or special requests, 
                please do not hesitate to reach out to our friendly 
             and attentive staff. We are here to assist you in any way we can. Whether you need assistance with room service, 
             information about local attractions, or have specific dietary requirements, we are at your service.</p>
            <div className='contact-details my-8'>
                <div className='flex w-44'>
                <Icon icon="mdi:location" width={24} className='text-primary-200 mr-4'/>
                <div className=''>
                    <h3 className='font-bold'>Address</h3>
                <p className='my-1'>Hill, Swakopmund</p>
                </div>

                </div>

                <div className='flex w-44'>
                <Icon icon="mdi:telephone" width={24} className='text-primary-200 mr-4'/>
                <div>
                    <h3 className='font-bold'>Phone</h3>
                <p className='my-1'>+(264) 61385746</p>
                </div>

                </div>

                <div className='flex w-44'>
                <Icon icon="ic:outline-email" width={24} className='text-primary-200 mr-4'/>
                <div>
                    <h3 className='font-bold'>Email</h3>
                <p className='my-1'>seaside@gmail.com</p>
                </div>

                </div>
               
            </div>

        </div>
        <div className='bg-primary-200 pb-8 pt-6 px-8 w-80 sm:w-4/5  md2:mx-0  md2:w-fit lg:w-96'>
            <form action="" method="post" className='flex flex-col '>
            <label htmlFor="" className='text-white mb-2'>Name</label>
            <input type="text" className='px-4 py-2 mb-4 bg-primary-400 ' />
            <label htmlFor=""  className='text-white  mb-2'>Email</label>
            <input type="email" name="" id="" className='px-4 py-2 mb-4 bg-primary-400 '  />
            <label htmlFor=""  className='text-white  mb-2'>Phone number</label>
            <input type="text" className='px-4 py-2 mb-4 bg-primary-400 ' />
            <label htmlFor=""  className='text-white  mb-2'>Message</label>
            <textarea name="" id="" cols={30} rows={5} className='px-4 py-2 mb-8 bg-primary-400 ' ></textarea>
            <button className='py-4 px-4 bg-primary-300 text-white'> Send message</button>
            </form>
        </div>
    </div>
</section>
    <Footer />
 </>
}

export default Contact