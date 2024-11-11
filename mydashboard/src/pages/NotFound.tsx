// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
            <p className="mt-4 text-lg">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 text-blue-500 hover:underline">
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
