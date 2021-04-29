import React from 'react';
import './Navbar.css'
function Navbar()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Smart Tendering Platform</a>
                <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </div>
    )
}
export default Navbar;
