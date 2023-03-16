import { useLocation } from 'react-router-dom';
import '../src/Pages/common.css';
import ContentRoutes from './Components/Content';
import AppLayout from './Components/Layout';
import RegistrationRoutes from './Components/Registration/routes';

function App() {
  const homepage = ['/dashboard', '/alert', '/cameras', '/studentsportal', '/teachersportal', '/management', '/events', '/setting']
  const location = useLocation();

  if (homepage.includes(location.pathname)) {
    return (
      <AppLayout>
        <ContentRoutes />
      </AppLayout>
    );
  }
  else
    return (
      <RegistrationRoutes />
    );
}

export default App;
