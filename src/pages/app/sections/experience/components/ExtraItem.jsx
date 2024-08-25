import linkIcon from "/src/assets/images/linkIcon.jpg";

const ExtraItem = ({ photo, title, date, description, url }) => {
    return (
        <div className="col">
            <div href={url} target="_blank" className="card h-100">
                <img
                    src={photo}
                    className="card-img-top hover"
                />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-top">
                        <h5 className="card-title">{title}</h5>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <img className="social-icon small" src={linkIcon} alt="Link Icon" />
                        </a>
                    </div>
                    <p className="text-muted">{date}</p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ExtraItem;