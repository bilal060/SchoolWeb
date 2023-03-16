import AlertIcon from "../../Assets/Images/alertIcon";
import CameraIcon from "../../Assets/Images/cameraIcon";
import DashboardIcon from "../../Assets/Images/dashboardIcon";
import EventIcon from "../../Assets/Images/eventIcon";
import ManagementIcon from "../../Assets/Images/managementIcon";
import SettingIcon from "../../Assets/Images/settingIcon";
import StudentPortalIcon from "../../Assets/Images/studentPortalIcon";
import TeacherPortalIcon from "../../Assets/Images/teacherPortalIcon";

const SideBarRoutes = () => {

    const Routes = [
        {
            name: "Dashboard Overview ",
            link: "/dashboard",
            visiblity: true,
            icon: <DashboardIcon />
        },
        {
            name: "Alerts",
            link: "/alert",
            icon: <AlertIcon />,
            visiblity: true,
        },
        {
            name: "All Cameras",
            link: "/cameras",
            icon: <CameraIcon />,
            visiblity: true,
        },
        {
            name: "Students Portal",
            link: "/studentsportal",
            visiblity: true,
            icon: <StudentPortalIcon />
        },
        {
            name: "Teachers Portal",
            link: "/teachersportal",
            icon: <TeacherPortalIcon />,
            visiblity: true,
        },
        {
            name: "Doors Management",
            link: "/management",
            icon: <ManagementIcon />,
            visiblity: true,
        },
        {
            name: "Events",
            link: "/events",
            icon: <EventIcon />,
            visiblity: true,
        },
        {
            name: "Settings",
            link: "/setting",
            icon: <SettingIcon />,
            visiblity: true,
        },

    ];
    return Routes;
};

export default SideBarRoutes;
