import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // referensi untuk dropdown
  const { logout } = useLogout();

  // Menghandle klik di luar dropdown untuk menutupnya
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Menambahkan event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener saat komponen di-unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform transform bg-white border-r border-gray-200 lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-700">Admin Panel</h1>
        </div>
        <nav className="p-4 space-y-2">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-200"
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/add-item"
            className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-200"
          >
            Add Item
          </Link>
          {/* <Link
            to="/admin/users"
            className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-200"
          >
            Users
          </Link>
          <Link
            to="/admin/settings"
            className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-200"
          >
            Settings
          </Link>
          <Link
            to="/admin/reports"
            className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-200"
          >
            Reports
          </Link> */}
        </nav>
      </div>

      {/* Overlay untuk menutup sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full">
        {/* Header */}
        <header className="flex items-center justify-between p-4 h-20 bg-white border-b border-gray-200 ">
          <div>
            <button
              onClick={() => {
                console.log("setShowDown statu", sidebarOpen);
                setSidebarOpen(!sidebarOpen);
              }}
              className="text-gray-500 focus:outline-none lg:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navbar Content */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 focus:outline-none hover:text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V9a6 6 0 10-12 0v5c0 .379-.214.725-.595.895L4 17h5m2 4h4"
                ></path>
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                3
              </span>
            </button>

            <div className="relative flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/32"
                alt="User Avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={
                  () => {
                    setShowDropdown(!showDropdown);
                    console.log("setShowDown statu", showDropdown);
                  } // Toggle untuk menampilkan dropdown
                }
              />

              {/* Dropdown melayang */}
              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-[180px] w-40 bg-white rounded-lg shadow-lg py-2 z-10"
                >
                  <span className="block px-4 py-2 text-gray-700 font-medium">
                    John Doe
                  </span>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="px-4 py-2 bg-white rounded-lg shadow">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
