// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import "./Navbar.css"; // 일반 CSS 파일 임포트

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // 메뉴 링크 정의
  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "Our services" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ];

  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5xxx py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <h2 className="text-black dark:text-white font-bold text-2xl">
                Company
              </h2>
            </div>
          </button>
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              {menuLinks.map((link) => (
                <li
                  key={link.label}
                  className=" hover:text-blue-500 hover:w-fit transition-all duration-100 ease-linear"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <button className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
              Sign up
            </button>
            <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
              Login
            </button>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-slate-200 dark:text-white"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-blue-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
            isOpen ? "slide-in" : "slide-out"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-4">
            <button onClick={closeMenu} className="absolute top-2 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-4 text-base font-bold text-black/60 dark:text-white">
              {menuLinks.map((link) => (
                <li
                  key={link.label}
                  className=" hover:text-blue-500 hover:w-fit transition-all duration-100 ease-linear"
                >
                  <Link href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* 로그인 및 사인업 버튼 추가 */}
            <div className="flex flex-col space-y-4 mt-4 absolute bottom-4 left-4 right-4">
              <Link
                href="#"
                className="flex items-center justify-center px-6 py-2.5 font-semibold border border-gray-300 text-black dark:text-white"
              >
                Sign up
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* 딤 배경 */}
        {isOpen && (
          <div
            className={`menu-overlay show`}
            onClick={closeMenu} // 딤 클릭 시 메뉴 닫기
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
