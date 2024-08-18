const StudyItem = ({ title, centre, period, description }) => {
    return (
        <li>
            <div className="row d-flex">
                <div className="col-md-6 d-flex flex-column">
                    <span className="primary-color fw-bold fs-5">{title}</span>
                    <span className="fw-bold fs-6">{centre}</span>
                    <small className="text-secondary">{period}</small>
                </div>

                <div className="col-md-6 mt-2">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default StudyItem;