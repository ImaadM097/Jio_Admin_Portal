import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './login/login';
import Sidebar from './dashboard/Sidebar/Sidebar';
import Navbar from './dashboard/navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <>
          <div className='mainContainer'>
            <Sidebar />
            <Navbar />
          </div>
          </>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
