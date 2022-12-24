import React from 'react';


function NavBar() {
    return <nav id="navi" className="navbar navbar-expand-sm shadow-sm navbar-custom navbar-dark text-white sticky-top">
        <div className="container-fluid d-flex justify-content-start">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#bio">Bio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#work">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#classes">Classes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#project">Projects</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>;
}
export default NavBar;