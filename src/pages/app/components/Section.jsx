const Section = ({ id, children }) => {
    return (
        <section id={id} className="container d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}>
            {children}
        </section>
    );
}

export default Section;