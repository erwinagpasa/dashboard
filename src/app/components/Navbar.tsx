'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/next.svg';
import avatarImage from '../../../public/erwin.png';
import { handleResize } from '../lib/resizeHandler';
import { handleClickOutside } from '../lib/handleClickOutside';
import { FiBell } from "react-icons/fi";

interface NavbarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isSidebarOpen, setSidebarOpen }: NavbarProps) {
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const [isAvatarOpen, setAvatarOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResizeEvent = () => handleResize(setSidebarOpen);
    handleResizeEvent();
    window.addEventListener('resize', handleResizeEvent);

    const handleClickOutsideEvent = (event: MouseEvent) =>
      handleClickOutside(event, avatarRef, notificationRef, setAvatarOpen, setNotificationOpen);
    document.addEventListener('mousedown', handleClickOutsideEvent);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      document.removeEventListener('mousedown', handleClickOutsideEvent);
    };
  }, [setSidebarOpen]);

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
            <a href="/" className="flex ml-2 md:mr-24">
              <Image
                className="h-8 mr-3"
                alt="Next Logo"
                src={logo}
                sizes="100vw"
                style={{
                  width: '100px',
                  height: 'auto',
                }}
              />
              <span className="self-center text-base whitespace-nowrap">
                Dashboard
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setNotificationOpen(!isNotificationOpen)}
                aria-haspopup="true"
                aria-expanded={isNotificationOpen}
                className="relative p-2 text-gray-600 rounded hover:bg-gray-100 focus:outline-none"
              >
                <FiBell className='w-5 h-5' />
                {isNotificationOpen && (
                  <div className="absolute right-0 w-64 mt-6 bg-white border border-gray-200 rounded shadow-lg">
                    <ul>
                      <li><a href="#" className="block text-sm text-left px-3 py-2 text-gray-800 hover:bg-gray-100">Notification 1</a></li>
                      <li><a href="#" className="block text-sm text-left px-3 py-2 text-gray-800 hover:bg-gray-100">Notification 2</a></li>
                      <li><a href="#" className="block text-sm text-left px-3 py-2 text-gray-800 hover:bg-gray-100">Notification 3</a></li>
                    </ul>
                  </div>
                )}
              </button>
            </div>

            <div className="relative" ref={avatarRef}>
              <button
                onClick={() => setAvatarOpen(!isAvatarOpen)}
                aria-haspopup="true"
                aria-expanded={isAvatarOpen}
                className="flex items-center p-2 text-gray-600 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <Image
                  className="w-8 h-8 rounded-full"
                  alt="avatar"
                  src={avatarImage}
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
                <ul className="absolute right-0 w-48 mt-[12px] bg-white border border-gray-200 rounded shadow-lg">
                  <li><a href="#" className="block text-sm px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a></li>
                  <li><a href="#" className="block text-sm px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a></li>
                  <li><a href="#" className="block text-sm px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
