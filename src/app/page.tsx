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
      <div className="relative flex bg-gray-50">
        <aside id="sidebar"
          className={`fixed top-[70px] left-0 z-20 h-full border-r border-gray-200 bg-white w-64 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-64 lg:h-full`}
          aria-label="Sidebar">
          <Sidebar />
        </aside>

        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        <main className={`flex-1 mt-[75px] h-screen transition-transform duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
          <Main />
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
}
