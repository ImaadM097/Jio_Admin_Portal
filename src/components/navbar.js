import React from 'react';
import '../styles/navbar.css'
const Navbar = () => {
    return (
    <div id='mainNavbarDiv'>
        <div class="dropdown">
        <img src='/images/user-01.png' id='profileImg'></img>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    John Doe
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Account Setting</a>
    <a class="dropdown-item" href="#">Logout</a>
  </div>
</div>
    </div>
    );

}

export default Navbar;