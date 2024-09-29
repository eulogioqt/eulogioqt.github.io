import React from "react";

import Header from "./components/Header";

import Welcome from "./sections/welcome/Welcome";
import Projects from "./sections/projects/Projects";
import Studies from "./sections/studies/Studies";
import Experience from "./sections/experience/Experience";

import './css/app.css';

const App = () => {
    return (
        <>
            <Header />

            <Welcome />
            <Projects />
            <Studies />
            <Experience />
        </>
    )
}

export default App;
