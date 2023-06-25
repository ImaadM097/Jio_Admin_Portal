import React, { useState } from 'react';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">       
            <div className="container">
                <a href="index.html" className="navbar-brand">JioStream</a>
                <form class="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id='searchBar'/>
                </form>
                <div className='navbar-nav'>
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle acrive" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src='/images/user-01.png' id='profileImg'></img>
                        John Doe
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Account Settings</a>
                    <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;