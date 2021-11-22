import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg p-2">
         <div className="navbar-brand">
           Github Search 
         </div> 
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to = "/" className="nav-link">Main</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">Info</NavLink>
                </li>
            </ul>  

        </nav>
    )
}
