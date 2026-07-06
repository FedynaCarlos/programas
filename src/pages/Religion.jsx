import ProjectPage from "../components/ProjectPage";

function Religion() {
    return (
        <ProjectPage>

            <section className="section">
                <h1>Religión</h1>

                <p>
                    Material de formación integral en educación religiosa.
                </p>

                <iframe
                    src="/pdfs/religion.pdf"
                    width="100%"
                    height="600"
                    style={{
                        border: "none",
                        marginTop: "20px",
                    }}
                    title="PDF Religión"
                />
            </section>

        </ProjectPage>
    );
}

export default Religion;