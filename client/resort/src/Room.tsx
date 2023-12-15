import axios from 'axios';
import  { useEffect, useState } from 'react'
import {Link, useLocation, useParams} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Icon } from '@iconify/react/dist/iconify.js';
import RoomImage from './RoomImage';
import { useNavigate } from "react-router-dom"
import 'reactjs-popup/dist/index.css';
import { BookingForm } from './BookingForm';





const Room = () => {
  const { id } = useParams();
  const location = useLocation();

  const navigate = useNavigate()
 
  const [roomData, setRoomData] = useState([]);

  const [similarRooms, setSimilarRooms] = useState([]);

  const [amenities, setAmenities] = useState([]);

  const onClickHandler = () => navigate(`/rooms/${id}`)
  
 //const [amenityicon, setAmenityName] = useState([]);
var amenityicon;
  
  function getIcon(amenityName: any){
    
  switch(amenityName){
case "Free Wifi":
  amenityicon = <Icon icon="material-symbols-light:wifi" width={30} className='text-primary-200' />
 return amenityicon 
 break;

  case "Air Condition":
     amenityicon = <Icon icon="iconoir:air-conditioner" width={30} className='text-primary-200 '  />
    return amenityicon 
    break;

  case "Laundry":
    amenityicon = <Icon icon="solar:washing-machine-linear" width={30} className='text-primary-200'  />
    return amenityicon 
    break;

  case "TV":
    amenityicon = <Icon icon="solar:tv-linear" width={30} className='text-primary-200' />
    return amenityicon 
    break;

  case "Hair Dryer":
   amenityicon = <Icon icon="mdi:hair-dryer-outline" width={30} className='text-primary-200' />
    return amenityicon 
    break;

  case "Fridge":
    amenityicon = <Icon icon="tabler:fridge" width={30} className='text-primary-200' />
    return amenityicon 
    break;
  }
  }

  // Retrieve Rooms ---------------------------------------------------------------
  useEffect(()=>{
axios.get("http://localhost:8081/rooms/"+location.state).then(res =>(
  
  setRoomData(res.data)
  
)

).catch(err=> console.log(err))
  },[])


  // Retrieve Similar rooms ----------------------------------------------------
  useEffect(()=>{
    axios.get("http://localhost:8081/similar-rooms/"+location.state).then(res => setSimilarRooms(res.data)).catch(err=> console.log(err))
      },[])

     

      // Retrieve Amenities ---------------------------------------------------------
      useEffect(()=>{
        axios.get("http://localhost:8081/room-amenities/"+location.state).then(res => setAmenities(res.data)).catch(err=> console.log(err))
          },[])

  
//  console.log(similarRooms)
console.log(id)
  return <>
  <Header/>
  <section className='w-full'>
  {roomData?.map((data) => (
  
    <div>
      <div className='relative w-full '>
        <RoomImage image={data["Image"]} />

      <div className='bg-white absolute  py-7 left-0 md2:w-fit right-0 w-80 mx-auto md2:ml-24   px-14 bottom-0'>
  <h1 className='font-kameron md2:text-center text-2xl md2:text-4xl'>{data["Name"]}</h1>
  <p className='text-primary-200 md2:text-2xl text-center'>N${data["Price"]}/Night</p>
</div>
      </div>




<div className='pt-14 font-forum flex flex-col md2:flex-row md2:justify-between md2:px-8 lg:px-24'>

  <div className='mb-10 pl-10 md2:pl-0  mx-auto md2:mx-0'>
<h3 className="text-3xl text-center  mb-4  font-kameron md:text-4xl md2:text-3xl md2:text-left">Amenities</h3>

{amenities.map((amenity)=> (
  
  <div className='flex w-full '>
    {getIcon(amenity["Name"])}
     <p className='ml-6 my-2 text-xl pl-4'>{amenity["Name"]}</p>
     </div>

))}



  </div>

<div className='right-side text-center md2:pr-10 '>
  <h1 className='font-kameron  mb-4  text-3xl md:text-4xl md2:text-3xl md2:text-left '>Description</h1>
  <p className='px-6 mb-6 text-gray-100 text-left max-w-xl mx-auto sm:text-xl md:px-0 md:text-2xl md2:text-xl '>{data["Description"]} </p>
  <p className='px-6 text-gray-100 text-left max-w-xl mx-auto sm:text-xl md:text-2xl md:px-0 md2:text-xl'>{data["Additional_Info"]}</p>
  {/* <button className='bg-primary-200  text-slate-200 px-10 mb-14 py-2 md2:float-right  mt-6 md:px-12 md:py-3 text-lg md2:mt-12'>Book Room</button> */}
  <BookingForm />
  </div>

</div>

{/* OTHER ROOMS --------------------------------------------- */}
<div className='pb-10 md:px-10'>



  <h3 className='font-kameron text-3xl text-center mb-10 md2:text-left md:text-4xl md2:text-3xl'>Similar Rooms</h3>

  <div className='cards-container grid md2:grid-cols-2  xl:grid-cols-3 font-forum'>

{similarRooms.map(room =>(


<div className='shadow-xl  w-80 h-fit sm:w-96  relative pb-4 mb-7 mx-auto '>
<Link  to={`/rooms/${room["RoomID"]}`} state={room["RoomID"] } className='w-full'>
<img src={room["Image"]} alt="" onClick={onClickHandler}  className='h-64 w-full'/>

</Link>
 
  <span className=''>
  <button className='bg-primary-200  text-slate-200 px-7 sm:px-10 py-4 mr-2  absolute left-6 sm:left-8 top-56  '>N${room["Price"]}/Night</button>
  <button className='bg-primary-200  text-slate-200 px-7 sm:px-10 py-4  absolute right-6 sm:right-8 top-56   '>Book Now</button>
  </span>
<h3 className='mt-10 font-medium text-2xl ml-3'>{room["Name"]}</h3>
<hr  className=' border-primary-200  w-24 border my-4 ml-3'/>
<p className='text-gray-100 px-3'>{room["Description"]}</p>

<div className='text-primary-200 float-right flex mr-10'><Icon icon="material-symbols-light:person-outline" width="30" height="30"  /> {room["No_Of_Guests"]} guests</div>
</div>
))}

</div>



</div>

</div>

  ))}
 



  </section>
    <Footer/>
</>
}

export default Room