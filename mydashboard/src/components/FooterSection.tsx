import React from "react";
// import useDarkMode from "../hooks/useDarkMode"; // Import the custom hook

const FooterSection = () => {
  // const { darkMode, toggleDarkMode } = useDarkMode(); // Use the hook

  return (
    <footer className="dark:bg-darkBackground px-4 sm:px-6 lg:px-8 mt-5">
      <div className=" w-full  mx-auto py-6 border-t border-gray-200">
        <div className=" max-w-[85rem] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-gray-600 dark:text-backgroundPrimary">
              © {new Date().getFullYear()} Muchson.
            </p>
          </div>

          {/* List */}
          <ul className="flex flex-wrap items-center">
            <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400">
              <a
                className="dark:text-backgroundPrimary text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                href="https://www.linkedin.com/in/muhammad-muchson-attoyibi-7024911b8/"
              >
                LinkedIn
              </a>
            </li>
            <li className="inline-block pe-4 text-xs">
              <a
                className="dark:text-backgroundPrimary text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                href="https://github.com/attoyibi/curhat-ai"
              >
                Github
              </a>
            </li>

            {/* Dark Mode Toggle */}
            {/* <li className="inline-block">
              <button
                type="button"
                onClick={toggleDarkMode} // Apply toggleDarkMode function here
                className="relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              >
                <span className="sr-only">{darkMode ? "Light Mode" : "Dark Mode"}</span>
                {darkMode ? (
                  <svg
                    className="shrink-0 size-3.5"
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
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                ) : (
                  <svg
                    className="shrink-0 size-3.5"
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
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                )}
              </button>
            </li> */}
          </ul>
          {/* End List */}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
