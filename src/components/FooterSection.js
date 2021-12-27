import React from 'react';
import { Link } from "react-router-dom";


function FooterSection() {
    return (
        <div className="container-fluid dcam-bg-gradient">
            <div className="row">

                <div className="col-sm-6 col-lg-3 py-5 ps-5">
                    <h5 className="text-light ovo">FOLLOW US:</h5>
                    <a href="https://www.facebook.com/dacapomusic.ca/"><i className="fab fa-facebook-square fa-3x ps-0 pe-2" /></a>
                    <a href="https://www.instagram.com/dacapomusic.ca/"><i className="fab fa-instagram-square fa-3x p-2" /></a>
                    <a href="https://www.youtube.com/watch?v=gSPAOkyO4AA"><i className="fab fa-youtube-square fa-3x p-2" /></a>
                </div>

                <div className="col-sm-6 col-lg-3 py-5 ps-5">
                    <h5 className="text-light ovo mb-3">WHAT WE OFFER:</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="piano-lessons.html">Piano Lessons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="#">Guitar Lessons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="#">Drum Lessons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="#">Voice Lessons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="#">Theory Lessons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="#">Intro to Music Program</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="#">Toddler Classes</a>
                        </li>

                    </ul>

                </div>

                <div className="col-sm-6 col-lg-3 py-5 ps-5">
                    <h5 className="text-light ovo mb-3">LEARN MORE:</h5>

                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="our-story.html">About Us</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/teachers" className="nav-link py-2 ps-0 d-inline-block">Teachers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rates" className="nav-link py-2 ps-0 d-inline-block">Rates</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link py-2 ps-0 d-inline-block">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 ps-0 d-inline-block" href="#">Privacy Policy</a>
                        </li>
                    </ul>

                </div>

                <div className="col-sm-6 col-lg-3 py-5 ps-5">
                    <h5 className="text-light ovo mb-3">CONTACT US:</h5>

                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link pt-2 pb-3 ps-0 d-inline-block" href="tel:+14162379595"><i className="fas fa-phone" /> (416) 237-9595</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 ps-0 d-inline-block" href="mailto:info@dacapomusic.ca"><i className="fas fa-envelope" /> info@dacapomusic.ca</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 ps-0 d-inline-block" href="https://g.page/dacapomusic-ca?share" target="_blank"><i className="fas fa-map-marker-alt" /> 270 The Kingsway,<br /> Etobicoke, ON<br /> M9A 3T7<br />(Humbertown Shopping Centre)</a>
                        </li>

                    </ul>
                </div>
                <div className="col-12 text-muted bg-dark py-2 text-center">
                    <small><>&copy;</> 2021 Da Capo Academy of Music Inc.</small>
                </div>
            </div>
        </div>
    )
}

export default FooterSection



