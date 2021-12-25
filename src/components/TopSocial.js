import React from 'react'

function TopSocial() {
    return (
        <div>
            <div className="container-fluid top-social d-flex flex-column flex-sm-row justify-content-end align-items-center dcam-bg-gradient">
                <div className="py-2 px-0 px-sm-3 social">
                    <a href="https://www.facebook.com/dacapomusic.ca/" target="_blank"><i className="fab fa-facebook-square fa-2x pe-3 text-light"></i></a>
                    <a href="https://www.instagram.com/dacapomusic.ca/" target="_blank"><i className="fab fa-instagram-square fa-2x pe-3 text-light"></i></a>
                    <a href="https://www.youtube.com/watch?v=gSPAOkyO4AA" target="_blank"><i className="fab fa-youtube-square fa-2x pe-3 text-light"></i></a>
                </div>
                <div>
                    <a role="button" className="btn text-lg-start pb-3 pb-sm-0 px-1 px-sm-3 text-light" href="mailto:info@dacapomusic.ca"><i className="fas fa-envelope"></i> info@dacapomusic.ca</a>
                    <a role="button" className="btn text-lg-start pb-3 pb-sm-0 px-1 px-sm-3 text-light" href="tel:+14162379595"><i className="fas fa-phone"></i> (416) 237-9595</a>
                </div>
            </div>
        </div>
    )
}

export default TopSocial
