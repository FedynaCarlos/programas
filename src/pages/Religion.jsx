import ProjectPage from "../components/ProjectPage";
import "../styles/programPage.css";

function Religion() {
    return (
        <ProjectPage>

            <section className="program-page">

                <header className="program-header">

                    {/* <img
                        src="/images/logos.png"
                        alt="Logos"
                    /> */}

                    <img
                        src="/images/casals.png"
                        alt="Educación Religiosa"
                    />

                </header>

                {/* <p className="program-category">
                    Educación Religiosa
                </p> */}

                <h1 className="program-title">
                    Educación Religiosa
                </h1>

                <p className="program-description">
                    Una propuesta para acompañar el crecimiento espiritual,
                    humano y comunitario de los estudiantes desde una mirada
                    integral de la persona.
                </p>

                <div className="program-purpose">
                    <strong>Propósito</strong>

                    <p>
                        Favorecer el encuentro con los valores del Evangelio,
                        promoviendo la reflexión, el compromiso solidario y la
                        construcción del proyecto de vida personal.
                    </p>
                </div>

                <h2>Componentes del programa</h2>

                <div className="program-components">

                    <div className="component-card">
                        <h3>Material para alumnos</h3>

                        <p>
                            Recursos y actividades para trabajar contenidos
                            religiosos de manera significativa y contextualizada.
                        </p>
                    </div>

                    <div className="component-card">
                        <h3>Guía docente</h3>

                        <p>
                            Orientaciones pedagógicas para planificar,
                            acompañar y profundizar los contenidos de cada etapa.
                        </p>
                    </div>

                    <div className="component-card">
                        <h3>Formación y acompañamiento</h3>

                        <p>
                            Espacios de capacitación y seguimiento para fortalecer
                            la tarea pastoral y educativa de la institución.
                        </p>
                    </div>

                </div>

                <div className="program-acompanamiento">
                    Acompañamiento institucional transversal: escucha,
                    planificación, organización y seguimiento durante todo
                    el ciclo lectivo.
                </div>

            </section>

        </ProjectPage>
    );
}

export default Religion;