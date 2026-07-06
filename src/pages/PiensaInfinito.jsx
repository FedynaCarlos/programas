import ProjectPage from "../components/ProjectPage";

function PiensaInfinito() {
    return (
        <ProjectPage>

            <section className="section">
                <h1>Piensa Infinito</h1>

                <p>
                    Material de matemática estilo Singapur para desarrollo del pensamiento lógico.
                </p>

                <iframe
                    src="/pdfs/piensa-infinito.pdf"
                    width="100%"
                    height="600"
                    style={{
                        border: "none",
                        marginTop: "20px",
                    }}
                    title="PDF Piensa Infinito"
                />
            </section>

        </ProjectPage>
    );
}

export default PiensaInfinito;