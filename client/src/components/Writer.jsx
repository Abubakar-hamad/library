import React from 'react'
import { useTypewriter , Cursor } from "react-simple-typewriter";
const Writer = ({text1 , text2  , text3 , font}) => {
    const [x] = useTypewriter({
        words:[text1 , text2 , text3] ,
        loop:0 ,
        typeSpeed:120 , 
        deleteSpeed:50 ,
        delaySpeed:1500
    })
  return (
    <span>
        <span className={font}>{x}  <Cursor  /></span>
        
    </span>
  )
}

export default Writer