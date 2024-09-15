import { Navigate } from "react-router-dom";

import PropTypes from "prop-types"; // Import PropTypes
import { useAuthStore } from "../store/authStore";

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Add PropTypes validation for children
RedirectAuthenticatedUser.propTypes = {
  children: PropTypes.node.isRequired,  // Expect React elements (children), required
};

export default RedirectAuthenticatedUser;
