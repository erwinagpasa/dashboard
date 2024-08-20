'use client';

import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAvatarOpen, setAvatarOpen] = useState(false);

  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true); // Show sidebar on larger screens
    } else {
      setSidebarOpen(false); // Hide sidebar on smaller screens
    }
  };

  useEffect(() => {
    handleResize(); // Set initial state based on screen size
    window.addEventListener('resize', handleResize); // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  return (
    <>
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              aria-expanded={isSidebarOpen}
              aria-controls="sidebar"
              className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className={`w-6 h-6 ${isSidebarOpen ? 'hidden' : 'block'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className={`w-6 h-6 ${isSidebarOpen ? 'block' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="https://flowbite-admin-dashboard.vercel.app/"
              className="flex ml-2 md:mr-24"
            >
              <img
                src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                Flowbite
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setNotificationOpen(!isNotificationOpen)}
              className="relative p-2 text-gray-600 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 17h5l-1.403-1.403A4.99 4.99 0 0018 13V7a6 6 0 00-12 0v6a4.99 4.99 0 00-1.597 2.597L2 17h5m8 0v1a2 2 0 01-4 0v-1m8 1a2 2 0 01-2-2m0-3a2 2 0 01-2-2m2 0a2 2 0 012 2z" />
              </svg>
              {isNotificationOpen && (
                <div className="absolute right-0 w-64 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                  <ul className="py-2">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Notification 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Notification 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Notification 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </button>

            {/* Avatar Dropdown */}

            <div className="relative">
              <button
                onClick={() => setAvatarOpen(!isAvatarOpen)}
                className="flex items-center p-2 text-gray-600 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${isAvatarOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {isAvatarOpen && (
                <ul className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>

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
