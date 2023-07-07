import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { LoginPage } from "../Pages/Login/index.tsx";
import { RegisterPage } from "../Pages/RegisterPage/index.tsx";
import { HomeNews } from "../Pages/HomeNews/index.tsx";
import { DashboardPage } from "../Pages/Dashboard/index.tsx";
import { InternalPage } from "../Pages/InternalPage/index.tsx";
import { EditPage } from "../Pages/Edit/index.tsx";
import { ProtectedRoutes } from "./ProtectedRoutes/index.tsx";
import { PublicRoutes } from "./PublicRoutes/index.tsx";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/homenews" element={<HomeNews />} />
      <Route path="/InternalPage/:id" element={<InternalPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Route>
    </Routes>
  );
};
