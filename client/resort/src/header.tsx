import { Icon } from '@iconify/react/dist/iconify.js';
import  { useState } from 'react'
import { Link } from 'react-router-dom';


function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
  //  <nav className=' md:flex justify-between  pt-4 pb-3 px-6 z-10   bg-black bg-opacity-50 fixed top-0 w-full '>
  <nav className='z-10 px-4 py-4 md2:px-10 bg-black bg-opacity-75 md2:flex md2:justify-between md2:bg-opacity-50 fixed top-0 w-full '>
    <div className='flex justify-between'>
      <Link to="/">Seaside Serenity Resort</Link>
    {/* <h1 className='font-milt text-white '>Seaside Serenity <br /><span className='font-forum text-center'> Resort</span></h1> */}
    <div className="md2:hidden cursor-pointer" onClick={toggleNav}>
    <Icon icon="ci:menu-alt-02" width={40} className='text-white'/>
    </div>
    </div>
  <div  className={`md2:flex  ${isNavOpen ? 'block' : 'hidden'}  md2:justify-between md2:items-center text-center`}>
  {/* <ul className=' md:flex pr-16 hidden justify-center items-center text-slate-200 text-xl font-forum '> */}
  <ul className='text-white md:text-slate-200 text-2xl  md2:flex font-forum pt-2 text-center '>
 
        <li className='px-4  md2:py-0 md2:pr-4'><Link to="/">Home</Link></li>
        <li className='px-4 py-3  md2:pr-4 md2:py-0'><Link to="/">About us</Link></li>
        <li className='px-4 py-2 md2:pr-4 md2:py-0'><Link to="/rooms">Rooms</Link></li>
        <li className='px-4 py-3 md2:pr-16 md2:py-0' ><Link to="/contact">Contact</Link></li>
        <li className='px-4  md2:py-0 md2:pr-4'><Link to="/booking-details">Details</Link></li>
    </ul>
    <button className='bg-primary-300  md2:bg-primary-200 text-slate-100 px-9 py-2 mt-4'>Book</button>
  
  </div>
    


   </nav>


  )
}

export default Header

