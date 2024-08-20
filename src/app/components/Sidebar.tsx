'use client'
import React, { useState } from 'react'


export default function Sidebar() {
  const [isHelpOpen, setHelpOpen] = useState(false);

  return (
    <>
      <div className="h-full flex flex-col">
        <ul className="flex-1 py-4 px-2 space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a9.982 9.982 0 00-7.743 3.94A9.993 9.993 0 002 12a9.993 9.993 0 002.257 6.06A9.982 9.982 0 0012 22a9.982 9.982 0 007.743-3.94A9.993 9.993 0 0022 12a9.993 9.993 0 00-2.257-6.06A9.982 9.982 0 0012 2zm0 14a5 5 0 110-10 5 5 0 010 10zM12 4a8 8 0 00-5.657 13.657A8 8 0 0012 20a8 8 0 005.657-2.343A8 8 0 0012 4z" />
              </svg>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1H3zM2 6a1 1 0 011-1h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6zM7 6v12h10V6H7z" />
              </svg>
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12l-9-7-9 7v9a1 1 0 001 1h16a1 1 0 001-1v-9zM4 11.258L12 5.54l8 5.717v8.236H4v-8.236zM5 19v-6h2v6H5zm4 0v-6h2v6H9zm4 0v-6h2v6h-2zm4 0v-6h2v6h-2z" />
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setHelpOpen(!isHelpOpen)}
              className="flex items-center p-2 text-white hover:bg-gray-700 rounded w-full text-left"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v6.293a1 1 0 01.293.707v1.414a1 1 0 01-.293.707V21a1 1 0 01-1 1h-2a1 1 0 01-1-1V12.414a1 1 0 01-.293-.707V10a1 1 0 01.293-.707V3h2z" />
              </svg>
              <span>Help</span>
              <svg className={`w-4 h-4 ml-auto transition-transform ${isHelpOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <ul className={`mt-2 space-y-1 transition-transform duration-300 ${isHelpOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700 rounded">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700 rounded">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700 rounded">
                  Feedback
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
