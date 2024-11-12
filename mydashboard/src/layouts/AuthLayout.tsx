// src/layouts/PublicLayout.js
import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar with 7/12 of the page width on large screens, hidden on medium and small screens */}
            <div className="hidden md:flex md:w-7/12 h-full bg-gray-100">
                <img
                    src="/login.jpeg" // Dummy image
                    alt="Sidebar Dummy"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Main content area - full width on small screens, 5/12 on medium screens */}
            <div className="w-full md:w-5/12 h-full flex items-center justify-center relative">
                {/* Back button */}
                <Link to="/" className="absolute top-4 left-4 px-3 py-1 text-gray-700 rounded-md hover:bg-gray-300 flex items-center space-x-1">
                    {/* Back icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </Link>

                {/* Responsive container for Outlet */}
                <div className="w-full max-w-none p-6 md:p-6 sm:p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
