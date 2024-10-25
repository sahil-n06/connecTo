// src/components/MenteeHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa'; // Using the bell icon as in the previous version

function MenteeHeader({ togglePanel }) {
    return (
        <header className="flex justify-between items-center bg-gray-100 p-2 h-12 shadow">
            {/* Logo */}
            <img src='/logo.png' alt='Logo' className='w-24 md:w-35' /> {/* Reduced logo size */}

            {/* Image to toggle the side panel */}
            <img
                src='/menu.png'
                alt='Menu'
                className='w-8 h-8 cursor-pointer lg:hidden' // Slightly smaller menu button
                onClick={togglePanel}
            />

            {/* Bell Icon for Notifications (only visible on large screens) */}
            <div className="relative hidden lg:block">
                <Link to="/notifications">
                    <FaBell className="text-2xl text-gray-700 cursor-pointer hover:text-blue-500 transition duration-300" />
                </Link>
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    3
                </span>
            </div>
        </header>
    );
}

export default MenteeHeader;
