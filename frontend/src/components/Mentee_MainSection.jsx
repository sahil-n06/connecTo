import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa'; // Importing a search icon
import { useColorMode, useColorModeValue } from '@chakra-ui/react'; // Chakra imports

function MainSection({ user }) {
    const [searchTerm, setSearchTerm] = useState('');
    const { colorMode } = useColorMode(); // Hook to get current color mode

    // Using `useColorModeValue` to get the gradient based on the mode
    const gradientBg = useColorModeValue(
        'linear-gradient(to bottom, #a9d6eb, #FFFFFF)', // Light mode: blue to white
        'linear-gradient(to bottom, #4A5568, #000000)'  // Dark mode: gray to black
    );
    const textColor = useColorModeValue('black', 'white');
    const buttonBgColor = useColorModeValue('#142551', '#1E90FF');
    const buttonTextColor = useColorModeValue('white', 'black');
    const searchIconColor = useColorModeValue('gray.500', 'gray.300');
    const optionBgColor = useColorModeValue('#3b6aa2', '#a9d6eb'); // Light gray vs dark gray

    // Function to handle option button clicks and populate the search bar
    const handleOptionClick = (option) => {
        setSearchTerm(option);
    };

    return (
        <section
            className="w-full flex flex-col items-center justify-center p-8 h-screen"
            style={{ background: gradientBg }}  // Applying the gradient background
        >
            <motion.h2
                style={{ color: textColor }}  // Dynamic text color
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hello {user?.name}!
            </motion.h2>
            <motion.p
                style={{ color: textColor }}  // Dynamic text color
                className="text-xl text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Explore the world of mentorship especially curated for you!
            </motion.p>
            <motion.p
                style={{ color: textColor }}  // Dynamic text color
                className="text-lg text-center mb-12 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Whether you are looking to improve your skills or seek guidance on your career path, our mentors are here to help you every step of the way!
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
                className="mb-8 w-full max-w-lg flex items-center border border-gray-300 rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <FaSearch className="m-4" style={{ color: searchIconColor }} /> {/* Dynamic icon color */}
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for mentors..."
                    className="border-0 focus:ring-0 flex-1 p-4 text-lg"
                    style={{ color: textColor, backgroundColor: 'transparent' }}  // Dynamic input colors, transparent background
                />
            </motion.div>

            {/* Instructions */}
            <motion.p
                style={{ color: '#1E3A8A' }}  // Static blue text color
                className="text-center mb-8 text-lg font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
            >
                Use the buttons below to quickly find mentors in specific fields. Click on any of the options to auto-fill the search bar!
            </motion.p>

            {/* Option Buttons */}
            <div className="flex flex-wrap justify-center mb-8">
                {["Marketing", "Software Development", "Design", "Data Science", "Project Management"].map((option, index) => (
                    <motion.button
                        key={index}
                        className="py-3 px-6 mx-3 my-2 rounded-lg text-lg hover:brightness-110 transition duration-300"
                        onClick={() => handleOptionClick(option)}
                        style={{ backgroundColor: optionBgColor, color: buttonTextColor }} // Dynamic button colors
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                    >
                        {option}
                    </motion.button>
                ))}
            </div>

            {/* Explore Mentors Button */}
            <motion.button
                className="py-3 px-8 rounded-lg text-lg hover:brightness-110 transition duration-300"
                style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}  // Dynamic button colors
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                onClick={() => console.log('Explore Mentors with search:', searchTerm)}
            >
                Explore Mentors
            </motion.button>
        </section>
    );
}

export default MainSection;
