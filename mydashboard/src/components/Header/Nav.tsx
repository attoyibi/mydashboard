import React, { useState } from "react";
import { Collapse } from "./Collapse";
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <nav className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex items-center justify-between">
        <a
          className="flex-none font-semibold text-xl text-black"
          href="#"
          aria-label="Brand"
        >
          Brand
        </a>

        <div className="md:hidden">
          <button
            type="button"
            className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100"
            onClick={toggleCollapse}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="hs-header-classic"
          >
            <svg
              className={`hs-collapse-open:hidden size-4 ${
                isOpen ? "hidden" : "block"
              }`}
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
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className={`hs-collapse-open:block shrink-0 hidden size-4 ${
                isOpen ? "block" : "hidden"
              }`}
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
      <Collapse isOpen={isOpen} />
    </nav>
  );
};
