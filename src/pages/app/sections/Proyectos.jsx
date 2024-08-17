import Section from "../components/Section";

const Proyectos = () => {
    return (
        <Section id="proyectos">
            <span style={{ fontSize: "3rem", fontWeight: "bold" }}>Proyectos</span>
            <span style={{ fontSize: "1.5rem" }}>En desarrollo...</span>

            <span className="mt-5">
                Puedes probar mi último proyecto web&nbsp;
                <a href="https://eulogioqt.github.io/snake-game/" target="_blank">aquí</a>.
            </span>
        </Section>
    );
}

export default Proyectos;