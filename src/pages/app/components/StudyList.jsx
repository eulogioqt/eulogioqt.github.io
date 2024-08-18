import StudiesData from "../data/StudiesData.json";
import StudyItem from "./StudyItem";

const StudyList = () => {
    return (
        <ul className="mt-5">
            {StudiesData.map((study, index) => (
                <StudyItem key={index} {...study} />
            ))}
        </ul>
    );
}

export default StudyList;