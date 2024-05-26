"use client"
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },

  {
    label: "Projects",
    href: "#",
  },

  {
    label: "Resume",
    href: "#",
  },

  {
    label: "Contacts",
    href: "#",
  },
];

function Header() {
  
  const [isActive,setIsActive] = useState(true);

  const isActiveClasses = `absolute top-[30px] left-[-50px] bg-[#333] w-[180px] py-[25px] ${isActive && 'hidden'} ` 
  
  return (
    <header className="w-full flex justify-center fixed top-0 h-16 lg:h-[125px] bg-white ">
      <div className="lg:w-[65%] flex w-full py-5 px-3 justify-between lg:py-10">
        <div className="">
          <h2 className="font-sans text-2xl lg:text-3xl">HARSH</h2>
        </div>
        <div className="flex relative items-center">
          <ul className={`${isActiveClasses} lg:static lg:w-[auto] lg:flex lg:bg-inherit lg:items-center lg:py-[0] `} >
            {navLinks.map((item: any,index:any) => (
              <li className={`px-[25px] ${navLinks.length == index +1 && 'border-b'} py-3 border-t border[rgba(119, 119, 125, .2)] lg:border-0 lg:p-2 `} key={index}>
                <a href={item.href}  className="text-[16px] text-white opacity-[0.7] lg:opacity-1 lg:text-[#77777d] lg:hover:text-[#000] lg:transition-all lg:ease-in-out lg:duration-500 lg:header-link lg:relative" >{item.label} </a>
              </li>
            ))}
          </ul>
        </div>
        <RxHamburgerMenu className="lg:hidden text-2xl cursor-pointer" onClick={() => setIsActive(!isActive)}/>
      </div>
    </header>
  );
}

export default Header;
