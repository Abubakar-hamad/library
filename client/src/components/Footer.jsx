import React from 'react'
import Logo from '../assets/img/logo.png'
import face from '../assets/img/facebook.png'
import link from '../assets/img/link.png'
import twitter from '../assets/img/twitter.png'
const Footer = () => {
  return (
    <div className='bg-slate-900 text-white h-72 w-full p-5 mt-24 grid grid-cols-4 justify-center items-center ' >
        <div className=" pb-6  h-48 log grid  justify-center items-center text-center">
        <img className='w-36 h-36 mx-auto' src={Logo} alt="" />
        <p className='px-3 text-md'>موقع الجامعة  .. معرف لاقسام وكليات الجامعة وتوفير الكتب والبحوث للدارسين</p>
        </div>
        <div className="email   h-48 grid  justify-between items-center text-center">
            <p className='h-36 flex items-center justify-center font-bold text-xl'>كن على اطلاع باحدث  الكتب و البحوث</p>
            <div className=" flex justify-center items-center gap-5">
                <input className='p-1 rounded-md text-black font-bold text-left ' type="text" />
                <input className='bg-green-700 rounded-md p-2 font-bold cursor-pointer hover:scale-105 hover:opacity-100 opacity-70 transition-all ' value="تأكيد" type="submit" />
            </div>

        </div>

        <div className="flowus grid  text-center justify-center items-center text-white">
            <p className='h-36 flex justify-center items-center font-bold text-xl' > يمكنك متابعة منصاتنا</p>
            <div className="flex h-12 justify-between items-center ">
                <img className='h-10 m-auto cursor-pointer  transition-all hover:animate-none animate-bounce  ' src={face} alt="" />
                <img className='h-10 m-auto cursor-pointer  transition-all hover:animate-none animate-bounce  ' src={twitter} alt="" />
                <img className='h-10 m-auto cursor-pointer  transition-all hover:animate-none animate-bounce  ' src={link} alt="" />
            </div>
        </div>

        <div className="contact h-48 grid  justify-center items-center ">
            <p className='h-36 flex items-center justify-center font-bold text-xl'> تواصل مباشر</p>
            <div className="conta grid justify-center items-center gap-2">
                <p className='rtl text-left'> 789 456 123 249 +</p>
                <input className='bg-green-700 rounded-md p-2 font-bold animate-pulse cursor-pointer hover:scale-105 hover:opacity-100 opacity-80 transition-all ' type="submit" value="عبر الايميل" />
            </div>
        </div>
    </div>
  )
}

export default Footer