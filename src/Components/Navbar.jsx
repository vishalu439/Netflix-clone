import React, { useEffect, useState } from 'react';
import './Navbar.css';


function Navbar() {

    

    return (
        <div className={`navbar`}>
            
            <img
            className="nav__logo"
             src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX" />
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"
            />
            
        </div>
    )
}
export default Navbar;