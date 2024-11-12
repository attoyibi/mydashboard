import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center mt-[50px]">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Kelola Inventaris Anda dengan Mudah
            <span className="text-blue-600"> MyDashboard</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800">
            Sistem Manajemen Inventaris yang Efisien dan Terpercaya
          </p>

          {/* Buttons */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Link
              to="/login"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Get started
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            {/* <a
              href="#"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              Contact sales team
            </a> */}
          </div>
        </div>

        {/* Responsive Image Placeholder */}
        <div className=" w-full h-96 md:h-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero.jpeg"
            alt="Hero Section"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
