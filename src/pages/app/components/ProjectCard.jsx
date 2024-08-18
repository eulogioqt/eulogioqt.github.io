import githubIcon from "/src/assets/images/githubIcon.jpg";
import linkIcon from "/src/assets/images/linkIcon.jpg";

const ProjectCard = ({ photo, title, github, link, description, tech }) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={photo} className="card-img-top" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title m-0">{title}</h5>
                        <div>
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
                <div className="card-footer">
                    <small className="text-body-secondary">{tech.map(t => t + " ")}</small>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;