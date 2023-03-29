import React from 'react'
import TotalCount from '../../Components/Dashboard/TotalCounts'
import PreviewSection from '../../Components/Dashboard/PreviewSection'
import AllStudents from '../../Components/Dashboard/AllStudents'
import SitePlanEvents from '../../Components/Dashboard/SitePlanEvents'

const DashboardPage = () => {
    return (
        <div>
            <TotalCount />
            <PreviewSection />
            <AllStudents />
            <SitePlanEvents />
        </div>
    )
}

export default DashboardPage