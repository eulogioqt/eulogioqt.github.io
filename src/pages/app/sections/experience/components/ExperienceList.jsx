import ExperienceData from "../../../data/ExperienceData.json";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = () => {
    return (
        <div className="col-md-9 d-flex flex-column">
            {ExperienceData.map((experienceData, index) => (
                <ExperienceItem key={index} {...experienceData} />
            ))}
        </div>
    )
}

export default ExperienceList;