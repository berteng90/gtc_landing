"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const NavBar = () => {
  return (
    <div className="overflow-x-hidden">
      <header className="text-green-500 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 lg:mx-auto lg:flex-row lg:items-center">
        <a
          href="#"
          className="flex items-center whitespace-nowrap text-xl font-black"
        >
          <span className="mr-2 w-8">
            <Image
              width={50}
              height={50}
              src="/Goodfarms Logo.svg"
              alt="GoodFarms Logo"
            />
          </span>
          GoodFarms Trading Corp.
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-5 cursor-pointer lg:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-600 transition hover:text-green-500 focus:text-green-500 focus:outline-none "
                href="#"
              >
                Services
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-600 transition hover:text-green-500  focus:text-green-500 focus:outline-none "
                href="#"
              >
                Careers
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-600 transition hover:text-green-500  focus:text-green-500 focus:outline-none "
                href="#"
              >
                About
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-600 transition hover:text-green-500  focus:text-green-500 focus:outline-none "
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <hr className="mt-4 w-full lg:hidden" />
          <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
            <a
              href="#"
              title=""
              className="whitespace-nowrap rounded-xl bg-green-500 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 hover:bg-amber-300"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
