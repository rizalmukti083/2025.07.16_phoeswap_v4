
import React, { ReactNode } from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import { Toaster } from 'sonner';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-phoenix-bg text-phoenix-text-primary">
      <AppBar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors theme="dark" />
    </div>
  );
};

export default Layout;
