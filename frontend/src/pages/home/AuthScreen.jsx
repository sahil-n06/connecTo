import MentorPage from "./home/MentorPage"; // the file is in pages/home
import MenteePage from "./home/MenteePage"; // the file is in pages/home
import axios from "axios"; // axios for API calls
import { useEffect, useState } from "react";

const AuthScreen = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        // Call backend to fetch user role
        const response = await axios.get("/api/auth/getRole");

        // Set the role from the response
        setRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-lg text-gray-700">Loading...</div>
      </div>
    ); // Show loading until the role is fetched
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl p-6">
        {role === "mentor" ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MentorPage />
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MenteePage />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
