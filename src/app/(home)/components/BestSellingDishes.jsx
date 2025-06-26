'use client'
import React from 'react'
import { useState } from 'react';
import FoodCard from './FoodCard';
import item1 from '@/assets/images/foodItem-1.png';
import item2 from '@/assets/images/foodItem-2.png';
import item3 from '@/assets/images/foodItem-3.png';
import item4 from '@/assets/images/foodItem-4.png';
import item5 from '@/assets/images/foodItem-5.png';
import item6 from '@/assets/images/foodItem-6.png';

function BestSellingDishes() {
    const [activeFilter, setActiveFilter] = useState('All');
  const foodItems = [
    { id: 1, name: 'Salad Fry', image: item1, category: 'Breakfast', price: '$230', rating: 5 },
    { id: 2, name: 'Chicken Breast', image: item2, category: 'Lunch', price: '$180', rating: 4 },
    { id: 3, name: 'Veggie Salad', image: item3, category: 'Dinner', price: '$150', rating: 5 },
    { id: 4, name: 'Fruit Bowl', image: item4, category: 'Breakfast', price: '$120', rating: 3 },
    { id: 5, name: 'Chicken Roll', image: item5, category: 'Lunch', price: '$200', rating: 4 },
    { id: 6, name: 'Pasta', image: item6, category: 'Dinner', price: '$170', rating: 5 },
  ];

  return (
    <div className='container py-6 flex flex-col gap-6'>
        <div className='flex flex-col items-center gap-2 w-[50%] mx-auto text-center'>
            <h1 className='text-4xl leading-[120%] font-bold text-[#1F1F1F]'>Our best Seller Dishes</h1>
            <p className='text-lg leading-[120%] text-[#5C5C5C]'>Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.</p>
        </div>
      {/* Filter Navigation */}
      <div className="grid grid-cols-2 gap-2 my-3">
        <div className="basis-[60%] flex items-center gap-2">
        {['All', 'Breakfast', 'Lunch', 'Dinner'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 border rounded-[45px] cursor-pointer ${
              activeFilter === filter 
                ? 'bg-[#2C2C2C] text-white' 
                : 'bg-white text-[#000000] border-[#BABABA]'
            }`}
          >
            {filter}
          </button>
        ))}
        </div>
        <div className="basis-[40%] flex justify-end gap-2 mt-2">
          <button className="px-4 py-2 bg-[#2C2C2C] text-white rounded-full">
            Add Food
          </button>
          <button className="px-4 py-2 bg-[#2C2C2C] text-white rounded-full">
            Add Category
          </button>
        </div>
      </div>

      {/* Food List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodItems.map((item) => (
            <FoodCard
              key={item?.id}
              name={item?.name}
              image={item?.image}
              category={item?.category}
              price={item?.price}
              rating={item?.rating}
            />
          ))}
        </div>
    </div>
  )
}

export default BestSellingDishes