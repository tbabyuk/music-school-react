import React from 'react'
import { Link } from "react-router-dom";


function PianoLessons() {
    return (
        <div>
            <div className="container my-5">

                <h3 className="display-4 text-muted">Piano Lessons</h3>
                <hr className="mb-5" />

                    <div className="row d-flex justify-content-center">
                        <div className="col-md-2 text-center d-flex align-items-center">
                            <img src={require("../../img/piano-lessons/piano_lesson.png")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title mb-4 text-center dcam-text-orange">Overview</h4>
                                <p className="card-text">Piano is the most popular instrument in the world – and for many good reasons. It’s very visual, extremely expressive, and, unlike many other instruments, allows us to play a large number of notes at the same time. It’s sort of like having a whole orchestra at your fingertips! But as a wise man once said (and as many experienced pianists will tell you): “It’s easy to play the piano, but it’s hard to play it well”.<br /><br />

                                At DCAM, we believe technique can make or break your piano playing, which is why we do our best to make sure our students (especially young children) learn correct technique from the very beginning – before it becomes a habit. Having good technique is an absolutely essential foundation to the student’s proper development and growth as a musician.<br /><br />

                                    We also realize that our students come in many different “shapes and sizes”, which is why our teachers do their best to tailor lessons to each student’s individual skill level and musical taste.

                                    We cordially invite you to start your musical journey with us and see for yourself why we have the best piano lessons in Etobicoke!</p>
                            </div>
                        </div>
                    </div>


                    <div className="col col-md-10 mx-auto mt-5">
                        <div className="card-body">
                            <h4 className="card-title mb-4 text-center dcam-text-orange">What is a good age to start piano lessons?</h4>
                            <p className="card-text"><strong>Five</strong> is the age at which most children have enough mental focus, self-awareness, and finger strength to start piano lessons. At this age, 30-minute lessons are the recommended option.

                                If your child is younger than 5 and you think they are ready to start lessons – sign them up for a free trial lesson and we will be happy to give you our recommendation!</p>
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
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title mb-4 text-center dcam-text-orange">Materials</h4>
                                <p className="card-text">For complete beginners, we like to use “The ABC of Piano Playing” series by Boris Berlin, which contains Books 1, 2, and 3. These books are a great introduction to the keyboard and music notation and contain many simple and catchy tunes. After finishing all three of these books, students have several options. Those following the Royal Conservatory path will be able to start either the “Preparatory A Piano Repertoire” or jump straight into the “Level 1 Piano Repertoire”. For students who do not wish to do the Royal Conservatory exams, books will be chosen based on their individual musical preferences.</p>
                            </div>
                        </div>
                        <div className="col-md-2 text-center d-flex align-items-center">
                            <img src={require("../../img/piano-lessons/abc books.jpg")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
                        </div>
                    </div>


                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-md-2 text-center d-flex align-items-center">
                            <img src={require("../../img/piano-lessons/dcam-piano.jpg")} className="img-fluid rounded img-thumbnail mt-5" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title mb-4 text-center dcam-text-orange">Instruments</h4>
                                <p className="card-text">At DCAM, students learn using upright acoustic pianos. While we don’t expect all our students to have an acoustic piano at home, we do recommend getting at least a weighted keyboard. Weighted simply means that the keys have a slight resistance, similar to that of a real piano.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-10 mx-auto mt-5">
                        <div className="card-body">
                            <h4 className="card-title mb-4 text-center dcam-text-orange">Styles</h4>
                            <p className="card-text">
                                Students can choose to learn any musical style they want on the piano, such as pop, jazz,  classNameical, etc. Those wishing to go the Royal Conservatory route should expect a heavy focus on classNameical music.</p>
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

export default PianoLessons
