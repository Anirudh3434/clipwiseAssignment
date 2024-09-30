import React from 'react'
import food from '../assets/food.png';
export default function ProductShow() {
  return (
    <div className='product-shown-container'>
        <div className='circle-1'/>
        <div className='circle-2'/>
        <img src={food} alt="Food" className='product-image' />
    </div>
  )
}
