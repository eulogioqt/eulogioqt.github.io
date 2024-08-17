import React from "react";

import Header from "./components/Header";

import Inicio from "./sections/Inicio";
import Proyectos from "./sections/Proyectos";
import Experiencia from "./sections/Experiencia";
import Formacion from "./sections/Formacion";

import '../../css/app.css';

const App = () => {
    return (
        <>
            <Header />

            <Inicio />
            <Proyectos />
            <Experiencia />
            <Formacion />
        </>
    )
}

export default App;
