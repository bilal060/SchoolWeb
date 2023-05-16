import React from "react";
import { Route, Routes } from "react-router-dom";
import AlertPage from "../../Pages/AlertPage";
import AllCameraPage from "../../Pages/AllCamera";
import DashboardPage from "../../Pages/Dashboard";
import LoginPage from "../../Pages/Login";
import SettingsPage from "../../Pages/SettingPage";
import { ProtectedRoutes } from "../../utils/ProtectedRoutes";

const ContentRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoutes component={DashboardPage} />}
        />
        <Route
          path="/alert"
          element={<ProtectedRoutes component={AlertPage} />}
        />
        <Route
          path="/cameras"
          element={<ProtectedRoutes component={AllCameraPage} />}
        />
        <Route
          path="/settings"
          element={<ProtectedRoutes component={SettingsPage} />}
        />
      </Routes>
    </>
  );
};

export default ContentRoutes;
