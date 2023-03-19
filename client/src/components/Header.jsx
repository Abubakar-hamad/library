import React from 'react'
import { NavLink  } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {
  return (
    <div className=' bg-slate-200 grid  grid-cols-3 p-3'>
        <Logo  />
    <div className='nav  grid grid-cols-2  items-center text-lg'>

        <li className='ml-5'>
        <NavLink to='/'>الرئيسة</NavLink>
        </li>
        <li className='ml-5'>
            <NavLink to='/' > الكليات</NavLink>
        </li>
        <li className='ml-5'>
            <NavLink to='/' > الاقسام</NavLink>
        </li>
        <li className='ml-5'>
            <NavLink to='/' > الكتب</NavLink>
        </li>

        <li className='ml-5'>
            <NavLink to='/' > عن الجامعة</NavLink>
        </li>



        
    </div>
    </div>
  )
}

export default Header