import Section from "../components/Section";
import StudyList from "../components/StudyList";

const Estudios = () => {
    return (
        <Section id="estudios">
            <div className="row w-100">
                <span className="text-center" style={{ fontSize: "3rem", fontWeight: "bold" }}>Estudios</span>

                <StudyList />
            </div >
        </Section >
    );
}

export default Estudios;