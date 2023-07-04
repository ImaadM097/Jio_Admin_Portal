import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '../login/login';
import Tables from '../dashboard/Tables/Tables';
import Dashboard from '../dashboard/main_dashboard/dashboard';
import Profile from '../dashboard/Profile/Profile';

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <>
              <Dashboard />
            </>
          } />
          <Route path="/dashboard/tables" element={
            <Tables />
          } />
          <Route path="/dashboard/profile" element={
            <Profile />
          }/>
        </Routes>
      </BrowserRouter>
    );
  }

  export default Router;