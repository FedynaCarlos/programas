import ProjectPage from "../components/ProjectPage";

function Bambu() {
    return (
        <ProjectPage>

            <section className="section">
                <h1>Bambú</h1>

                <p>
                    Material de comprensión lectora y desarrollo de habilidades.
                </p>

                <iframe
                    src="/pdfs/bambu.pdf"
                    width="100%"
                    height="600"
                    style={{
                        border: "none",
                        marginTop: "20px",
                    }}
                    title="PDF Bambú"
                />
            </section>

        </ProjectPage>
    );
}

export default Bambu;