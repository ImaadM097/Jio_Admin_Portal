import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './login/login';
import Navbar from './dashboard/navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Navbar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
