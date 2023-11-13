import React from 'react'
import { Icon } from '@iconify/react';
import martha from './assets/images/martha-profile-pic.jpg'
import kevin from './assets/images/kevin-profile-pic.jpg'
import joseph from './assets/images/joseph-profile-pic.jpg'
import sam from './assets/images/samantha-profile-pic.jpg'
import toby from './assets/images/toby-profile-pic.jpg'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Testimonials() {

    const responsive = {
       
        desktop: {
          breakpoint: { max: 3000, min: 1180 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
      };      return <>
      
      <Carousel 
      
      responsive={responsive}
      itemClass="carousel-item-padding-60-px"
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={4000}
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet",'mobile', 'desktop']}
      >

        {/* Testimonial card ------------------------------------- */}

    <div className='shadow-xl  w-80 sm:w-96 mx-auto px-6 py-6 border-2 font-kameron'>
      <p className='text-gray-500 mb-4'>“Our stay at Seaside Serenity Resort was truly unforgettable. The stunning beachfront villa, impeccable service, and world-class dining exceeded our expectations. We've never felt more relaxed and pampered. This resort is a piece of heaven on Earth!”</p>
    <div className='flex justify-between'>
      
      <div className='flex items-center'>
      <img src={martha} alt="profile-pic" className='w-16 h-16 object-cover rounded-full' />
     <div className='pl-4'>
     <h6 className='font-bold text-sm'>Martha Shilongo</h6>
      <span className='block text-gray-400'>Guest</span>
     </div>
    
      </div>
    <span className='flex text-primary-200  mt-8 '>
    <Icon icon="mdi:star" />
    <Icon icon="mdi:star" />
    <Icon icon="mdi:star" />
    <Icon icon="mdi:star" />
    <Icon icon="mdi:star" />
       </span>
    
     
    
    </div>
    </div>
    
       {/* Testimonial card ------------------------------------- */}

     

<div className='shadow-2xl  w-96 sm:w-96 mx-auto px-6 py-6 border-2 font-kameron'>
  <p className='text-gray-500 mb-4'>"I've traveled to many resorts, but Seaside Serenity Resort is something truly special. The lush, tropical gardens and the wildlife surrounding the property created a unique and immersive experience. The spa was divine, and the local cuisine was mouthwatering."</p>
<div className='flex justify-between'>
  
  <div className='flex items-center'>
  <img src={sam} alt="profile-pic" className='w-16 h-16 object-cover rounded-full' />
 <div className='pl-4'>
 <h6 className='font-bold text-sm'>Samantha Stevens</h6>
  <span className='block text-gray-400'>Guest</span>
 </div>

  </div>
<span className='flex text-primary-200  mt-8 '>
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
   </span>

 

</div>
</div>

  

   {/* Testimonial card ------------------------------------- */}

<div className='shadow-xl  w-96 sm:w-96 mx-auto px-6 py-6 border-2 font-kameron'>
  <p className='text-gray-500 mb-4'>"We took our entire family to Seaside Serenity Resort, and it was a hit with everyone. The water sports, hiking trails, and family-friendly activities kept the kids entertained while my wife and I had some much-needed relaxation time. </p>
<div className='flex justify-between'>
  
  <div className='flex items-center'>
  <img src={kevin} alt="profile-pic" className='w-16 h-16 object-cover rounded-full' />
 <div className='pl-4'>
 <h6 className='font-bold text-sm'>Kevin Jackson</h6>
  <span className='block text-gray-400'>Guest</span>
 </div>
</div>
<span className='flex text-primary-200  mt-8 '>

<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
   </span>

 

</div>
</div>


 {/* Testimonial card ------------------------------------- */}
  

<div className='shadow-xl  w-96 sm:w-96 mx-auto px-6 py-6 border-2 font-kameron'>
  <p className='text-gray-500 mb-4'>"I can't say enough good things about Seaside Serenity Resort. The staff were incredibly welcoming and attentive, the activities were a blast, and the food was out of this world. We had a blast snorkeling, and the kids loved the water park. We'll be back for sure!"</p>
<div className='flex justify-between'>
  
  <div className='flex items-center'>
  <img src={joseph} alt="profile-pic" className='w-16 h-16 object-cover rounded-full' />
 <div className='pl-4'>
 <h6 className='font-bold text-sm'>Joseph Gonzalez</h6>
  <span className='block text-gray-400'>Guest</span>
 </div>

  </div>
<span className='flex text-primary-200  mt-8 '>
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
   </span>

 

</div>
</div>

 {/* Testimonial card ------------------------------------- */}
  

 <div className='shadow-xl  w-96 sm:w-96 mx-auto px-6 py-6 border-2 font-kameron'>
  <p className='text-gray-500 mb-4'>"The tranquil beauty of Seaside Serenity Resort left us speechless. The breathtaking mountain views, the cozy log cabins, and the clear starry nights made our stay magical. It was a perfect escape from our busy lives."</p>
<div className='flex justify-between'>
  
  <div className='flex items-center'>
  <img src={toby} alt="profile-pic" className='w-16 h-16 object-cover rounded-full' />
 <div className='pl-4'>
 <h6 className='font-bold text-sm'>Toby Mathews</h6>
  <span className='block text-gray-400'>Guest</span>
 </div>

  </div>
<span className='flex text-primary-200  mt-8 '>
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
<Icon icon="mdi:star" />
   </span>

 

</div>
</div>
  

      </Carousel>;
      </>
}
