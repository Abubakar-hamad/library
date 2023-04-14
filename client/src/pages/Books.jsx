import React, { useEffect } from 'react'
import { useState } from 'react'
import { college , med , eng , natural , mngment , edu } from '../data'
import bookImg from '../assets/img/bookImg.png' 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const Books = () => {
  const [coll , setColl] = useState('')
  let [ dep  , setDep] = useState('')
  let [ level  , setLevel] = useState(1)
  console.log(dep , 999);
  console.log(coll ,112);
  useEffect(()=>{
    if(coll === "كلية العلوم الطبية"){
      setDep(med)
    }
    if(coll === "كلية الهندسة"){
      setDep(eng)
    }
    if(coll === "كلية الموارد الطبيعية"){
      setDep(natural)
    }
    if(coll === "العلوم الإدارية"){
      setDep(mngment)
    }
    if(coll === "كلية التربية واللغات"){
      setDep(edu)
    }
  } , [ setDep , coll ]) 
 
  
  return (
    <div className=' container my-24 grid grid-flow-row-dense grid-cols-5 grid-rows-3 gap-5 h-96  '>
     <div className='col-span-1 grid gap-2 justify-center items-center p-2 border-l-4 h-96 border-blue-300 '>
      <select onChange={(e)=>setColl(e.target.value)}  className='w-48 bg-slate-100 focus:outline-none cursor-pointer' type="number">
      <option   hidden value="0">المجال</option>
        {
          college.map(item => <option className='rounded-md'  value={item.title} key={item.id}>{item.title}</option>)
        }
        </select>

        <select onChange={(e)=>setColl(e.target.value)}  className='w-48 bg-slate-100 focus:outline-none cursor-pointer' type="number">
        <option  hidden value="0">القسم</option>
        {
          dep ? dep.map(item => <option  value={item.title} key={item.id}>{item.title}</option>) : <option value="" >اختر الكلية</option>
        }
        </select>

        <div className="flex w-36 gap-3 ">
        <p>المستوى</p>
        <input className='w-24' type="range" id="rangenumber" defaultValue={1} onChange={(e)=>setLevel(e.target.value)} min="1" max="5"  oninput="range.value=value"></input>
        <p className='bg-slate-200  rounded-full '>{level}</p>
        </div>
        


      </div> 
   
      <div className='col-span-4 grid grid-cols-3 gap-3 overflow-scroll scrollbar-hide h-96  '>
       
          {/* books here */}

    {
      arr ? arr.map(i => <div key={i.id} className="overflow-hidden border-b-4 rounded-md w-48 h-48">
      <div className=" hover:-translate-y-1 transition-all h-40  cursor-pointer  relative">
            <img className='absolute w-full h-full inset-0 opacity-50' src={bookImg} alt="" />
              <div className="z-100 grid justify-center w-full bottom-0 left-1 absolute    text-md ">
                  <p className='text-center font-bold text-xl text-blue-600'>علوم الارض</p>
                  <div className="flex justify-around w-48 text-sm">
                      <p>كلية الهندسة</p>
                      |
                      <p>معمار</p>
                  </div>
              </div>
          <div className="level absolute top-5 text-center font-bold p-1 text-sm rounded-md left-0 bg-blue-500 text-white w-1/3   -rotate-45">
              السادس
          </div>
      </div>
  </div>)
  :
  ""
    }

   
          

      </div>
      
    </div>
  )
}

export default Books