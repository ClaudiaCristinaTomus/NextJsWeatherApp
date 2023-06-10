"use client"
import React from 'react'
import Link from 'next/link'
import { NavLink } from 'react-router-dom';

interface NavLink {
  label: string;
  url: string;
}

const navLinks : NavLink[] = [
  { label: "Today's weather", url: "/" },
  { label: "Find Weather", url: "/search" }, 
  { label: "get in touch", url: "/contact" }
];

const Navbar: React.FC = () => {
  return (
    <>
    <div className='bg-gray-800 py-4'>
      <div className='container mx-auto px-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-white text-2xl font-semibold'>
          Weather<span className='text-yellow-500'></span>
        </h1>
        <ul className='flex items-center space-x-4 md:space-x-8'>
          {navLinks.map((link,index)=>(
            <li key={index}>
              <Link
              href={link.url}
              className='text-white hover:text-yellow-500'
              {link.label}>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar