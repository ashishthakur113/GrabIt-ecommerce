import React from 'react'
import { FaStar  } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const  Star=({stars})=>{
  const ratingStar = Array.from({length:5} ,(val,index)=>{
    let number =index + 0.5;
    return(
        <span key={index}>
     {
        stars>=index+1 ?(
            < FaStar color='gold'/>
        ) : stars >=number ?(
            <FaStarHalfAlt color='gold'/>
        ) : (
            <FaRegStar color='gold'/>
        )}
        </span>
    );
  });

  return (
    <div className='flex'>
   {ratingStar }
    </div>
  )
}
export default Star;
