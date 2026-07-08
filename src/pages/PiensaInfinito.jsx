import ProjectPage from "../components/ProjectPage";
import "../styles/programPage.css";

function PiensaInfinito() {
    return (
        <ProjectPage>

            <section className="program-page">

                <header className="program-header">

                    <img
                        src="/images/logos.png"
                        alt="Logos"
                    />

                    <img
                        src="/images/piensa.jpg"
                        alt="Piensa Infinito"
                    />

                </header>

                <p className="program-category">
                    Matemática · Método Singapur
                </p>

                <h1 className="program-title">
                    Piensa Infinito
                </h1>

                <p className="program-description">
                    Desarrollo del pensamiento matemático a través de la resolución de problemas, la comprensión conceptual y el aprendizaje significativo.
                </p>

                <div className="program-purpose">
                    <strong>Propósito</strong>

                    <p>
                        Favorecer la comprensión profunda de la matemática, promoviendo el razonamiento, la comunicación y la resolución de problemas mediante estrategias inspiradas en el Método Singapur.
                    </p>
                </div>

                <h2>Componentes del programa</h2>

                <div className="program-components">

                    <div className="component-card">
                        <h3>Materiales didácticos</h3>

                        <p>
                            Recursos diseñados para trabajar conceptos matemáticos de manera concreta, pictórica y abstracta.
                        </p>
                    </div>

                    <div className="component-card">
                        <h3>Capacitación docente</h3>

                        <p>
                            Formación para implementar estrategias de enseñanza centradas en la comprensión y el pensamiento lógico.
                        </p>
                    </div>

                    <div className="component-card">
                        <h3>Seguimiento institucional</h3>

                        <p>
                            Acompañamiento y evaluación continua para fortalecer la implementación del programa.
                        </p>
                    </div>

                </div>

                <div className="program-acompanamiento">
                    Acompañamiento institucional transversal: escucha, planificación, organización y seguimiento durante todo el ciclo lectivo.
                </div>

            </section>

        </ProjectPage>
    );
}

export default PiensaInfinito;