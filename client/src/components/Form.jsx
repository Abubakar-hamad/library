import React from 'react'

const Form = ({type , placeholder , name}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default Form