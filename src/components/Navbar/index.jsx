import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Icons/react-logo.svg';
// import styles from './navbar.module.css'


const index = () => {
  const [isActive, setIsActive] = useState(false);
  return (

    <nav className="bg-white border-gray-200 border-b sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowraptext-black">React Templete</span>
        </NavLink>
        <button  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
            <li>
              <NavLink className={({ isActive }) =>  isActive ? 'text-red-500' : 'text-black' } to="/" >Home</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) =>  isActive ? 'text-red-500' : 'text-black' } to="/about-us" >About Us</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) =>  isActive ? 'text-red-500' : 'text-black' } to="/contact-us" >Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default index;
