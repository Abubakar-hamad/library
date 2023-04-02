import React, { useState } from 'react'
import Writer from '../components/Writer'
import img from '../assets/img/img.jpeg'
import Card from '../components/Card'
import std from '../assets/img/std.png'
import bok from '../assets/img/bok.png'
import up from '../assets/img/up.png'
import eng from '../assets/img/eng.png'
import dr from '../assets/img/dr.png'
import farm from '../assets/img/farm.png'
import lange from '../assets/img/lange.png'
import eco from '../assets/img/eco.png'
import College from '../components/College'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import { A11y, EffectCards , EffectFade, Navigation, Pagination, Scrollbar   } from "swiper";
import Btn from '../components/Btn'

const Home = () => {
  const [scrl , setScrl] = useState("") 
  window.onscroll = ()=> setScrl(window.pageYOffset)
   
  return (
    <div className='container mt-12 mx-auto overflow-hidden scroll-smooth relative '>
      <div  className='grid grid-cols-3 my-4'>
        <div className="right w-full h-96 grid items-center justify-center ">
          <Writer  font="text-4xl rounded-md text-blue-800 shadow-xl p-2" text1={" نحن معك اين ما كنت"} text2={" كل ما تريده تجده هنا"} text3={"حمل كتبك اﻵن"} />
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" className="rounded-xl col-span-2 ">
          <img className=' rounded-md' src={img} alt="" />
          
        </div>

      </div>

      <div data-aos="fade-down" className='grid grid-cols-3 gap-6 rounded-md my-12 p-12 rtl' >
      <Card n={1249} icon={bok} title="الكتب " text={"اكثر من 1000 كتاب .. يمكنك الوصول اليه في اي وقت"}/>
      <Card n={764} icon={std} title="  الدارسين" text={"انضم لمجتمع الدارسين وشارك المعلومات  "}/>
      <div className="more mt-2 shadow-sm p-2">
        <p className='text-4xl text-blue-700'>تابع نجاحات زملائك لتحفيزك</p>
        <p className='mt-12 text-xl'> شارك تجاربك العملية .. واستفد من خبرات غيرك </p>

      </div>
      </div>

    <div className="text-center container p-4 ">
    <div className="z-1 ">
    <p className='text-right bg-gradient-to-r from-cyan-50 to-white my-4 p-5 text-4xl font-bold  text-blue-700 rounded-lg'>الكليات</p>
    <Swiper data-aos="zoom-out"
      className='relative'
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='p-7' ><College title={"كلية العلوم الطبية"} img={dr}/></SwiperSlide>
      <SwiperSlide className='p-7' ><College title={"كلية الهندسة"} img={eng} /></SwiperSlide>
      <SwiperSlide className='p-7' ><College title={"كلية الموارد الطبيعية"} img={farm} /></SwiperSlide>
      <SwiperSlide className='p-7' ><College title={" العلوم الإدارية"} img={eco} /></SwiperSlide>
      <SwiperSlide className='p-7' ><College title={" كلية التربية واللغات"} img={lange} /></SwiperSlide>
      
    </Swiper>
    </div>
    </div>

        {scrl >800 ? 
          <div className=' bottom-1 right-2 z-20 hover:scale-125 transition-all delay-100 cursor-pointer flex items-center justify-center rounded-full w-12 h-12 fixed bg-blue-300 ' onClick={()=>window.scrollTo(10  , 0)}>
              <img className='h-8 w-8 ' src={up} alt="" />
          </div>
          :
          <>
          </>
          }

    </div>
  )
}

export default Home