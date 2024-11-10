import React from "react";
// src/routes/AppRouter.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
// import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
// import MainLayout from '../layouts/MainLayout';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardForm from "../components/DashboardForm";
import AdminLayout from "../layouts/AdminLayout";
import AddItem from "../components/AddItem/AddItem";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} /> {/* Halaman utama */}
          {/* <Route path="about" element={<About />} /> Halaman About Us */}
          {/* <Route path="contact" element={<Contact />} /> Halaman Contact */}
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<DashboardForm />} />
          <Route path="add-item" element={<AddItem />} />
          {/* <Route path="register" element={<Register />} /> Halaman About Us */}
        </Route>
        {/* <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
