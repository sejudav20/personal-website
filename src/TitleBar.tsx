import React from 'react';


function TitleBar() {
    return <nav className="navbar shadow-lg navbar-expand-sm navbar-dark bg-dark border-bottom border-light">
        <div className="container-fluid d-flex justify-content-between p-5">
            <span className="navbar-text h3 text-white">Davin Seju</span>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/davin-seju-7813601b3/"><i className="bi bi-linkedin" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/sejudav20"><i className="bi bi-github" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="mailto:davinseju@gmail.com"><i className="bi bi-envelope" /></a>
                </li>
            </ul>
        </div>
    </nav>;
}

export default TitleBar;