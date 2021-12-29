import React from 'react';
import FreeTrialModal from "./modals/FreeTrialModal";
import InfoPackModal from "./modals/InfoPackModal";


function Banner() {

    return (
        <div className="container-fluid bg-dcam bg-light mb-0 banner px-0">
            <div className="container-fluid d-flex justify-content-end" style={{height: "100%"}}>

                <div className="col-lg-9 col-xxl-9 pe-0 d-flex flex-column justify-content-center text-center" style={{paddingLeft: "0px"}}>
                    <h1 className="display-5 dcam-text-orange roboto-ital roboto-bold">Discover the world of possibilities with music.</h1>
                    <h3 className="mb-3 text-dark py-4 px-3 rounded text-center">Music lessons for all ages and skill levels levels in the charming Etobicoke neighbourhood of Humber Valley Village.</h3>

                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-2 overflow-hidden">
                        <button type="button" className="btn btn-warning text-light btn-lg mb-3 mb-sm-0 me-sm-4 text-nowrap" data-bs-toggle="modal" data-bs-target="#trialModal" onClick={() => FreeTrialModal()}>Free Trial Lesson</button>
                        <button type="button" className="btn btn-primary btn-lg mt-3 mt-sm-0 ms-sm-4 text-nowrap" data-bs-toggle="modal" data-bs-target="#infoModal" onClick={() => InfoPackModal()}>Download Info Pack</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
