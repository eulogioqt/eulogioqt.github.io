import githubIcon from "/src/assets/images/githubIcon.jpg";
import linkIcon from "/src/assets/images/linkIcon.jpg";

const ProjectCard = () => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src="/photo.jpg" className="card-img-top" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title m-0">InfoChange</h5>
                        <div>
                            <a href="https://www.github.com/eulogioqt" target="_blank" rel="noopener noreferrer">
                                <img className="social-icon small me-2" src={githubIcon} alt="GitHub Icon" />
                            </a>

                            <a href="https://es.link.com/in/eulogio-quemada-541780296" target="_blank" rel="noopener noreferrer">
                                <img className="social-icon small" src={linkIcon} alt="link Icon" />
                            </a>

                        </div>
                    </div>

                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;