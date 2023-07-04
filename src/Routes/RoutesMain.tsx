import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { LoginPage } from "../Pages/Login/index.tsx";
import { RegisterPage } from "../Pages/RegisterPage";
import { HomeNews } from "../Pages/HomeNews/index.tsx";
import { DashboardPage } from "../Pages/Dashboard/index.tsx";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/homenews" element={<HomeNews />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
