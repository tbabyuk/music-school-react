import React from 'react'
import { useParams } from "react-router-dom"
import PianoLessons from "./instruments/PianoLessons";
import GuitarLessons from "./instruments/GuitarLessons";
import DrumLessons from "./instruments/DrumLessons";
import VoiceLessons from "./instruments/VoiceLessons";
import TheoryLessons from "./instruments/TheoryLessons";
import IntroToMusic from "./instruments/IntroToMusic";
import ToddlerLessons from "./instruments/ToddlerLessons";
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
        case "voice-lessons":
            return <VoiceLessons />
            break;
        case "music-theory-lessons":
            return <TheoryLessons />
            break;
        case "intro-to-music":
            return <IntroToMusic />
            break;
        case "toddler-lessons":
            return <ToddlerLessons />
            break;
        default:
            return <ErrorPage />
    }


}

export default Lessons
