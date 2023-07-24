"use client"
import React from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
const navItems = [
  {
    title: "News",
    href: "/",
  },
  {
    title: "Opinion",
    href: "/Opinion",
  },
  {
    title: "Sport",
    href: "/Sport",
  },
  {
    title: "Culture",
    href: "/Culture",
  },
  {
    title: "Lifestyle",
    href: "/Lifestyle",
  },
];

const NavItems = () => {
    const currentRoute = usePathname();
  return (
    <>
      <ul className="hidden md:flex justify-center gap-x-10 border-b-2 border-gray-400 w-full py-2">
        {navItems.map((data, index) => 
            
              <li key={index}><Link href={data.href} className={`py-2 text-sm font-semibold  ${currentRoute===data.href?" text-accentColor border-b-4  border-accentColor ":"hover:text-accentColor"}`}>{data.title}</Link></li>
          
          )}

      </ul>
    </>
  );
};

export default NavItems;
