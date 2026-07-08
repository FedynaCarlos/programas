// Bambu.jsx
import "../styles/programPage.css";
import ProjectPage from "../components/ProjectPage";

function Bambu() {
    return (
        <ProjectPage>

            <section className="program-page">

                <header className="program-header">

                    <img
                        src="/images/logos.png"
                        alt="Logos"
                    />

                    <img
                        src="/images/bambu.png"
                        alt="Bambú"
                    />

                </header>

                <p className="program-category">
                    Comprensión lectora
                </p>

                <h1 className="program-title">
                    Proyecto Bambú Avanza
                </h1>

               <div className="program-purpose">
    <strong>Propósito</strong>

    <p>
        Fortalecer lectores competentes, autónomos y motivados,
        promoviendo la comprensión lectora, el disfrute por la lectura
        y el trabajo sistemático con habilidades lectoras.
    </p>
</div>

<h2>Componentes del programa</h2>

<div className="program-components">

    <div className="component-card">
        <h3>Materiales e itinerario lector</h3>

        <p>
            Propuesta de lectura y recursos para trabajar textos,
            habilidades y estrategias de comprensión.
        </p>
    </div>

    <div className="component-card">
        <h3>Formación docente</h3>

        <p>
            Encuentros para planificar el recorrido lector,
            orientar prácticas de aula y unificar criterios.
        </p>
    </div>

    <div className="component-card">
        <h3>Diagnóstico y seguimiento</h3>

        <p>
            Instrumentos para relevar avances, acompañar trayectorias
            y tomar decisiones pedagógicas.
        </p>
    </div>

</div>

<div className="program-acompanamiento">
    Acompañamiento institucional transversal:
    escucha, planificación, organización y seguimiento
    durante todo el ciclo lectivo.
</div>

            </section>

        </ProjectPage>
    );
}

export default Bambu;