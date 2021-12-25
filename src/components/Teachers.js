import React from 'react'

function Teachers() {
    return (
        <div>
            <div className="container-fluid dcam-blue-reg py-5">

                <div className="col-md-12 text-center mb-5 text-light">
                    <h2 className="display-6">Meet Our Teachers</h2>
                </div>

                <div className="row justify-content-center">

                    <div className="card p-0 my-3 mx-md-4" style={{width: "20rem"}}>
                        <img src={require("../img/teachers/raul2.jpg")} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title ovo text-center"><strong>Raul Pineda</strong></h4>
                                <p className="card-text">Originally from Havana, Cuba, Raul Pineda started his musical career at the age of eight. Dazzled by the sounds of drums and percussion...</p>
                                <div className="text-center">
                                    <a href="teachers.html#raul" className="btn btn-primary">read more</a>
                                </div>
                            </div>
                    </div>

                    <div className="card p-0 my-3 mx-md-4" style={{width: "20rem"}}>
                        <img src={require("../img/teachers/andrew2.jpg")} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title ovo text-center"><strong>Andrew Marzotto</strong></h4>
                                <p className="card-text">Andrew Marzotto is a Toronto born and based guitarist, composer and educator. He is a 2016 graduate of the Berklee College of Music...</p>
                                <div className="text-center">
                                    <a href="teachers.html#andrew" className="btn btn-primary">read more</a>
                                </div>
                            </div>
                    </div>

                    <div className="card p-0 my-3 mx-md-4" style={{width: "20rem"}}>
                        <img src={require("../img/teachers/yeri.png")} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title ovo text-center"><strong>Yeri Lim</strong></h4>
                                <p className="card-text">Yeri is a Toronto based pianist. She started playing piano at the age of 6 and has been studying diverse genres of music such as classNameical, Korean classNameical...</p>
                                <div className="text-center">
                                    <a href="teachers.html#yeri" className="btn btn-primary">read more</a>
                                </div>
                            </div>
                    </div>

                    <div className="card p-0 my-3 mx-md-4" style={{width: "20rem"}}>
                        <img src={require("../img/teachers/jonathan3.jpg")} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title ovo text-center"><strong>Jonathan Stuchbery</strong></h4>
                                <p className="card-text">Andrew Marzotto is a Toronto born and based guitarist, composer and educator. He is a 2016 graduate of the Berklee College of Music...</p>
                                <div className="text-center">
                                    <a href="teachers.html#jonathan" className="btn btn-primary">read more</a>
                                </div>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Teachers
