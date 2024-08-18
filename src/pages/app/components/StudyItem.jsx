const StudyItem = ({ title, centre, period, description }) => {
    return (
        <li className="study-item">
            <div className="row d-flex">
                <div className="col-md-5 d-flex flex-column">
                    <span className="primary-color fw-bold fs-3">{title}</span>
                    <span className="fw-bold fs-5">{centre}</span>
                    <span className="text-secondary">{period}</span>
                </div>

                <div className="col-md-7 mt-2">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default StudyItem;
