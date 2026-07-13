import ProjectPage from "../components/ProjectPage";
import "../styles/programPage.css";

function Desafios() {
    return (
        <ProjectPage>

            <section className="program-page">

                <header className="program-header">

                    {/* <img
                        src="/images/logos.png"
                        alt="Logos"
                    /> */}

                    <img
                        src="/images/desafios.png"
                        alt="Desafíos"
                    />

                </header>

                <h1 className="program-title">
                    Educación Afectivo-Sexual Integral
                </h1>

                {/* <h1 className="program-title">
                    Desafíos
                </h1> */}

                <p className="program-description">
                    Una propuesta integral para acompañar a estudiantes,
                    docentes y familias en la construcción de vínculos sanos,
                    el desarrollo personal y la formación en valores.
                </p>

                <div className="program-purpose">
                    <strong>Propósito</strong>

                    <p>
                        Promover una educación afectivo-sexual situada,
                        respetuosa de la identidad institucional y orientada
                        al desarrollo integral de niños, niñas y adolescentes.
                    </p>
                </div>

                <h2>Componentes del programa</h2>

                <div className="program-components">

                    <div className="component-card">
                        <h3>Material para estudiantes</h3>

                        <p>
                            Secuencias didácticas, actividades y recursos para
                            trabajar identidad, emociones, vínculos, ciudadanía
                            digital y proyecto de vida.
                        </p>
                    </div>

                    <div className="component-card">
                        <h3>Formación docente</h3>

                        <p>
                            Capacitación y acompañamiento para integrar la ESI
                            desde una perspectiva pedagógica e institucional.
                        </p>
                    </div>

                    <div className="component-card">
                        <h3>Trabajo con familias</h3>

                        <p>
                            Encuentros, materiales y espacios de diálogo que
                            fortalecen la alianza entre escuela y familia.
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

export default Desafios;