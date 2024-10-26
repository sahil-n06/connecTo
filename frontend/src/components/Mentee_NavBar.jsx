import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { useColorMode } from '@chakra-ui/react'; // Import useColorMode

function MenteeNavBar({ handleInbox, togglePanel, isPanelOpen }) {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
    
    // Use Chakra UI's useColorMode hook
    const { colorMode } = useColorMode();

    // Define colors for light and dark modes
    const navBackgroundColor = colorMode === 'light' ? '#e0e0e0' : '#2D3748'; // Light gray for light mode, dark gray for dark mode
    const linkColor = colorMode === 'light' ? '#000000' : '#ffffff'; // Black for light mode, white for dark mode
    const hoverColor = colorMode === 'light' ? '#3b6aa2' : '#a9d6eb'; // Blue for light mode, lighter blue for dark mode
    const hoverColorDarkMode = colorMode === 'light' ? '#0056b3' : '#4682B4'; // Darker blue for light mode, and lighter blue for dark mode on hover

    // Handle logout action
    const handleLogout = () => {
        logout();
        toast.success(`${user?.name} logged out successfully`);
        navigate("/login"); // Redirect to login page after logout
    };

    return (
        <div>
            {/* Navigation Section - Visible only on larger screens */}
            <nav className="p-3 shadow flex justify-center items-center hidden lg:flex" style={{ backgroundColor: navBackgroundColor }}>
                <Link 
                    to="/mentee" 
                    className="mr-10" 
                    style={{ color: linkColor }}
                    onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                    onMouseOut={(e) => (e.currentTarget.style.color = linkColor)} // Reset color when not hovering
                >
                    Home
                </Link>
                <Link 
                    to="/profile" 
                    className="mr-10" 
                    style={{ color: linkColor }}
                    onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                    onMouseOut={(e) => (e.currentTarget.style.color = linkColor)} // Reset color when not hovering
                >
                    Profile
                </Link>
                
                {/* OnClick for Inbox */}
                <button 
                    onClick={handleInbox} 
                    className="mr-10" 
                    style={{ color: linkColor }}
                    onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                    onMouseOut={(e) => (e.currentTarget.style.color = linkColor)} // Reset color when not hovering
                >
                    Inbox
                </button>

                <Link 
                    to="/settings" 
                    className="mr-10" 
                    style={{ color: linkColor }}
                    onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                    onMouseOut={(e) => (e.currentTarget.style.color = linkColor)} // Reset color when not hovering
                >
                    Settings
                </Link>
                
                {/* OnClick for Logout */}
                <button 
                    onClick={handleLogout} 
                    className="mr-10" 
                    style={{ color: linkColor }}
                    onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                    onMouseOut={(e) => (e.currentTarget.style.color = linkColor)} // Reset color when not hovering
                >
                    Logout
                </button>
            </nav>

            {/* Side Panel - Only visible when toggled */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform lg:hidden ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    className="text-white p-4"
                    onClick={togglePanel}
                >
                    Close
                </button>
                <div className="p-4">
                    <ul className="mt-4 space-y-4">
                        <li>
                            <Link 
                                to="/"
                                className="text-white transition duration-300"
                                onClick={togglePanel}
                                onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                                onMouseOut={(e) => (e.currentTarget.style.color = '#ffffff')} // Reset color when not hovering
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/calendar"
                                className="text-white transition duration-300"
                                onClick={togglePanel}
                                onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                                onMouseOut={(e) => (e.currentTarget.style.color = '#ffffff')} // Reset color when not hovering
                            >
                                Calendar
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/chat"
                                className="text-white transition duration-300"
                                onClick={togglePanel}
                                onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                                onMouseOut={(e) => (e.currentTarget.style.color = '#ffffff')} // Reset color when not hovering
                            >
                                Messages
                            </Link>
                        </li>
                        <li>
                            <button 
                                className="text-white transition duration-300"
                                onClick={handleLogout}
                                onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)} // Change color on hover
                                onMouseOut={(e) => (e.currentTarget.style.color = '#ffffff')} // Reset color when not hovering
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenteeNavBar;
