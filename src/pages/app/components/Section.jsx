const Section = ({ id, children }) => {
    return (
        <section id={id} className="container d-flex flex-column align-items-center justify-content-center web-section"
            style={{ minHeight: "100vh", height: "100%" }}>
            {children}
        </section>
    );
}

export default Section;