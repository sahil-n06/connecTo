import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";
// Assuming you are using react-toastify for toast notifications

const HomePage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    toast.success(`${user?.name} logged out successfully`);
  };

  return (
    <>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
        <img src='' alt='Logo' className='w-32 md:w-52' />
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
      </header>
    </>
  );
};

export default HomePage;
