import Section from "../../components/Section";
import ProjectList from "./components/ProjectList";

const Projects = () => {
    return (
        <Section id="projects">
            <div className="row w-100">
                <span className="text-center mb-3" style={{ fontSize: "3rem", fontWeight: "bold" }}>Proyectos</span>

                <ProjectList />
            </div >
        </Section >
    );
}

export default Projects;