import React from 'react'

function OurStoryPage() {
    return (
        <div>
            <div className="container my-5">

                <h3 className="display-4 text-muted">Our Story</h3>
                <hr className="mb-5" />

                <div className="row g-0">
                    <div className="col-md-4 text-center text-md-start">
                        <img src={require("../img/school.JPG")} className="img-fluid rounded img-thumbnail" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ms-3">
                            <h5 className="card-title mb-4">A brief history of DCAM:</h5>
                            <p className="card-text">Da Capo Academy of Music (DCAM) began as an in-home piano studio and opened its doors at Humbertown Shopping Centre in September 2018. Our name comes from the Italian musical term “Da Capo”, which translates to “from the top” – hence our slogan: “Teaching music from the top!” At DCAM, we offer private music lessons to students of all ages and skill levels and also prepare them for RCM exams (Royal Conservatory of Music), recitals, auditions, and competitions. To showcase their progress, students have an opportunity to participate in one or both of our bi-annual music recitals. We are passionate about music and love to pass this passion on to our students! Whether you are a parent wanting to start your child on a musical path or an adult who has finally decided seriously start learning a music instrument – we would love to have you at our school!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurStoryPage
