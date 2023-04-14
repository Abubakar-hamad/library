import React from 'react'
import { NavLink  } from 'react-router-dom'

const Nav = ({scrl}) => {
  console.log(scrl , "from Nav");

  return (
<div className='nav  grid grid-cols-2  items-center text-lg'>

<li className='ml-5'>
<NavLink to='/'>الرئيسة</NavLink>
</li>
<li className='ml-5'>
    <NavLink onClick={()=>window.scrollTo(0 , 880)} to='/' > الكليات</NavLink>
</li>
<li className='ml-5'>
    <NavLink to='/departments' > الاقسام</NavLink>
</li>
<li className='ml-5'>
    <NavLink to='/books' > الكتب</NavLink>
</li>

<li className='ml-5'>
    <NavLink to='/' > عن الجامعة</NavLink>
</li>




</div>
  )
}

export default Nav