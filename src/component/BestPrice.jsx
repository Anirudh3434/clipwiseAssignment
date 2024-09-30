import React from 'react';
import wave from '../assets/wavey1.png'
import ProductShow from './ProductShow';

export default function BestPrice() {
  return (
    <div className='best-price-container'>
        <img className='wave1' src={wave}/>
      <div className='best-price-text-container'>
        <span className='best-price-title'>BEST PRICE</span>
        <span className='best-price-product-name'>Agate Phone Grip</span>
        <div className='best-price-amount-container'>
          <span className='discounted-price'>12.99$</span>
          <span className='original-price'>19.50$</span>
        </div>
        <p className='best-price-description'>
          These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
        </p>
        <button className='buy-now-button'>Buy Now</button>
      </div>
   <ProductShow/>
    </div>
  );
}
