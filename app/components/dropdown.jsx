"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative inline-block text-left ">
        <div>
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 font-semibold text-gray-700 mr-5 focus:outline-none focus:ring "
          >
            <Image src="/menu.svg" width={30} height={30}/>
          </button>
        </div>
  
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-[#014164] ring-black ring-opacity-5 focus:outline-none ">
            <div className="py-1">
              <Link
                href="#"
                className="block px-4 py-2 text-sm"
              >
                Engineering day
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm"
              >
                Project Practicum
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm"
              >
                Project Practicum
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm"
              >
                Account
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default DropdownMenu;