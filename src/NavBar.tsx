import React from 'react';


function NavBar() {
    return <nav className="navbar navbar-expand-sm shadow-sm navbar-dark bg-dark text-white sticky-top">
        <div className="container-fluid d-flex justify-content-start">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Bio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Classes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Fun</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>;
}
export default NavBar;