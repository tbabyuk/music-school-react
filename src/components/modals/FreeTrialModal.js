import React from 'react'

function FreeTrialModal() {
    return (
        <div>
            <div className="modal fade" id="trialModal" tabindex="-1">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header dcam-red text-light">
                            <h5 className="modal-title">Free Trial Lesson - Registration Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="form-text pb-3 text-end"><small className="mark text-muted">Fields marked with an * are required.</small></div>
                            <form>
                                <div className="mb-3">
                                    <label for="studentName" className="form-label">Student Name*</label>
                                    <input type="text" className="form-control" id="studentName" />
                                </div>

                                <div className="mb-3">
                                    <label for="parentName" className="form-label">Parent/Guardian Name*<span className="small text-muted"> (enter "na" if you're an adult student)</span></label>
                                    <input type="text" className="form-control" id="parentName" />
                                </div>

                                <div className="mb-3">
                                    <label for="instrument" className="form-label">Instrument*</label>
                                    <select className="form-select" id="instrument" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="1">piano</option>
                                        <option value="2">guitar</option>
                                        <option value="3">drums</option>
                                        <option value="3">voice</option>
                                        <option value="3">music theory</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label for="phone" className="form-label">Phone*</label>
                                    <input type="tel" className="form-control" id="phone" />
                                </div>

                                <div className="mb-3">
                                    <label for="email" className="form-label">Email*</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">How did you hear about us?*</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="source" value="" id="google" />
                                        <label className="form-check-label" for="google">Google Search</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="source" value="" id="humber" />
                                        <label className="form-check-label" for="humber">Humbertown Sign</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="source" value="" id="friend" />
                                        <label className="form-check-label" for="friend">Friend/Relative</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="source" value="" id="social" />
                                        <label className="form-check-label" for="social">Social Media (Facebook/Instagram)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="source" value="" id="print" />
                                        <label className="form-check-label" for="print">Print Flyer</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="source" value="" id="blog" />
                                        <label className="form-check-label" for="blog">Blog Article</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="source" value="" id="other" />
                                        <label className="form-check-label" for="other">Other</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Notes (optional)</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>
                            <div className="d-flex-column py-2">
                                <button type="submit" className="btn btn-primary d-block mx-auto">Submit Form</button>
                                <span className="mark small text-muted d-block text-center mt-3">We will contact you within 2 business days to arrange your trial lesson!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FreeTrialModal




