const ExperienceItem = ({ logo, title, subtitle, period, description }) => {
    return (
        <div className="border rounded-3 p-3 mb-3">
            <div className="d-sm-flex d-block justify-content-between">
                <div className="d-flex align-items-center mb-3">
                    <img src={logo}
                        className="rounded rounded-4" style={{ height: 75 }} />
                    <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                        <span className="fw-bold fs-4">{title}</span>
                        <span className="fs-5 text-secondary">{subtitle}</span>
                        <span className="text-secondary text-end fs-6 d-sm-none d-block">{period}</span>
                    </div>
                </div>

                <span className="text-secondary text-end fs-6 d-sm-block d-none">{period}</span>
            </div>

            <p>
                {description}
            </p>
        </div>
    );
}

export default ExperienceItem;