import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import '../styles/navbar.css'
import { Navigate, useNavigate } from 'react-router-dom';

let cookies = new Cookies();
const Navbar = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  
  const navigate = useNavigate();
  const logOut = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  const toProfile = ()=>{
    navigate('profile');
  }
    return (
    <div id='mainNavbarDiv'>
        <div className="dropdown">
        <img src={token.image} id='profileImg'></img>
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {token.firstName} {token.lastName}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" onClick={toProfile}>Profile</a>
    <a className="dropdown-item" href='#'>Account Setting</a>
    <a className="dropdown-item" onClick={logOut}>Logout</a>
  </div>
</div>
    </div>
    );

}

export default Navbar;