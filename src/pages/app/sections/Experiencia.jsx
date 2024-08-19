import Section from "../components/Section";

const Experiencia = () => {
    return (
        <Section id="experiencia">
            <span className="text-center mb-3" style={{ fontSize: "3rem", fontWeight: "bold" }}>Experiencia</span>

            <div className="col-md-9 d-flex flex-column">
                <div className="d-sm-flex d-block justify-content-between">
                    <div className="d-flex align-items-center mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyU8IMyUOX3AoWlwPpE2DYGJUONtxI_CgOfA&s"
                            className="rounded rounded-4" style={{ height: 75 }} />
                        <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                            <span className="fw-bold fs-4">MAPIR</span>
                            <span className="fs-5 text-secondary">Desarrollador de Robots</span>
                            <span className="text-secondary text-end fs-6 d-sm-none d-block">Abril 2024 - Actualidad</span>
                        </div>
                    </div>

                    <span className="text-secondary text-end fs-6 d-sm-block d-none">Abril 2024 - Actualidad</span>
                </div>

                <p>
                    Programación de robots con el software ROS2 y Python, uso de inteligencia artificial y
                    de técnicas de detección y reconocimiento facial, speech-to-text y text-to-speech
                    entre otras para lograr una interacción humano robot lo más natural posible.
                </p>
            </div>


        </Section>
    );
}

export default Experiencia;