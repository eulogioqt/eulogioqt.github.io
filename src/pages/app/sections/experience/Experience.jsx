import Section from "../../components/Section";
import ExtraList from "./components/ExtraList";
import ExperienceList from "./components/ExperienceList";

const Experience = () => {
    return (
        <Section id="experience">
            <span className="text-center mb-3" style={{ fontSize: "3rem", fontWeight: "bold" }}>Experiencia</span>

            <ExperienceList />

            <span className="text-center" style={{ fontSize: "3rem", fontWeight: "bold" }}>Otros</span>

            <ExtraList />
        </Section>
    );
}

export default Experience;