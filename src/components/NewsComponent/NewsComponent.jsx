import React, { useState } from 'react'
import data from '../../assets/data.json'
import { Link } from 'react-router-dom'

function NewsComponent() {
    const news = data.news
 
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 pm:grid-cols-1 gap-5'>
       {news.map((item, index) =>(
      <Link to={item.path} className=' group p-5 rounded-lg bg-white' key={index}>
        <img loading='lazy' src={item.imageSrc} alt="" className=' rounded-lg group-hover:scale-105 duration-300 transform ease-out' />
        <h2 className='group-hover:text-yellow-600 text-lg font-semibold mt-2 '>{item.title}</h2>
      </Link>
      ))} 
   
    </div>
  )
}

export default NewsComponent
