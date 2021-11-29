import React from 'react';
import  NavLink  from './NavLink';

export default function Navbar() {
    return (
        <nav id="top-nav" className="navbar navbar-expand-lg navbar-light bg-light py-0">
            <div className="container-fluid">
                <div className="navbar-nav my-1">
                    <NavLink link="/" text="Home" target=""/>
                    <NavLink link="https://www.usgs.gov/natural-hazards/earthquake-hazards/science/science-earthquakes?qt-science_center_objects=0#qt-science_center_objects" target="_blank" text="What is an earthquake?"/>
                    <NavLink link="https://www.ready.gov/earthquakes" text="What to do in case of an earthquake?" target="_blank"/>

                </div>
            </div>
        </nav>
    );
}

