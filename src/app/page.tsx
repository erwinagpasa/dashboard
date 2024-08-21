// Dashboard.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { handleResize } from './lib/resizeHandler';
import Navbar from './components/Navbar';

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    handleResize(setSidebarOpen); // Set initial state based on screen size
    const handleResizeEvent = () => handleResize(setSidebarOpen);
    window.addEventListener('resize', handleResizeEvent); // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResizeEvent); // Clean up resize event listener
    };
  }, []);


  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex pt-[70px] bg-gray-50 dark:bg-gray-900">
        <aside
          id="sidebar"
          className={`fixed top-18 left-0 z-20 h-full bg-gray-800 text-white w-64 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:w-64 lg:h-auto lg:block`}
          aria-label="Sidebar"
        >
          {/* Sidebar content */}
          <Sidebar />
        </aside>

        <main className={`flex-1 h-screen transition-transform duration-300 ${isSidebarOpen ? 'lg:ml-0' : ''}`}>
          <Main />
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
}
