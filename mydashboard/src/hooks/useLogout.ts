// src/hooks/useLogout.ts
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        // Clear user data from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('email');

        // Perform any additional cleanup actions if needed (like resetting app state)

        // Redirect user to login or home page
        navigate('/'); // Adjust the route as needed
    };

    return { logout };
};
