import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import PropTypes from "prop-types"; // Import PropTypes

const RoleBasedRoute = ({ role, children }) => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== role) {
    return <Navigate to="/" />; // Redirect to home if role doesn't match
  }

  return children;
};

// Add PropTypes validation for role and children
RoleBasedRoute.propTypes = {
  role: PropTypes.string.isRequired,    // Expect string for role, required
  children: PropTypes.node.isRequired,  // Expect React elements (children), required
};

export default RoleBasedRoute;
