import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AlertPage from '../../Pages/AlertPage'
import AllCameraPage from '../../Pages/AllCamera'
import DashboardPage from '../../Pages/Dashboard'
import LoginPage from '../../Pages/Login'

const ContentRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/alert" element={<AlertPage />} />
                <Route path="/cameras" element={<AllCameraPage />} />
                <Route path="/studentsportal" element={<DashboardPage />} />
                <Route path="/teachersportal" element={<DashboardPage />} />
                <Route path="/management" element={<DashboardPage />} />
                <Route path="/events" element={<DashboardPage />} />
                <Route path="/setting" element={<DashboardPage />} />
            </Routes>
        </>
    )
}

export default ContentRoutes