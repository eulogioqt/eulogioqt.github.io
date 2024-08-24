import Section from "../../components/Section";
import ExtraList from "./components/ExtraList";
import ExperienceList from "./components/ExperienceList";

const Experience = () => {
    return (
        <Section id="experience">
            <span className="text-center mb-3" style={{ fontSize: "3rem", fontWeight: "bold" }}>Experiencia</span>

            <ExperienceList />

            <span className="text-center mt-5" style={{ fontSize: "3rem", fontWeight: "bold" }}>Extra</span>

            <ExtraList />
        </Section>
    );
}

export default Experience;