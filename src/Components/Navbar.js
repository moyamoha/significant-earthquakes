import React from 'react';
import  NavLink  from './NavLink';

export default function Navbar() {
    return (
        <nav id="top-nav" className="navbar navbar-expand-lg navbar-light bg-light py-0">
            <div className="container-fluid">
                <div className="navbar-nav my-1">
                    <NavLink link="/" text="Home" />
                </div>
            </div>
        </nav>
    );
}

