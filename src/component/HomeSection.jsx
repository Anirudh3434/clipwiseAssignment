import React, { useState } from 'react';
import food from '../assets/food.png';
import { GrNext } from "react-icons/gr";
import wave from '../assets/wavey-white.png';
import { IoCaretBackCircleSharp, IoCaretForwardCircleSharp } from "react-icons/io5";
import { CiDesktopMouse2 } from "react-icons/ci";

export default function HomeSection() {

  const product = [
    {
      id: 1,
      name: "Crystal Agate Phone Grip",
      price: '18.99$',
      image: food
    },
    {
      id: 2,
      name: "Crystal Agate Phone Grip",
      price: '13.99$',
      image: food
    },
    {
      id: 3,
      name: "Crystal Agate Phone Grip",
      price: '12.99$',
      image: food
    },
    {
      id: 4,
      name: "Crystal Agate Phone Grip",
      price: '17.99$',
      image: food
    }
  ];

  const [index, setIndex] = useState(0);
  const [imagePreview, setImagePreview] = useState(product[0].image);

  const handleImagePreview = (newIndex) => {
    setIndex(newIndex);
    setImagePreview(product[newIndex].image);
  };

  const handlePrevious = () => {
    const newIndex = (index === 0) ? product.length - 1 : index - 1;
    handleImagePreview(newIndex);
  };

  const handleNext = () => {
    const newIndex = (index === product.length - 1) ? 0 : index + 1;
    handleImagePreview(newIndex);
  };

  const scrollToProductSection = () => {
    const productSection = document.getElementById('product-section');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='Home-container' id="home-section">
      <div className='home-text-container'>
        <span className='welcome-text'>Welcome to</span>
        <span className='welcome-sub-text'>Pop Rock Crystal Shop!</span>
        <div className='welcome-info'>
          <p>Here you will find unique phone accessories, crystals, jewelry, and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
        </div>
        <div>
          <button className='home-show-now-button'>Shop now</button>
          <button className='about-button'>about us</button>
        </div>
      </div>

      <div className='product-image-slider-container'>
        <div className='image-preview'>
          <img className='home-image' src={imagePreview} alt="Product Preview" />
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span className='name'>{product[index].name} </span>
            -
            <span className='price'>${product[index].price}</span>
          </div>
        </div>

        <div className='slider'>
          <button className='controlButton' onClick={handlePrevious}><IoCaretBackCircleSharp /></button>
          <div className='bars'>
            {product.map((item, i) => (
              <span
                key={item.id}
                className={`bar ${i === index ? 'active' : ''}`}
              >
                •
              </span>
            ))}
          </div>
          <button className='controlButton' onClick={handleNext}><IoCaretForwardCircleSharp /></button>
        </div>
      </div>
      <div className='scroll-down-menu' onClick={scrollToProductSection}>
        <CiDesktopMouse2 className='mouse-icon' />
        <span className='scroll-down-text'>Scroll down</span>
      </div>
      <img className='wave' src={wave} alt="Wave" />
    </div>
  );
}
