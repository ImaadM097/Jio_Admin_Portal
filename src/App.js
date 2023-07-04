import './App.css';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom"
import Login from './login/login';
import Tables from './dashboard/Comments/Tables';
import Dashboard from './dashboard/main_dashboard/dashboard';
import Profile from './dashboard/Profile/Profile';
import Videos from './dashboard/Videos/videos';
import Tenants from './dashboard/Tenants/tenants';
import Users from './dashboard/Users/users';

function App() {  
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <>
            <Dashboard/>
          </>
        } />
        <Route path="/dashboard/comments" element={
          <Tables />
        } />
        <Route path="/dashboard/profile" element={
          <Profile />
        }/>
        <Route path='/dashboard/videos' element={
          <Videos />
        }/>
        <Route path='/dashboard/tenants' element={
          <Tenants />
        }/>
        <Route path='/dashboard/users' element={
          <Users />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
