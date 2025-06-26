import React from 'react'
import SearchIcon from '@/assets/SVG/searchIcon.jsx'

export default function Navbar() {
  return (
    <div className='p-6 flex items-center justify-between'>
      <p className='text-bold text-[32px]'>Restaurant</p>
      <div className='basis-[40%] border rounded-[8px] bg-[#fff] px-2 py-1 flex items-center gap-4'>
        <SearchIcon className='w-6 h-6'/>
        <input type="text" placeholder='search....' className='w-full border-0 outline-none placeholder:text-lg placeholder:text-semibold'/>
      </div>
    </div>
  )
}
