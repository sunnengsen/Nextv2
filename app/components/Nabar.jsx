"use client"
import Drop from './dropdown'
import Image from 'next/image';
import Link from 'next/link';



export default function Navbar() {
  return (
    <div className="bg-[#014164] h-20">
      
      <div className="Desktop text-white flex h-20 justify-between items-center hidden md:flex mr-5 ml-5">
        <div>
          <Image src="/logoFE.webp" width={50} height={50}/>
        </div>
        <div className="flex justify-around w-2/2 focus:outline-none focus:ring uppercase">
      <Link className=" hover:bg-white hover:text-black pr-2 pl-2 pt-5 pb-5 rounded-lg transition ease-in-out delay-50" href=" ">Engineering day</Link>
      <Link className=" hover:bg-white hover:text-black pr-2 pl-2 pt-5 pb-5 rounded-lg transition ease-in-out delay-50" href="https://www.google.com">Project Practicum</Link>
      <Link className=" hover:bg-white hover:text-black pr-2 pl-2 pt-5 pb-5 rounded-lg transition ease-in-out delay-50" href="https://www.google.com">Defence</Link>
      <Link className=" hover:bg-white hover:text-black pr-2 pl-2 pt-5 pb-5 rounded-lg transition ease-in-out delay-50" href="https://www.google.com">Account</Link>
        </div>
      </div>
      <div className="Mobile text-white flex h-20 items-center ml-5 justify-between md:hidden">
      <Image src="/logoFE.webp" width={50} height={50}/>
        <Drop/>
      </div>
      

    </div>
    
  );
}
