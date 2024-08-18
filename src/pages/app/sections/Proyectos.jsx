import ProjectList from "../components/ProjectList";
import Section from "../components/Section";

const Proyectos = () => {
    return (
        <Section id="proyectos" className="bg-dark">
            <div className="row w-100">
                <span className="text-center"
                    style={{ fontSize: "3rem", fontWeight: "bold" }}>Proyectos</span>

                <ProjectList />
            </div >
        </Section >
    );
}

export default Proyectos;