import React from 'react'

const Btn = ({type , value}) => {
  return (
    <div>
       <input type={type} value={value}  className="bg-blue-300 p-2  rounded-lg cursor-pointer " />
    </div>
  )
}

export default Btn