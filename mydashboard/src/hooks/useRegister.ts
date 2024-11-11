// src/hooks/useRegisterForm.js
import { useState } from 'react';
import { registerUser } from '../services/apiService'; // Import the register function
import { useNavigate } from 'react-router-dom';
const useRegister = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        rememberMe: false,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Track loading state
    const [registerError, setRegisterError] = useState(null); // Track register error message
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.username) newErrors.username = 'Username is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            setRegisterError(null); // Clear previous errors
            try {
                const response = await registerUser(formData);
                if (response.status === 'success') {
                    // Handle successful registration, e.g., redirect user, show success message
                    alert("Registration successful! Click 'OK' to go to the login page.");

                    console.log('Registration successful:', response.data);
                    navigate("/login");
                }
            } catch (error) {
                setRegisterError(error.response?.data?.message || 'Registration failed');
            } finally {
                setLoading(false);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        loading,
        registerError,
    };
};

export default useRegister;
