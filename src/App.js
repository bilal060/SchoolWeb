import { useLocation } from "react-router-dom";
import "../src/Pages/common.css";
import ContentRoutes from "./Components/Content";
import RegistrationRoutes from "./Components/Registration/routes";
import AppLayout from "./Components/Layout";

function App() {
  const homepage = ["/dashboard", "/alert", "/cameras", "/settings"];
  const location = useLocation();

  if (homepage.includes(location.pathname)) {
    return (
      <AppLayout>
        <ContentRoutes />
      </AppLayout>
    );
  } else return <RegistrationRoutes />;
}

export default App;
