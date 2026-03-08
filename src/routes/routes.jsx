// src/routes/routes.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ADSManagement, Blogs, Dashboard, Farmers, ForgotPassword, Login, NotFound, Register, Setting, Tutorial } from "../screens";
import { DashboardLayout } from "../components";



const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; 
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="forgot-pasword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="ads" element={<ADSManagement />} />
            <Route path="farmers" element={<Farmers />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="tutorial" element={<Tutorial />} />
            <Route path="settings" element={<Setting />} />
            
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
