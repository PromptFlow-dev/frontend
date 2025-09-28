import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import { tokenStorage, ProtectedRoute } from 'authmate';
import LandingPage from './pages/Landing'
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';
// import ProfilePage from './pages/Profile';
import ForgotPasswordPage from './pages/auth/ForgotPassword';
import DashboardPage from './pages/dashboard/dashboard';
import NotFound from './pages/notFound';
import VerifyEmailPage from './pages/auth/verifyEmail';

export default function App() {
  function AuthRedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
      tokenStorage.configureRedirect({
        redirectTo: '/login',
        onUnauthenticated: (redirectTo) => {
          if (redirectTo) {
            navigate(redirectTo);
          }
        }
      });
    }, [navigate]);

    return null;
  }
  return (
    <Router>
      <AuthRedirectHandler />
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      
        {/* Protected Routes - Wrap multiple routes */}
        <Route path="/*" element={
          <ProtectedRoute fallback={<div>Redirecting...</div>}>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              {/* Add more protected routes here */}

            </Routes> 
          </ProtectedRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

