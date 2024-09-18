import { Route, Routes } from "react-router-dom";
import SignupPage from "/src/pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home/HomePage";
import MentorPage from "./pages/home/MentorPage";
import MenteePage from "./pages/home/MenteePage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RoleBasedRoute from "./components/RoleBasedRoute";
import RedirectAuthenticatedUser from "./components/RedirectAuthenticatedUser";
import ResetPasswordPage from "./pages/ResetPasswordPage";



function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="min">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignupPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />

        {/* Role-based routes */}
        <Route
          path="/mentor"
          element={
            <RoleBasedRoute role="mentor">
              <MentorPage />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/mentee"
          element={
            <RoleBasedRoute role="mentee">
              <MenteePage />
            </RoleBasedRoute>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
