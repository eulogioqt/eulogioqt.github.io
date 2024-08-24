import Section from "../../components/Section";
import StudyList from "./components/StudyList";

const Studies = () => {
    return (
        <Section id="studies">
            <div className="row w-100">
                <span className="text-center mb-3" style={{ fontSize: "3rem", fontWeight: "bold" }}>Estudios</span>

                <StudyList />
            </div >
        </Section >
    );
}

export default Studies;