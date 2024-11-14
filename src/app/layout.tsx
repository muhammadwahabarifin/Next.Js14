import Navbar from '@/components/navigation/navbar';
import { SITE_CONFIG } from '@/config/metadata';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} dark:bg-black/[0.96]`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
