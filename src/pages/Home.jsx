import LandingPage from './landingPage';
import Banner2nd from '../assets/Banner2nd.mp4';
import Products from './product';
import ShopByCategory from '../Components/ShopByCategory';
import { useEffect } from 'react';



export default function Home() {
  const nameData = {
    name: 'GrabBit',
    subline: 'Your Shopping Destination',
  };
  
  useEffect(()=>{
    window.scrollTo({top:0 , behavior:"smooth"})
  })
  return (
    <div>
      <LandingPage myData={nameData} />
      <ShopByCategory/>
    <div className="w-full flex justify-center px-4 sm:px-8 mt-10 my-12 ">
   <div className="relative w-full max-w-6xl h-[160px] sm:h-[200px] md:h-[350px]  overflow-hidden shadow-xl">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-sm"
      >
      <source src={Banner2nd} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

   
   
  </div>
</div>

  <Products />
    </div>
  );
}
