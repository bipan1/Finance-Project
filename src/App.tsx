
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { UserProvider } from './Context/useAuth';

function App() {



  return (
    <UserProvider>
    <div className="App">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
    </UserProvider>
  );
}

export default App;
