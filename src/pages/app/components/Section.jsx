const Section = ({ id, children }) => {
    return (
        <section id={id} className="container d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "100dvh", height: "100%", paddingTop: "58px" }}>
            {children}
        </section>
    );
}

export default Section;