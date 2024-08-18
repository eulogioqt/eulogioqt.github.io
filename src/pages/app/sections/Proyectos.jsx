import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const Proyectos = () => {
    return (
        <Section id="proyectos" className="bg-dark">
            <div className="row w-100">
                <span className="text-start" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Proyectos recientes</span>

                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div >
        </Section >
    );
}

export default Proyectos;