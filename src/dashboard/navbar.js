import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import './navbar.css'
import { Navigate, useNavigate } from 'react-router-dom';

let cookies = new Cookies();
const Navbar = () => {
  const navigate = useNavigate();
  const logOut = ()=>{
    cookies.set('token','');
    navigate('/login');
  }
    return (
    <div id='mainNavbarDiv'>
        <div className="dropdown">
        <img src='/images/user-01.png' id='profileImg'></img>
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    John Doe
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Profile</a>
    <a className="dropdown-item" href="#">Account Setting</a>
    <a className="dropdown-item" onClick={logOut}>Logout</a>
  </div>
</div>
    </div>
    );

}

export default Navbar;