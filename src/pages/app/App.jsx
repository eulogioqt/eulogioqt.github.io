import React, { useEffect } from "react";
import '../../css/app.css';

const App = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const handleScroll = () => {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 60) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(currentSection)) {
                    link.classList.add('active');
                }
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="container">
                    <a className="logo" href="#inicio">
                        Eulogio Quemada
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link" href="#inicio">Inicio</a>
                            <a className="nav-link" href="#proyectos">Proyectos</a>
                            <a className="nav-link" href="#experiencia">Experiencia</a>
                            <a className="nav-link" href="#educacion">Educación</a>
                        </div>
                    </div>
                </div>
            </nav>

            <section id="inicio" className="container d-flex vh-100">
                <div className="row flex-grow-1 align-items-center mt-md-0 mt-5">
                    <div className="col-md-5 d-flex justify-content-center align-items-center d-md-none mt-md-0 mt-5">
                        <img style={{ width: "70%" }} className="primary-color glow rounded-circle"
                            src="https://www.github.com/eulogioqt.png" />
                    </div>

                    <div className="col-md-7 d-flex flex-column justify-content-center">
                        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                            ¡Hola, soy&nbsp;<span className="primary-color glow">Eulogio Quemada</span>!
                        </p>
                        <p style={{ fontSize: "1.25rem" }}>Soy estudiante de <span className="primary-color">Ingeniería del Software</span> en
                            la <span className="primary-color">Universidad de Málaga</span>.
                        </p>
                        <p className="d-flex flex-column">
                            <span>Actualmente en el <span className="primary-color">último curso</span> de la carrera,
                                he desarrollado múltiples proyectos, tanto <span className="primary-color">individualmente</span>
                                &nbsp;como <span className="primary-color">en grupo</span>, abarcando múltiples disciplinas,
                                como programación de <span className="primary-color">robots</span>,
                                desarrollo<span className="primary-color"> web</span>, desarrollo
                                de <span className="primary-color">videojuegos</span>, programación
                                con <span className="primary-color">sockets</span>...</span>
                        </p>
                    </div>

                    <div className="col-md-5 d-flex justify-content-center align-items-center d-none d-md-flex">
                        <img style={{ width: "100%" }} className="primary-color glow rounded-circle"
                            src="https://www.github.com/eulogioqt.png" />
                    </div>
                </div>
            </section>


            <section id="proyectos" className="container d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex flex-column align-items-center">
                    <span style={{ fontSize: "3rem", fontWeight: "bold" }}>Proyectos</span>
                    <span style={{ fontSize: "1.5rem" }}>En desarrollo...</span>

                    <span className="mt-5">
                        Puedes probar mi último proyecto web&nbsp;
                        <a href="https://eulogioqt.github.io/snake-game/" target="_blank">aquí</a>.
                    </span>
                </div>
            </section>

            <section id="experiencia" className="container d-flex justify-content-center align-items-center vh-100">
                <h1>Experiencia</h1>

            </section>

            <section id="educacion" className="container d-flex justify-content-center align-items-center vh-100">
                <h1>Educación</h1>

            </section>
        </>
    )
}

export default App;
