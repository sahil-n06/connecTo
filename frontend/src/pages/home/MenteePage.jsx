// src/pages/MenteePage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";
import Footer from '../../components/Mentee_Footer';  // Import the Footer component
import MainSection from '../../components/Mentee_MainSection';  // Import the MainSection component
import AdditionalSection from '../../components/MenteeFooter(up)';  // Import the AdditionalSection component
import MenteeNavBar from '../../components/Mentee_NavBar';  // Import the new NavBar component
import MenteeHeader from '../../components/Mentee_Header';  // Import the new Header component

function MenteePage() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuthStore();

    // Function to toggle the side panel
    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    // Handle inbox action
    const handleInbox = () => {
        navigate("/chat"); // Redirect to inbox page
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Use the new MenteeHeader component */}
            <MenteeHeader togglePanel={togglePanel} />

            {/* Use the new MenteeNavBar component */}
            <MenteeNavBar 
                handleInbox={handleInbox}
                togglePanel={togglePanel}
                isPanelOpen={isPanelOpen}
            />

            {/* Main Content with Sidebar on the Right */}
            <main className="p-4 flex-grow flex">
                {/* Main Section is now imported here */}
                <MainSection user={user} />

                {/* Sidebar on the Right */}
                <aside className="w-1/4 bg-gray-100 p-4 shadow-md hidden lg:block">
                    <h2 className="text-lg font-semibold mb-4">My Calendar</h2>
                </aside>
            </main>

            {/* Additional Section just above Footer */}
            <AdditionalSection /> {/* This is where the AdditionalSection is used */}

            {/* Footer Section */}
            <Footer /> {/* Footer component is used here */}
        </div>
    );
}

export default MenteePage;
