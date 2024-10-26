import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa'; // Importing social media icons
import { useColorMode } from '@chakra-ui/react'; // Import useColorMode

function AdditionalSection() {
    // Use Chakra UI's useColorMode hook
    const { colorMode } = useColorMode();

    // Define colors for light and dark modes
    const backgroundColor = colorMode === 'light' ? '#e0e0e0' : '#2D3748'; // Light mode gray, dark mode gray
    const textColor = colorMode === 'light' ? '#000000' : '#ffffff'; // Light mode black, dark mode white
    const linkColor = textColor; // Keeping link color the same as text color

    return (
        <section className="p-8 text-center" style={{ backgroundColor: backgroundColor }}>
            <h2 className="text-xl font-bold mb-8" style={{ color: textColor }}>Explore More Opportunities</h2>

            {/* Flex container to hold three columns */}
            <div className="flex justify-around">
                {/* First Column - About ConnecTo */}
                <div className="w-1/3 p-4 text-left">
                    <h3 className="font-semibold text-lg mb-4" style={{ color: textColor }}>About ConnecTo</h3>
                    <ul className="text-sm list-none">
                        <li>
                            <Link to="/who-we-are" className="hover:underline" style={{ color: linkColor }}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" className="hover:underline" style={{ color: linkColor }}>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className="hover:underline" style={{ color: linkColor }}>
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Second Column - Get Involved */}
                <div className="w-1/3 p-4 text-left">
                    <h3 className="font-semibold text-lg mb-4" style={{ color: textColor }}>Get Involved</h3>
                    <ul className="text-sm list-none">
                        <li>
                            <Link to="/login" className="hover:underline" style={{ color: linkColor }}>
                                Become a Mentor
                            </Link>
                        </li>
                        <li>
                            <Link to="/partner-with-us" className="hover:underline" style={{ color: linkColor }}>
                                Partner with Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/donate" className="hover:underline" style={{ color: linkColor }}>
                                Donate
                            </Link>
                        </li>
                        <li>
                            <Link to="/give-suggestions" className="hover:underline" style={{ color: linkColor }}>
                                Give Suggestions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Third Column - Join the Conversation */}
                <div className="w-1/3 p-4 text-left">
                    <h3 className="font-semibold text-lg mb-4" style={{ color: textColor }}>Join the Conversation</h3>
                    <p className="text-sm" style={{ color: textColor }}>
                        Participate in exclusive events to network and grow with the community.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-start space-x-4 mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook style={{ color: textColor }} className="hover:text-[#4267B2]" size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram style={{ color: textColor }} className="hover:text-[#C13584]" size={24} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter style={{ color: textColor }} className="hover:text-[#1DA1F2]" size={24} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube style={{ color: textColor }} className="hover:text-[#FF0000]" size={24} />
                        </a>
                        <a href="mailto:support@example.com" aria-label="Gmail">
                            <FaEnvelope style={{ color: textColor }} className="hover:text-[#D44638]" size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdditionalSection;
