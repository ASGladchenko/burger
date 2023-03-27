import  { useLayoutEffect, useState } from 'react';

export function useLocation() {
    const [location, setLocation] = useState();
    useLayoutEffect(() => {
        function updateLocation() {
            setLocation(window.location.pathname);
        }
        window.addEventListener('hashchange', updateLocation);
        updateLocation();
        return () => window.removeEventListener('hashchange', updateLocation);
    }, []);
    return location;
}