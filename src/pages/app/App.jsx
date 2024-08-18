import React from "react";

import Header from "./components/Header";

import Inicio from "./sections/Inicio";
import Proyectos from "./sections/Proyectos";
import Experiencia from "./sections/Experiencia";
import Estudios from "./sections/Estudios";

import '../../css/app.css';

const App = () => {
    return (
        <>
            <Header />

            <Inicio />
            <Proyectos />
            <Estudios />
            {false && <Experiencia />}
        </>
    )
}

export default App;
