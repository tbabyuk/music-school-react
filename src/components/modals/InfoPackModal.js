import React from 'react'


function InfoPackModal() {
    return (
        <div>
            <div className="modal fade" id="infoModal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header dcam-red text-light">
                            <h5 className="modal-title">Da Capo Academy of Music - Info Pack</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <small>Learn more about what we offer and how our lessons work with our "Info Pack" (PDF). Just enter your email address below to have it sent to you!</small>
                            <div className="input-group my-4">
                                <input type="email" id="email2" className="form-control" placeholder="Enter your email address" aria-label="Recipient's email" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary" type="submit" id="button-addon2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPackModal
