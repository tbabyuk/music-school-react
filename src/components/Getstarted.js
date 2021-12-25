import React from 'react'

function Getstarted() {
    return (
        <div>
            <div className="container-fluid get-started d-flex align-items-center">

                <div className="filter p-4 rounded ms-md-5">
                    <h2 className="display-4 text-light">Ready to get started?</h2>
                    <p className="lead text-light pt-2">Ready to begin your musical journey with DCAM?<br />Schedule your free in-person or online trial lesson today!</p>
                    <div className="pt-4 text-center">
                        <button type="button" className="btn btn-warning text-light btn-lg mb-3 mb-sm-0 me-3 text-nowrap" data-bs-toggle="modal" data-bs-target="#trialModal">Free Trial Lesson</button>
                        <button type="button" className="btn btn-primary btn-lg mt-3 mt-sm-0 ms-3 text-nowrap" data-bs-toggle="modal" data-bs-target="#infoModal">Download Info Pack</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Getstarted
