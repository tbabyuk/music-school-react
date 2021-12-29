import React from 'react'

function RatesPage() {
    return (
        <div>
            <div className="container my-5">

                <h3 className="display-4 text-muted">Rates</h3>
                <hr />
                <div className="col-10 m-auto my-5">
                    <p>Lessons at Da Capo Academy of Music are based on the school system and are divided into Fall, Winter, Spring, and an optional Summer term. Your exact rates for each term will depend on which day of the week your lesson falls on, as some days are affected by statutory holidays or there are simply less of them in a given term.</p>

                    <p>Please review below our policies surrounding lessons/payments and click the download button to view payment schedules for each term.</p>

                    <p>*Students not wishing to follow the term system may opt to study on a Pay-As-You-Go basis. Rates for Pay-As-You-Go lessons are separate and can be viewed here.</p>
                    <hr />
                </div>

                <section className="col-10 m-auto text-center my-5">
                    <h4 className="display-6 text-uppercase">Private Lesson Rates</h4>
                    <a href={require("../img/private-lesson-rates.pdf")} download>
                        <button type="button" className="btn dcam-green text-white border-dark btn-lg my-5"><i className="fas fa-file-pdf fa-sm" />Download Payment Schedule</button>
                    </a>

                    <div className="col-md-9 m-auto text-start">
                        <h5 className="text-uppercase mb-4 text-start">Private Lessons:</h5>
                        <ul>
                            <li>There is no sales tax on music lessons – rates are exactly as indicated</li>
                            <li>Payment for each term must be made in full before the first lesson of that term</li>
                            <li>Lessons may be discontinued with one week’s notice. Refund will be provided minus $25 early withdrawal fee</li>
                            <li>All lessons must be completed by the end of each term and cannot be carried over to the next term</li>
                            <li>Students are welcome to register for lessons mid-term, your lessons will simply be pro-rated to the end of ongoing term</li>
                            <li>Families with more than one child enrolled in private lessons qualify for our Family Discount</li>
                            <li>A $20 registration fee applies to all new students or students who return to lessons after being inactive</li>
                        </ul>
                    </div>
                </section>
                <hr />
                <section className="col-10 m-auto text-center mt-5">
                    <h4 className="display-6 text-uppercase">Semi-Private Lesson Rates</h4>
                    <a href={require("../img/semi-private-lesson-rates.pdf")} download>
                        <button type="button" className="btn dcam-green text-white border-dark btn-lg my-5"><i className="fas fa-file-pdf fa-sm" />Download Payment Schedule</button>
                    </a>

                    <div className="col-md-9 m-auto text-start">
                        <h5 className=" text-uppercase mb-4 text-start">Semi-Private Lessons:</h5>
                        <ul>
                            <li>There is no sales tax on music lessons – rates are exactly as indicated</li>
                            <li>Payment for each term must be made in full before the first lesson of that term</li>
                            <li>Lessons may be discontinued with one week’s notice. Refund will be provided minus $25 early withdrawal fee</li>
                            <li>All lessons must be completed by the end of each term and cannot be carried over to the next term</li>
                            <li>Students are welcome to register for lessons mid-term, your lessons will simply be pro-rated to the end of ongoing term</li>
                            <li>Unlike for private lessons, the Family Member discount cannot be applied to Semi-Private Lessons</li>
                            <li>A $20 registration fee applies to all new students or students who return to lessons after being inactive</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div >
    )
}

export default RatesPage
