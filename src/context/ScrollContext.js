'use client';

import { createContext, useContext } from 'react';

const ScrollContext = createContext(null);

const ScrollProvider = ({ children }) => {
    const scrollSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <ScrollContext.Provider value={{ scrollSection }}>
            {children}
        </ScrollContext.Provider>
    );
}

const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
}