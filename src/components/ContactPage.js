import React from 'react'

function ContactPage() {
    return (
        <div>
            <div className="container mt-5">

                <h3 className="display-4 text-muted">Contact Us & Directions</h3>
                <hr />

                <div className="row my-5">

                    <div className="col-lg-6 mb-5 mb-lg-0 px-4">

                        <h2 className="text-center mb-3">Contact Form</h2>
                        <p className="mb-5 text-center text-muted ">Have a question about music lessons?<br /> Just fill out this quick form and we will get back to you as soon as we can!</p>

                        <form>
                            <div className="row my-4 px-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">First Name:</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" />
                                </div>
                            </div>

                            <div className="row mb-4 px-3">
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone:</label>
                                    <input type="tel" className="form-control" id="phone" name="phone" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" />
                                </div>
                            </div>

                            <div className="row-md-12 px-3 mb-4">
                                <label htmlFor="feedback" className="form-label">Your Feedback:</label>
                                <textarea className="form-control" rows="4" id="feedback"></textarea>
                            </div>

                            <div className="row justify-content-center mb-4 px-3">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>

                        </form>

                    </div>


                    <hr className="d-md-none" />

                    <div className="col-lg-6 px-5 mt-5 mt-md-0">
                        <h2 className="text-center mb-3">Address & Directions</h2>
                        <p className="mb-5 text-center text-muted">We are located inside the Humbertown Shopping Centre in the beautiful neighbourhood of Humber Valley Village:</p><br />

                        <div className="row mb-4">
                            <div className="col">
                                <h5 className="pb-2">Our Contact:</h5>
                                <a role="button" className="btn text-nowrap p-0" href="tel:+14162379595"><i className="fas fa-phone"></i> (416) 237-9595</a><br />
                                <a role="button" className="btn text-nowrap p-0" href="mailto:info@dacapomusic.ca"><i className="fas fa-envelope"></i> info@dacapomusic.ca</a>
                            </div>

                            <div className="col">
                                <h5 className="pb-2">Our Address:</h5>
                                <i className="fas fa-map-marker-alt"></i> 270 The Kingsway,<br /> Etobicoke, ON<br /> M9A 3T7<br />(Humbertown Shopping Centre)<br /><br />
                            </div>
                        </div>

                        <div className="row">
                            <h5 className="pb-2">If arriving by TTC:</h5>
                            <ol>
                                <li>On the green line (line 2), get off at <strong>Royal York</strong> station</li>
                                <li>Take any of the following buses and get off at <strong>Strath Humber Ct</strong>:
                                    <ul>
                                        <li>73 Royal York B or C</li>
                                        <li>48 Rathburn</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>


                    </div>

                </div>


                {/* <div className="row justify-content-center mt-5">

                <h2 className="text-center mb-4">Find us on Google Maps</h2>

                <div className="col-lg-12 text-center" style={{height: "100%", overflow: "hidden"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3573768243464!2d-79.52142184302336!3d43.66153676383621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37bb608630c7%3A0x69f2141676b811d2!2sDa%20Capo%20Academy%20of%20Music!5e0!3m2!1sen!2sca!4v1637119011069!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy">
                    </iframe>
                </div>
            </div> */}

            </div>
        </div>

    )
}

export default ContactPage
