import { useState } from 'react';

function usePasswordVisibility() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return { isVisible, toggleVisibility };
}

export default usePasswordVisibility;
