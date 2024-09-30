import React from 'react'
import food from '../assets/food.png'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slice';

export default function ProductSection() {
    const products = [
        {
          id: 1,
          name: "Crystal Agate Phone Grip",
          price: '18.99$',
          image: food
        },
        {
          id: 2,
          name: "Crystal Agate Phone Grip",
          price: '18.99$',
          image: food
        },
        {
          id: 3,
          name: "Crystal Agate Phone Grip",
          price: '18.99$',
          image: food
        },
        {
          id: 4,
          name: "Crystal Agate Phone Grip",
          price: '18.99$',
          image: food
        },
        {
            id: 5,
            name: "Crystal Agate Phone Grip",
            price: '18.99$',
            image: food
          },
          {
            id: 6,
            name: "Crystal Agate Phone Grip",
            price: '18.99$',
            image: food
          },
          {
            id: 7,
            name: "Crystal Agate Phone Grip",
            price: '18.99$',
            image: food
          },
          {
            id: 8,
            name: "Crystal Agate Phone Grip",
            price: '18.99$',
            image: food
          },

      ];

const dispatch = useDispatch()

const addCart=(product)=>{
  dispatch(addProduct(product))
}

  return (
    <div className='product-section-container' id='product-section'>
        <h1>All product</h1>
        <div className='product-sorting-container'>
            <div className='filter-container'>
                <span>Filter:</span>
                <select>
                    <option value="all">All</option>
                    <option value="new">New</option>
                    <option value="popular">Popular</option>
                </select>

            </div>

            <div className='filter-container'>
                <span>Sort:</span>
                <select>
                    <option value="all">All</option>
                    <option value="new">Best Selling</option>
                    <option value="popular">Top rated</option>
                </select>

            </div>
</div>

  <div className='product-show-container'>
  {
    products.map((product) => (
        <div key={product.id} className='product-container'>
            <div className='product-image-container'>
                <img src={product.image} alt={product.name} width={'200px'}/>
            </div>
            <div className='product-info-container'>
                <span>{product.name}</span>
                <p>{product.price}</p>
                
            </div>
            <button onClick={()=>addCart(product)} className='buy-now-button'>Buy Now</button>
            </div>
            
    ))
   }
  </div>

    </div>
  )
}
