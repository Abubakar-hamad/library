import React from 'react'

const College = ({title , img }) => {
  return (
    <div className=' cursor-pointer hover:shadow-xl text-center hover:bg-slate-50 hover:rounded-full hover:border m-5 transition-all'>
        <div className="text-xl  mb-6">{title}</div>
        <><img className='w-24 mx-auto ' src={img} alt="" /></>
        
    </div>
  )
}

export default College