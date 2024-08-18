import ProjectsData from "../data/ProjectsData.json";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    const maxElements = 3;
    const getPaddingZero = (index) => index === 0 ? "ps-0" : (index === maxElements - 1 ? "pe-0" : "");

    return (
        <>
            <div className="row row-cols-1 row-cols-lg-3 g-4 p-0 m-0">
                {ProjectsData.map((projectData, index) => (
                    index < maxElements ? <ProjectCard key={index} className={getPaddingZero(index)} {...projectData} /> : null
                ))}
            </div>

            {false && <div className="col d-flex justify-content-center mt-4">
                <button className="btn btn-secondary" >Ver todos los proyectos</button>
            </div>}
        </>
    );
}

export default ProjectList;