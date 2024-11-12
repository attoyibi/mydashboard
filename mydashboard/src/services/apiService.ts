// src/services/apiService.ts
import api from './axiosInstance';
import { LoginResponse } from '../types/authTypes';
import { RegisterResponse } from '../types/authTypes'; // Import new RegisterResponse type

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/login', { email, password });
    console.log("response login user= ", response);
    return response.data;
};
// Register user
export const registerUser = async (formData: { email: string; password: string; username: string; rememberMe: boolean }) => {
    const response = await api.post<RegisterResponse>('/auth/register', formData);
    return response.data;
};