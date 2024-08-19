import ProjectList from "../components/ProjectList";
import Section from "../components/Section";

const Proyectos = () => {
    return (
        <Section id="proyectos">
            <div className="row w-100">
                <span className="text-center mb-3" style={{ fontSize: "3rem", fontWeight: "bold" }}>Proyectos</span>

                <ProjectList />
            </div >
        </Section >
    );
}

export default Proyectos;