import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsentBanner from './CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-industrial-light">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
};

export default Layout; 