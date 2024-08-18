import ProjectsData from "../data/ProjectsData.json";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    return (
        <div className="row row-cols-1 row-cols-lg-3 g-4">
            {ProjectsData.map((projectData, index) => (
                <ProjectCard key={index} {...projectData} />
            ))}
        </div>
    );
}

export default ProjectList;