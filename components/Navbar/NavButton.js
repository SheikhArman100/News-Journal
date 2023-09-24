//navbutton
"use client";

import { useState } from "react";
import { navItems } from "./NavItems";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavButton = () => {
  const [isActive, setIsActive] = useState(false);
  const currentRoute = usePathname();
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="md:hidden h-12 aspect-square flex flex-col items-center justify-center bg-gray-300 rounded-full gap-y-1"
      >
        <div
          className={`h-[0.15rem] w-6 bg-black transition-transform ${
            isActive ? "transform rotate-45 translate-y-1" : ""
          }`}
        />
        <div
          className={`h-[0.15rem] w-6 bg-black transition-transform ${
            isActive ? "transform -rotate-45 -translate-y-0.5" : ""
          }`}
        />
      </button>
      <div
        className={`md:hidden h-screen w-full fixed left-0 top-0 bg-black z-10 origin-top transition py-[2rem] px-8 flex flex-col ${
          isActive ? "scale-x-100 duration-500" : "scale-y-0 delay-500"
        } `}
      >
        <button
          onClick={() => setIsActive(!isActive)}
          className={`md:hidden h-12 w-12 flex flex-col items-center justify-center bg-gray-300 rounded-full gap-y-1 transition duration-500 delay-500 origin-center ${
            isActive ? "scale-100" : "scale-0"
          }`}
        >
          <div
            className={`h-[0.15rem] w-6 bg-black transition-transform ${
              isActive ? "transform rotate-45 translate-y-1" : ""
            }`}
          />
          <div
            className={`h-[0.15rem] w-6 bg-black transition-transform ${
              isActive ? "transform -rotate-45 -translate-y-0.5" : ""
            }`}
          />
        </button>
        <ul
          className={`flex-1 w-full  text-white flex flex-col items-center justify-center gap-y-3 transition delay-300 ${
            isActive ? "scale-100 duration-500" : "scale-0  "
          }`}
        >
          {navItems.map((data, index) => (
            <li key={index} >
              <button
                className={` text-4xl font-semiBold  ${
                  currentRoute === data.href
                    ? " text-accentColor border-b-4  border-accentColor "
                    : "hover:text-accentColor"
                }`}
                onClick={() => {
                  router.push(`${data.href}`);
                  setIsActive(false);
                }}
              >
                {data.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavButton;
