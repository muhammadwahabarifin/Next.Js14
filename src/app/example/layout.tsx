import Footer from '@/components/navigation/footer';
import { SITE_CONFIG } from '@/config/metadata';
import React from 'react';

export const metadata = SITE_CONFIG;

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
};

export default layout;
