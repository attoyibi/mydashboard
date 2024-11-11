// src/routes/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardForm from "../components/DashboardForm";
import AdminLayout from "../layouts/AdminLayout";
import AddItem from "../components/AddItem/AddItem";
import PrivateRoute from "../routes/PrivateRouter"; // Import PrivateRoute
import NotFound from "../pages/NotFound"; // Import NotFound component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Private Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<DashboardForm />} />
            <Route path="add-item" element={<AddItem />} />
          </Route>
        </Route>

        {/* Catch-all Route for 404 - Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
