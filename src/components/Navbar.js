import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-0 sticky-top">
            <div className="container-fluid dcam-bg-gradient">
                <a className="navbar-brand" href="index.html" />
                    <img src={require("../img/dcam-logo-white.png")} className="img-btn py-2" alt="Da Capo Academy of Music Logo" width="250" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-dark justify-content-end" id="navbarNav">
                    <ul className="navbar-nav roboto text-uppercase">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active dcam-btn" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle dcam-btn" href="#" id="lessonsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Music Lessons</a>
                            <ul className="dropdown-menu" aria-labelledby="lessonsDropdown">
                                <li><Link to="/lessons/piano-lessons" className="dropdown-item">Piano Lessons</Link></li>
                                <li><Link to="/lessons/guitar-lessons" className="dropdown-item">Guitar Lessons</Link></li>
                                <li><Link to="/lessons/drum-lessons" className="dropdown-item">Drum Lessons</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link to="/rates" className="nav-link dcam-btn">Rates</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/teachers" className="nav-link dcam-btn">Teachers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reviews" className="nav-link dcam-btn">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link dcam-btn">Gallery</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle dcam-btn" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                            <ul className="dropdown-menu dcam-blue-reg" aria-labelledby="aboutDropdown">
                                <li><Link to="/mission" className="dropdown-item">Our Mission</Link></li>
                                <li><Link to="/story" className="dropdown-item">Our Story</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link dcam-btn">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

