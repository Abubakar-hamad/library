import React from 'react'
import img from "../assets/img/logo.png"
const Logo = () => {
  return (
    <div className='w-24 h-24'>
        <img className='w-full h-full cursor-pointer' src={img} alt="" />
    </div>
  )
}

export default Logo