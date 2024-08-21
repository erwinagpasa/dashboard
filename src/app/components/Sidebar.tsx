'use client';

import React, { useState } from 'react';
import { FiBookOpen, FiGrid, FiSettings } from 'react-icons/fi';

type SidebarLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
  subItems?: { href: string; label: string }[];
};

const sidebarLinks: SidebarLink[] = [
  {
    href: '#',
    icon: <FiGrid className="w-4 h-4 mr-3" />,
    label: 'Dashboard',
  },
  {
    href: '#',
    icon: <FiBookOpen className="w-4 h-4 mr-3" />,
    label: 'Help',
    subItems: [
      { href: '#', label: 'FAQ' },
      { href: '#', label: 'Contact Support' },
      { href: '#', label: 'Feedback' },
    ],
  },
  {
    href: '#',
    icon: <FiSettings className="w-4 h-4 mr-3" />,
    label: 'Settings',
  },
];

export default function Sidebar() {
  const [openHelp, setOpenHelp] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <ul className="py-4 px-2 space-y-2">
          {sidebarLinks.map(({ href, icon, label, subItems }) => (
            <li key={label} className={subItems ? 'relative' : ''}>
              {subItems ? (
                <>
                  <button
                    onClick={() => setOpenHelp(!openHelp)}
                    className="flex items-center p-2 text-sm hover:bg-gray-50 rounded w-full text-left"
                  >
                    {icon}
                    <span>{label}</span>
                    <svg
                      className={`w-4 h-4 ml-auto transition-transform ${openHelp ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                  <ul className={`mt-2 space-y-1 transition-transform duration-300 ${openHelp ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {subItems.map(({ href, label }) => (
                      <li key={label}>
                        <a href={href} className="block px-4 py-2 text-sm hover:bg-gray-50 rounded">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={href} className="flex items-center p-2 text-sm hover:bg-gray-50 rounded">
                  {icon}
                  <span>{label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
