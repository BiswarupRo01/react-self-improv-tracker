import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <h1>Assignment</h1>
                    <ul className="reg-options">
                        <li className="login">
                            <a href="/">Login</a>
                        </li>
                        <li className="register">
                            <a href="/">Register</a>
                        </li>
                    </ul>
                </div>



            </nav>
        </>
    );
}


export default Navbar;