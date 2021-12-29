import React from 'react'
import { Link } from "react-router-dom";



function DrumLessons() {
    return (
        <div>
            <div className="container my-5">

                <h3 className="display-4 text-muted">Drum Lessons</h3>
                <hr className="mb-5" />

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card-body">
                            <h4 className="card-title mb-4 text-center dcam-text-orange">Overview</h4>
                            <p className="card-text">Whether you want to play in a band, improve your sense of rhythm, or just enjoy yourself – there is no denying that drums are just an all-round fun instrument to play. In our studio, we incorporate real song tracks into our lessons so that you get a genuine playing experience! </p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center d-flex align-items-center">
                        <img src={require("../../img/drum-lessons/drum-boy.png")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
                    </div>

                </div>


                <div className="col col-md-10 mx-auto mt-5">
                    <div className="card-body">
                        <h4 className="card-title mb-4 text-center dcam-text-orange">What is a good age to start drum lessons?</h4>
                        <p className="card-text">At <b>six</b>, most children are grown enough to have a comfortable reach around the drums and are mentally ready to get the maximum benefit from their lessons. However, if your child is younger and you think they are ready to start, we would be happy to give them a free trial lesson and give you our recommendation.</p>
                    </div>
                </div>


                <div className="col col-md-10 mx-auto mt-5">
                    <div className="card-body">
                        <h4 className="card-title mb-4 text-center dcam-text-orange">Lesson Format</h4>
                        <p className="card-text"><u>Private lessons</u>: these are one-on-one lessons with student and teacher. Private lessons are a great option for students looking for highly-focused and individualized music instruction. The teacher is able to give their full attention to one student and students normally progress faster in this environment.<br /><br />

                            <u>Semi-private lessons</u>: these lessons consist of two students per teacher. Semi-private lessons can be a budget-friendly option for parents with two children or two friends wanting to learn the same instrument together. The one obvious drawback is that students don’t receive as much focused and individualized attention from the teacher as they do with private lessons.</p>
                    </div>
                </div>

                <div className="col col-md-10 mx-auto mt-5">
                    <div className="card-body">
                        <h4 className="card-title mb-4 text-center dcam-text-orange">Lesson Duration</h4>
                        <p className="card-text">
                            At DCAM, students can choose between <strong>30-minute</strong>, <strong>45-minute</strong>, or <strong>1-hour lessons</strong>. Small children generally start with 30-minute lessons and increase lesson duration as they get older and/or with the recommendation from their teacher. For teenagers and adults, a minimum lesson time of 45 minutes is strongly recommended.
                        </p>

                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-3 text-center d-flex align-items-center">
                        <img src={require("../../img/drum-lessons/drums-books.png")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h4 className="card-title mb-4 text-center dcam-text-orange">Materials</h4>
                            <p className="card-text">We have a variety of drum books available to choose from and teachers also often use their own handouts during lessons. The teacher usually recommends a book based on the student’s individual goals and abilities.</p>
                        </div>
                    </div>
                </div>


                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title mb-4 text-center dcam-text-orange">Instruments</h4>
                            <p className="card-text">Our studio uses a top-quality electric drum kit with an amp. Students are able to connect their smartphones directly to the drum kit and play along with their favorite song.<br /><br />
                            Don’t have a drum kit? Talk to us or check out <a href="https://www.long-mcquade.com/" target="_blank">Long & McQuade</a>. They offer both acoustic and electric drum kits for both sale and rent.</p>
                        </div>
                    </div>
                    <div className="col-md-2 text-center d-flex align-items-center">
                        <img src={require("../../img/drum-lessons/studio-drums.jpg")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
                    </div>

                </div>

                <div className="col col-md-10 mx-auto mt-5">
                    <div className="card-body">
                        <h4 className="card-title mb-4 text-center dcam-text-orange">Styles</h4>
                        <p className="card-text">
                            Students can choose from a wide variety of genres such as rock, jazz, classical, etc. Those wishing to go the Royal Conservatory route, however, should expect a heavy focus on classical music.</p>
                    </div>
                </div>


                <div className="col col-md-10 mx-auto mt-5">
                    <div className="card-body">
                        <h4 className="card-title mb-4 text-center dcam-text-orange">Teachers</h4>
                        <p className="card-text">
                            Our teachers are all qualified professionals and passionate musicians. We do our best to match a student with a teacher that we think would best fit their musical goals as well as their personalities. We understand that while some students prefer a relaxed teaching approach, there are always those for whom a more strict approach is more effective. Students also have the option to request to change their teacher if they wish to do so. Learn more about our teachers on our <Link to="/teachers">Teachers Section.</Link></p>
                    </div>
                </div>

                <div className="col col-md-10 rounded mx-auto text-center mt-5 dcam-blue-reg py-5">
                    <button type="button" className="btn btn-warning btn-lg text-light mb-3 mb-sm-0 text-nowrap" data-bs-toggle="modal" data-bs-target="#trialModal">Get My Free Trial Lesson!</button>
                    <p className="mt-4 col-md-8 mx-auto small text-light">Just fill out our quick trial lesson form and wait to hear from us within 1-2 business days. If you like your trial lesson, you can sign up for regular lessons with us! Our lessons are available online (Zoom or Skype) as well as in-person if you live close to our location. Start learning your favorite instrument with one of our amazing teachers today!</p>
                </div>


            </div>
        </div>
    )
}

export default DrumLessons
