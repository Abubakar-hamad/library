import React from 'react'
import {useSpring , animated} from "react-spring"
function Num({n}) {
    const {number}  = useSpring({
        from:{number:0} , 
        number: n  ,
        delay:1000 ,
        config:{mass:10 , tension:20 , friction:10} ,
    }) ;
    return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
}

const Card = ({icon , title  , text , n}) => {
  return (
    <div className='border-spacing-1 shadow-xl  bg-slate-100  grid rounded-md justify-center items-center'>
        <div className="hover:scale-110 transition-all duration-700 delay-100 p-2">
        <div className="icon my-5 "><img className='mx-auto ' src={icon} alt="" /></div>
        <div className="text-center text-3xl font-bold text-slate-700 ">{title}</div>
        {n ? <div className="text-center text-2xl text-slate-400  border-blue-700"><Num n={n} /></div> : ''}
        <div className="text mt-5 p-3 text-center text-sm">{text}</div>
        </div>
    </div>
  )
}

export default Card