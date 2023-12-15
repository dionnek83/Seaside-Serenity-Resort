
import { Icon } from '@iconify/react';


function Footer() {

  return (
   <footer className='bg-black-200 grid grid-cols-1  md:grid-cols-4  text-center md:text-left  pt-12 px-16 pb-8' >
       <h1 className='font-milt text-white text-2xl mb-6 md:ml-2 '>Seaside Serenity <br /><span className='font-forum text-center'> Resort</span></h1>
   
<div>
<h3 className='font-kameron text-slate-50 text-lg font-bold md:text-xl'>Quick Links</h3>
<ul className='font-forum text-slate-300 mt-2  md:text-xl'>
  <li>Home</li>
  <li>About us</li>
  <li>Rooms</li>
  <li>Contact</li>

</ul>

</div>

<div>
<h3  className='font-kameron text-slate-50 text-lg mt-4 md:mt-0 font-bold md:text-xl'>Our Services</h3>
<ul className='font-forum text-slate-300 mt-2 mb-2 md:text-xl'>
  <li>FAQ</li>
  <li>Support</li>
  <li>Privacy</li>
  
</ul>

</div>

<div className='mx-auto md:mx-0  md:text-xl'>
  <h3  className='font-kameron text-slate-50 text-lg mt-4 md:mt-0 mb-2 font-bol md:text-xl font-bold'>Address</h3>
  <div className='flex  font-forum text-slate-300'><Icon icon="mdi:location"  className='text-slate-50 mr-2'/> Hill, Swakopmund </div>
  <div className='flex  font-forum text-slate-300'><Icon icon="mdi:telephone"  className='text-slate-50 mr-2'/> +(264) 61385746 </div>
  <div className='flex font-forum text-slate-300'><Icon icon="ic:outline-email"  className='text-slate-50 mr-2'/> seaside@gmail.com </div>
</div>

   </footer>
  )
}

export default Footer