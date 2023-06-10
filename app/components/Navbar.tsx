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
    <nav className='bg-gray-800 py-4'
  )
}

export default Navbar