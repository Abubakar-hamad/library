import React from 'react'
import Card from '../components/Card'
import Depart from '../components/Depart'
import {med , eng  , mngment  , edu  , natural} from '../data'
const Departments = () => {
  return (
    <div className='container mt-12 mx-auto'>

        <Depart title={"كلية العلوم الطبية"} card={med.map(item => <Card key={item.id} title={item.title} text={item.text} /> )}/>
        <Depart title={"كلية الهندسة"} card={eng.map(item => <Card key={item.id} title={item.title} text={item.text} /> )}/>
        <Depart title={" الموارد الطبيعية"} card={natural.map(item => <Card key={item.id} title={item.title} text={item.text} /> )}/>
        <Depart title={"كلية العلوم اﻹدارية"} card={mngment.map(item => <Card key={item.id} title={item.title} text={item.text} /> )}/>
        <Depart title={"كلية التربية واللغات"} card={edu.map(item => <Card key={item.id} title={item.title} text={item.text} /> )}/>
        
    </div>
  )
}

export default Departments