import React from 'react'

function Testimonials() {
    return (
        <div>
            <div className="container py-5" id="reviews">

                <div className="col-md-12 text-center mb-5 text-dark">
                    <h2 className="display-6">What our customers say</h2>
                </div>


                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">

                    <div className="col">
                        <div className="card testimonials-bg testimonials-shadow p-4">
                            <div className="text-start pb-2"><i className="fas fa-quote-left fa-lg"></i></div>
                            <p className="roboto-ital">
                                My 5 year old son loves his guitar lessons . He has lot of fun with Andrew. Great school with great teachers. Good location with lot of free parking. I can only recommend it.
                            </p>
                            <div className="text-end">
                                <i className="fas fa-quote-right fa-lg"></i>
                            </div>
                            <div className="d-flex pt-4">
                                <div>
                                    <img src={require("../img/testimonials/lenka.png")} />
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0">Lenka Wendl</h6>
                                    <small>parent</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="card testimonials-bg testimonials-shadow p-4">
                            <div className="text-start pb-2"><i className="fas fa-quote-left fa-lg"></i></div>
                            <p className="roboto-ital">
                                I have been learning from the teachers here for many years, from when I was a little kid to now when I'm well into high school. Even now, they're still always teaching me something new during our lessons. Da Capo is a great school with teachers who are truly passionate about music.
                            </p>
                            <div className="text-end"><i className="fas fa-quote-right fa-lg"></i></div>
                            <div className="d-flex pt-4">
                                <div>
                                    <img src={require("../img/testimonials/nicole.png")} />
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0">Nicole Planeta</h6>
                                    <small>student</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="card testimonials-bg testimonials-shadow p-4">
                            <div className="text-start pb-2"><i className="fas fa-quote-left fa-lg"></i></div>
                            <p className="roboto-ital">
                                DaCapo is a wonderful place to learn music. The teachers are patient, fun, flexible and highly qualified. My daughter loves it!
                            </p>
                            <div className="text-end"><i className="fas fa-quote-right fa-lg"></i></div>
                            <div className="d-flex pt-4">
                                <div>
                                    <img src={require("../img/testimonials/daniel.png")} />
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0">Daniel Vendramin</h6>
                                    <small>parent</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="card testimonials-bg testimonials-shadow p-4">
                            <div className="text-start pb-2"><i className="fas fa-quote-left fa-lg"></i></div>
                            <p className="roboto-ital">
                                I highly recommend them. I am 36 years old and I thought it would impossible at this point of my life to learn how to play piano. I am still learning, it’s been only 8 months but their technique is great. Terry is my teacher and honestly, I couldn’t think of anyone better for this.
                            </p>
                            <div className="text-end"><i className="fas fa-quote-right fa-lg"></i></div>
                            <div className="d-flex pt-4">
                                <div>
                                    <img src={require("../img/testimonials/viviane.png")} />
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0">Viviane Sena</h6>
                                    <small>student</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonials
