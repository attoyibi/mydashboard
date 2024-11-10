import { useState } from 'react';
import axios from 'axios';

interface LoginResponse {
    status: string;
    code: number;
    message: string;
    data: any;
    error: any;
}

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [serverError, setServerError] = useState<string>('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setServerError('');
        setErrors({});

        try {
            const response: LoginResponse = await axios.post(
                'http://localhost:3000/api/v1/auth/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json', // Set content type to application/json
                    },
                }
            );
            console.log("respond = ", response);
            if (response.status === 'fail') {
                if (response.code === 400) {
                    // Validation error
                    const errorField = response.error.field;
                    setErrors((prev) => ({ ...prev, [errorField]: response.error.issue }));
                } else if (response.code === 404) {
                    // User not found
                    setServerError(response.error.message);
                } else if (response.code === 401) {
                    // Invalid credentials
                    setServerError(response.error.message);
                }
            } else if (response.status === 'success') {
                // Handle success, e.g., save token, redirect user
                const { token, userId, email } = response.data;
                localStorage.setItem('token', token); // Save the token
                localStorage.setItem('userId', userId.toString()); // Save userId if needed
                localStorage.setItem('email', email); // Optionally save email
                // Redirect or handle post-login tasks
            }
        } catch (error) {
            setServerError('An unexpected error occurred. Please try again later.' + error);
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        password,
        rememberMe,
        loading,
        errors,
        serverError,
        handleEmailChange,
        handlePasswordChange,
        handleRememberMeChange,
        handleSubmit,
    };
};
