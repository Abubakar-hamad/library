import React, { useState } from 'react'
import down from '../assets/img/down.png'
import lup from '../assets/img/lup.png'
const Depart = ({title , card}) => {
  const [drop  , setDrop] = useState(false)

  return (
    <div data-aos="flip-up"  className='mb-8'>
       <div className="heder flex items-center">
       <h1 className='col-1 w- text-xl w-48 ' > {title}</h1> 
       <div className='col-4 w-full h-1 bg-slate-400'></div>
       <div onClick={()=>setDrop((x)=> !x)} className=" h-12 w-12  relative cursor-pointer">
       {drop ?
        <img src={lup} className="h-7 col-1 absolute bottom-2.5" alt="" />
        :
        <img src={down} className="h-7 col-1 absolute bottom-0" alt="" />   
        }
       </div>

       </div>
       {drop ?
        <div data-aos="zoom-in"  className="grid grid-cols-3 gap-6 my-10 ">
        {card}
       </div>
       :
       ""   
    }
    </div>
  )
}

export default Depart