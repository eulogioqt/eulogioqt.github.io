import React, { useState } from 'react';
import Section from "../components/Section";

import githubIcon from "/src/assets/images/githubIcon.jpg";
import linkedInIcon from "/src/assets/images/linkedInIcon.jpg";
import emailIcon from "/src/assets/images/emailIcon.jpg";

const email = "euquemada@gmail.com";

const Inicio = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }).catch(err => {
            console.error('Error al copiar el texto al portapapeles: ', err);
        });
    };

    return (
        <Section id="inicio">
            <div className="row flex-grow-1 align-items-center mt-md-0 mt-5">
                <div className="col-md-5 d-flex justify-content-center align-items-center d-md-none mt-md-0 mt-5">
                    <img style={{ width: "70%" }} className="primary-color glow rounded-circle"
                        src="https://www.github.com/eulogioqt.png" alt="Eulogio Quemada" />
                </div>

                <div className="col-md-7 d-flex flex-column justify-content-center mt-md-0 mt-3">
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                        ¡Hola, soy&nbsp;<span className="primary-color glow">Eulogio Quemada</span>!
                    </p>

                    <p style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
                        Soy estudiante de <span className="primary-color">Ingeniería del Software</span> en
                        la <span className="primary-color">Universidad de Málaga</span>.
                    </p>

                    <p className="d-flex flex-column">
                        Actualmente en el último curso de la carrera, he desarrollado múltiples proyectos,
                        tanto individualmente como en grupo, abarcando múltiples disciplinas, como programación de
                        robots, desarrollo web, desarrollo de videojuegos, programación con sockets...
                    </p>

                    <div className="d-flex justify-content-start align-items-center">
                        <a href="https://www.github.com/eulogioqt" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon me-2" src={githubIcon} alt="GitHub Icon" />
                        </a>

                        <a href="https://es.linkedin.com/in/eulogio-quemada-541780296" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon me-2" src={linkedInIcon} alt="LinkedIn Icon" />
                        </a>

                        <a href={"mailto:" + email} onClick={handleCopyToClipboard} style={{ textDecoration: "none" }}>
                            <div className="d-flex email-container">
                                <img className="social-icon email" src={emailIcon} alt="Email Icon" />
                                <span>{email}</span>
                            </div>
                            {copied &&
                                <span class="badge text-bg-secondary position-absolute mt-2" >
                                    ¡Email copiado al portapapeles!</span>
                            }
                        </a>
                    </div>
                </div>

                <div className="col-md-5 d-flex justify-content-center align-items-center d-none d-md-flex">
                    <img style={{ width: "100%" }} className="primary-color glow rounded-circle"
                        src="https://www.github.com/eulogioqt.png" alt="Eulogio Quemada" />
                </div>
            </div>
        </Section>
    );
}

export default Inicio;
