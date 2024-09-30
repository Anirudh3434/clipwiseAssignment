import React, { useEffect, useState } from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";
import logo from '../assets/logo.png';
import icon from '../assets/cart.png';
import { useSelector } from 'react-redux';

export default function Header() {
  const [isScrolledPastHome, setIsScrolledPastHome] = useState(false);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const homeSection = document.getElementById('home-section'); // Assuming this is the id for the HomeSection component

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // If HomeSection is not in view (i.e., the user has scrolled past it), we change the state
          if (!entry.isIntersecting) {
            setIsScrolledPastHome(true); // User scrolled past HomeSection
          } else {
            setIsScrolledPastHome(false); // HomeSection is still in view
          }
        });
      },
      { threshold: 0 } // Trigger when even a small part of HomeSection is visible
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  return (
    <nav 
      className='navigation-bar' 
      style={{ backgroundColor: isScrolledPastHome ? '#7adcfe' : 'transparent' }} // Change background color
    >
      <div className='brand-logo'>
        <img src={logo} width={'150px'} />
      </div>

      <div className='navigation-menu'>
        <ul className='nav-links'>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Help</li>
        </ul>
        <div className='cart-icon'>
          <div className='cart-length'>
            {cart.length}
          </div>
          <img src={icon} width={'30px'} style={{ marginBottom: '2px', marginLeft: '5px' }} />
        </div>
      </div>
    </nav>
  );
}
