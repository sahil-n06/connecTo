import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";
import Header from "../../components/Header"; // Import Header component
import { Flex } from "@chakra-ui/react";  // Use Chakra's Flex for alignment

const HomePage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    toast.success(`${user?.name} logged out successfully`);
  };

  return (
    <>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
        {/* Your logo here */}
        <img src='' alt='Logo' className='w-32 md:w-52' />

        {/* Flex container for Sign In/Logout button and Dark/Light mode toggle */}
        <Flex alignItems="center" justifyContent="flex-end" gap={4}>
          {/* Show either Sign In or Logout based on user auth */}
          {!user ? (
            <Link to={"/login"} className='text-white bg-blue-950 py-1 px-2 rounded'>
              Sign In
            </Link>
          ) : (
            <button 
              onClick={handleLogout} 
              className='text-white bg-red-600 py-1 px-2 rounded'
            >
              Logout
            </button>
          )}

          {/* Dark/Light mode toggle placed closer to the Sign In/Logout button */}
          <Header /> {/* Dark/Light mode toggle component */}
        </Flex>
      </header>
    </>
  );
};

export default HomePage;
