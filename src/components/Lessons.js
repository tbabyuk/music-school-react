import React from 'react'
import { useParams } from "react-router-dom"
import PianoLessons from "./instruments/PianoLessons";
import GuitarLessons from "./instruments/GuitarLessons";
import DrumLessons from "./instruments/DrumLessons";
import ErrorPage from "./ErrorPage";

function Lessons() {

    let { instrument } = useParams();



    switch (instrument) {
        case "piano-lessons":
            return <PianoLessons />
            break;
        case "guitar-lessons":
            return <GuitarLessons />
            break;
        case "drum-lessons":
            return <DrumLessons />
            break;
        default:
            return <ErrorPage />
    }


}

export default Lessons
