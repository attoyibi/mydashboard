// src/components/Register.js
import React from 'react';
import useRegister from '../hooks/useRegister';
import usePasswordVisibility from '../hooks/usePasswordVisibility';

const Register = () => {
    const { formData, errors, handleChange, handleSubmit, loading, registerError } = useRegister();
    const { isVisible, toggleVisibility } = usePasswordVisibility();

    return (
        <div className="mt-7 bg-white rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                        Already have an account?{' '}
                        <a
                            className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                            href="/login"
                        >
                            Sign in here
                        </a>
                    </p>
                </div>

                <div className="mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-y-4">
                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="block text-sm mb-2 dark:text-white">
                                    Username
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700"
                                        required
                                    />
                                </div>
                                {errors.username && (
                                    <p className="text-xs text-red-600 mt-2">{errors.username}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                                    Email address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700"
                                        required
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-xs text-red-600 mt-2">{errors.email}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
                                    Password
                                </label>
                                {/* <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700"
                                        required
                                    />
                                </div> */}
                                <div className="flex relative">
                                    <input
                                        type={isVisible ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-neutral-400"
                                    >
                                        {isVisible ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 4.5c-4.68 0-8.84 2.91-10.43 7.18-.05.15-.05.31 0 .46 1.6 4.27 5.76 7.18 10.43 7.18s8.83-2.91 10.43-7.18c.05-.15.05-.31 0-.46C20.83 7.41 16.67 4.5 12 4.5zm0 12c-2.9 0-5.45-1.66-6.88-4.5 1.42-2.83 3.97-4.5 6.88-4.5s5.45 1.66 6.88 4.5c-1.42 2.83-3.97 4.5-6.88 4.5z" />
                                                <circle cx="12" cy="12" r="1.5" />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19C7.82 19 3.94 15.82 2.1 12A10.94 10.94 0 0 1 4.06 6.06M1 1l22 22" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-xs text-red-600 mt-2">{errors.password}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm mb-2 dark:text-white">
                                    Confirm Password
                                </label>
                                {/* <div className="relative">
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700"
                                        required
                                    />
                                </div> */}
                                <div className="flex relative">
                                    <input
                                        type={isVisible ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-neutral-400"
                                    >
                                        {isVisible ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 4.5c-4.68 0-8.84 2.91-10.43 7.18-.05.15-.05.31 0 .46 1.6 4.27 5.76 7.18 10.43 7.18s8.83-2.91 10.43-7.18c.05-.15.05-.31 0-.46C20.83 7.41 16.67 4.5 12 4.5zm0 12c-2.9 0-5.45-1.66-6.88-4.5 1.42-2.83 3.97-4.5 6.88-4.5s5.45 1.66 6.88 4.5c-1.42 2.83-3.97 4.5-6.88 4.5z" />
                                                <circle cx="12" cy="12" r="1.5" />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19C7.82 19 3.94 15.82 2.1 12A10.94 10.94 0 0 1 4.06 6.06M1 1l22 22" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-xs text-red-600 mt-2">{errors.confirmPassword}</p>
                                )}
                            </div>

                            {/* Remember me */}
                            {/* <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="mt-0.5 border border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700"
                                />
                                <label htmlFor="rememberMe" className="ml-3 text-sm text-gray-500 dark:text-neutral-400">
                                    Remember me
                                </label>
                            </div> */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-4 mt-4 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </button>
                            {registerError && <span>{registerError}</span>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
