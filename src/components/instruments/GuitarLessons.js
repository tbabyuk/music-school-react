import React from 'react'
import { Link } from "react-router-dom";


function GuitarLessons() {
    return (
        <div>
            <div className="container my-5">

                <h3 className="display-4 text-muted">Guitar Lessons</h3>
                <hr className="mb-5" />

                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card-body">
                            <h4 className="card-title mb-4 text-center dcam-text-orange">Overview</h4>
                            <p className="card-text">Whether you want to be in a band, impress your friends at a party, or just play for yourself – the possibilities are endless when it comes to the  guitar! No wonder it’s one of the most popular instruments today!<br /><br />

                            At Da Capo Academy of Music, you learn guitar through a fun and gradual process that combines proper technique with music that you actually want to play! Just like guitars, we realize that students come in many different “shapes and sizes”, which is why our teachers do their best to tailor lessons to each student’s individual skill level and musical taste.<br /><br />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center d-flex align-items-center">
                        <img src={require("../../img/guitar-lessons/guitar-boy.jpg")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
                    </div>

                </div>


                <div className="col col-md-10 mx-auto mt-5">
                    <div className="card-body">
                        <h4 className="card-title mb-4 text-center dcam-text-orange">What is a good age to start guitar lessons?</h4>
                        <p className="card-text"><strong>Six</strong> is our minimum recommended age for starting guitar lessons. At this age, most children are developed enough physically to be able to comfortably hold a small guitar and have enough finger-strength to be able to depress the strings. However, if your child is younger and you think they are ready to start, we would be happy to give them a free trial lesson and give you our recommendation.</p>
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

                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-md-2 text-center d-flex align-items-center">
                        <img src={require("../../img/guitar-lessons/intro-to-guitar-book.jpg")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title mb-4 text-center dcam-text-orange">Materials</h4>
                            <p className="card-text">Beginning students can start out with our “Intro to Guitar” book series, which includes 3 books. These books help lay all the important foundation for beginning guitarists, including the reading of tablature, strumming patterns, and lots of fun songs to play along to! After completing the series, students are free to start learning songs that interest them and can join our “Band Experience” program, which allows them to get a feel for what it’s like to play in a group with other instruments and musicians.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title mb-4 text-center dcam-text-orange">Instruments</h4>
                            <p className="card-text">Students can choose to play either an acoustic, electric, or classical guitar. For young children, guitars with nylon strings are recommended, as they don’t put a lot of strain on the fingers. Children will also require a guitar that fits their size/age, which can be bought or rented from most music stores or directly from us. Students are expected to have their own guitar and to bring it with them to every lesson.<br /><br />
                                Not sure what the right guitar size is for your child? Check out <a href="https://dacapomusic.ca/child-guitar-sizes/" target="_blank">our blog article on guitar sizes</a>.<br /><br />
                                Need a guitar? Talk to us or check out <a href="https://www.long-mcquade.com/" target="_blank">Long & McQuade</a>, who offer buy or rent options.</p>
                        </div>
                    </div>
                    <div className="col-md-2 text-center d-flex align-items-center">
                        <img src={require("../../img/guitar-lessons/guitar-lesson.jpg")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
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

export default GuitarLessons
