function Section({ id, titulo, children, highlight = false }) {
    return (
        <section
            id={id}
            className={`section ${highlight ? "highlight" : ""}`}
        >
            <h2>{titulo}</h2>
            {children}
        </section>
    );
}

export default Section;