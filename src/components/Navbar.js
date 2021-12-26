import React from 'react';
import { Outlet, Link } from "react-router-dom";

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
                            {/* <a className="nav-link active dcam-btn" aria-current="page" href="#">Home</a> */}
                            <Link to="/" className="nav-link active dcam-btn" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle dcam-btn" href="#" id="lessonsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Music Lessons</a>
                            <ul className="dropdown-menu" aria-labelledby="lessonsDropdown">
                                <li><a className="dropdown-item" href="piano-lessons.html">Piano Lessons</a></li>
                                <li><a className="dropdown-item" href="#">Guita Lessons</a></li>
                                <li><a className="dropdown-item" href="#">Drum Lessons</a></li>
                                <li><a className="dropdown-item" href="#">Voice Lessons</a></li>
                                <li><a className="dropdown-item" href="#">Music Theory</a></li>
                                <li><a className="dropdown-item" href="#">Intro to Music Program</a></li>
                                <li><a className="dropdown-item" href="#">Toddler classNamees</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link to="/rates" className="nav-link dcam-btn">Rates</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/teachers" className="nav-link dcam-btn">Teachers</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dcam-btn" href="#reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dcam-btn" href="gallery.html">Gallery</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle dcam-btn" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                            <ul className="dropdown-menu dcam-blue-reg" aria-labelledby="aboutDropdown">
                                <li><a className="dropdown-item" href="our-mission.html">Our Mission</a></li>
                                <li><a className="dropdown-item" href="our-story.html">Our Story</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link dcam-btn">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dcam-btn" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dcam-btn" href="#">Shop</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

