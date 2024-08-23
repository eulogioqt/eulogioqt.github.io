const ExtraItem = ({ photo, title, date, description, url }) => {
    return (
        <div className="col mt-0">
            <a href={url} target="_blank" className="card card-click h-100">
                <img
                    src={photo}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="text-muted">{date}</p>
                    <p className="card-text">{description}</p>
                </div>
            </a>
        </div>
    );
}

export default ExtraItem;