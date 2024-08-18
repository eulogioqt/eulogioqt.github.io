import ProjectList from "../components/ProjectList";
import Section from "../components/Section";

const Proyectos = () => {
    return (
        <Section id="proyectos" className="bg-dark">
            <div className="row w-100">
                <span className="text-start" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Proyectos recientes</span>

                <ProjectList />
            </div >
        </Section >
    );
}

export default Proyectos;