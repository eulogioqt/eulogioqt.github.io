import githubIcon from "/src/assets/images/githubIcon.jpg";
import linkIcon from "/src/assets/images/linkIcon.jpg";

const badges = {
    "React": "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "Unity": "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
    "Express": "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
    "R": "https://img.shields.io/badge/RStudio-75AADB?style=for-the-badge&logo=RStudio&logoColor=white"
}

const ProjectItem = ({ index, photo, title, github, link, description, tech }) => {
    const paddingX = (index % 3) === 0 ? "ps-0 pe-lg-3 pe-0" : (index % 3 === 2 ? "pe-0 ps-lg-3 ps-0" : "px-lg-2 px-0");

    return (
        <div className={"col " + paddingX}>
            <div className="card h-100">
                <img src={photo} className="card-img-top hover" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-top mb-2">
                        <h5 className="card-title m-0">{title}</h5>
                        <div className="d-flex">
                            {github && <a href={github} target="_blank" rel="noopener noreferrer">
                                <img className="social-icon small me-2" src={githubIcon} alt="GitHub Icon" />
                            </a>}

                            {link && <a href={link} target="_blank" rel="noopener noreferrer">
                                <img className="social-icon small" src={linkIcon} alt="Link Icon" />
                            </a>}
                        </div>
                    </div>

                    <p className="card-text">
                        {description}
                    </p>
                </div>
                <div className="card-footer pb-0">
                    <small className="text-body-secondary">
                        {tech.map((t, index) => <img key={index} className="me-2 mb-2 rounded-2" src={badges[t]} />)}
                    </small>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;