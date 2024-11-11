// src/hooks/useLogin.ts
import { useState } from 'react';
import { loginUser } from '../services/apiService';
import { LoginResponse } from '../types/authTypes';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [serverError, setServerError] = useState<string>('');
    const navigate = useNavigate(); // Initialize useNavigate

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
            const response: LoginResponse = await loginUser(email, password);
            if (response.status === 'fail') {
                if (response.code === 400) {
                    const errorField = response.error.field;
                    setErrors((prev) => ({ ...prev, [errorField || '']: response.error.issue || '' }));
                } else {
                    setServerError(response.error.message || 'An error occurred');
                }
            } else if (response.status === 'success') {
                const { token, userId, email } = response.data;
                if (token) localStorage.setItem('token', token);
                if (userId) localStorage.setItem('userId', userId.toString());
                if (email) localStorage.setItem('email', email);

                navigate('/dashboard'); // Replace '/dashboard' with your target path
            }
        } catch (error) {
            setServerError(`An unexpected error occurred: ${error}`);
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
