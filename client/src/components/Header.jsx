import React, { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import SideHead from './SideHead'
import langImg from "../assets/img/lang.png"


const Header = () => {
    const [lang , setLang] =useState(true) 
    const [scrl , setScrl] = useState('')
    console.log(scrl);

    // console.log(lang);
    const ChangeLang = ()=>{
        setLang(x=>!x)
    }

    window.onscroll = ()=> setScrl(window.pageYOffset)
    
  return (
    <div   className={scrl<900 ?  'bg-slate-50 flex justify-between items-center px-5 top-0 w-full  z-100 shadow-xl' :  'bg-slate-400 flex justify-between items-center px-5 w-full h-12 transition-all  static top-0 left-0 z-100 shadow-xl'} >
        <Logo  />
        <Nav scrl={scrl} />
        <div  className='flex w-48 justify-between  items-center '>
        <div onClick={ChangeLang} className="w-6 h-6 cursor-pointer flex">
            <span className='mx-1'>{lang ? "English" : "العربية"}</span>
        <img src={langImg} alt="" />   
        </div>
        <SideHead />
        </div>

        
    </div>
  )
}

export default Header