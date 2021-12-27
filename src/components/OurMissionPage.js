import React from 'react'

function OurMissionPage() {
    return (
        <div>
            <div className="container my-5">

                <h3 className="display-4 text-muted">Our Mission</h3>
                <hr />

                <div className="row-10 m-auto my-5">
                    <div className="text-center">
                        <img src={require("../img/mission.png")} className="img-fluid rounded img-thumbnail mb-5" />
                    </div>

                    <h5 className="pb-5">At DCAM, we are serious about our mission, which is three-fold:</h5>

                    <div className="mb-5">
                        <h5>1. To enrich the lives of our students through music</h5>
                        <p>We strongly believe that playing a musical instrument makes life richer, more interesting and more colourful. We are proud to be able to impart this skill to our students.</p>
                    </div>

                    <div className="mb-5">
                        <h5>2. To provide quality music education tailored to our students’ goals, abilities, and interests</h5>
                        <p>We listen to our students and parents carefully and do our best to tailor their lessons in a way that would best meet their individual goals, abilities, and interests.</p>
                    </div>

                    <div className="mb-5">
                        <h5>3. To create a fun, safe, friendly, and inclusive environment for both students and teachers</h5>
                        <p>We are convinced that individuals learn and work best in an environment that is fun, safe, friendly, and inclusive. Maintaining such an environment is one of our top priorities.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OurMissionPage
