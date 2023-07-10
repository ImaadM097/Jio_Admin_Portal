import './App.css';
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom"
import Login from './login/login';
import Tables from './dashboard/Comments/Tables';
import Dashboard from './dashboard/main_dashboard/dashboard';
import Profile from './dashboard/Profile/Profile';
import Videos from './dashboard/Videos/videos';
import Tenants from './dashboard/Tenants/tenants';
import Users from './dashboard/Users/users';
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';

function App() {  
  

  useEffect(()=>{
    redirect("/login")
  }, [])

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <>
            <div className='mainContainer'>
                <Sidebar/>
                <Dashboard/>
            </div>
          </>
        } />
        <Route path="/dashboard/comments" element={
          <>
            <div className='mainContainer'>
                <Sidebar/>
                <Tables/>
            </div>
          </>
        } />
        {/* <Route path="/dashboard/profile" element={
          <>
          <div className='mainProfileDiv'>
              <Sidebar/>
              <Profile/>
          </div>
        </>
        }/> */}
        <Route path='/dashboard/videos' element={
          <>
          <div className='mainContainer'>
              <Sidebar/>
              <Videos/>
          </div>
        </>
        }/>
        <Route path='/dashboard/tenants' element={
          <>
          <div className='mainContainer'>
              <Sidebar/>
              <Tenants/>
          </div>
        </>
        }/>
        <Route path='/dashboard/users' element={
          <>
          <div className='mainContainer'>
              <Sidebar/>
              <Users/>
          </div>
        </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
