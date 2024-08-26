import { useState } from "react";

import ProjectsData from "../../../data/ProjectsData.json";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
    const [maxElements, setMaxElements] = useState(3);

    return (
        <>
            <div className="row row-cols-1 row-cols-lg-3 g-4 p-0 m-0">
                {ProjectsData.map((projectData, index) => (
                    index < maxElements ? <ProjectItem key={index} index={index} {...projectData} /> : null
                ))}
            </div>

            <div className="col d-flex justify-content-center mt-4">
                {maxElements < ProjectsData.length &&
                    <button className="btn btn-dark" onClick={() => setMaxElements(maxElements => maxElements + 3)}>Ver más</button>}
            </div>
        </>
    );
}

export default ProjectList;