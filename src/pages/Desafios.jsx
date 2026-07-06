import ProjectPage from "../components/ProjectPage";

import "../styles/desafios.css";

function Desafios() {
    return (
        <ProjectPage>

            <section id="presentacion" className="section">
                <h2>Presentación General</h2>

                <p>
                    Esta propuesta integral de acompañamiento en Educación
                    Afectivo-Sexual (ESI) está diseñada para fortalecer el
                    trabajo conjunto entre equipos directivos y familias.
                </p>
            </section>

            <section id="implementacion" className="section">
                <h2>Sugerencia de Implementación</h2>

                <p className="quote">
                    “Cambio cultural sostenido en el tiempo”
                </p>

                <ul>
                    <li>Año 1: Escucha institucional</li>
                    <li>Año 2: Consolidación de prácticas</li>
                    <li>Año 3: Evaluación institucional</li>
                </ul>
            </section>

            <section id="diagnostico" className="section">
                <h2>Diagnóstico Institucional</h2>

                <p className="quote">
                    “Escuchar antes de intervenir”
                </p>

                <ul>
                    <li>Entrevista a directivos</li>
                    <li>Ficha técnica ESI</li>
                    <li>Formulario docente</li>
                </ul>
            </section>

            <section id="formacion" className="section">
                <h2>Plan de Formación Docente</h2>

                <ul>
                    <li>7 encuentros formativos</li>
                    <li>Modalidad presencial y virtual</li>
                    <li>Enfoque situado</li>
                </ul>
            </section>

            <section id="familias" className="section">
                <h2>Ciclo para Familias</h2>

                <ul>
                    <li>¿Qué es la ESI?</li>
                    <li>Acompañamiento en casa</li>
                </ul>
            </section>

            <section id="comunidad" className="section">
                <h2>Comunidad Desafíos</h2>

                <ul>
                    <li>Webinars mensuales</li>
                    <li>Cursos autogestionados</li>
                </ul>
            </section>

            <section id="recursos" className="section">
                <h2>Recursos Adicionales</h2>

                <ul>
                    <li>Libro del alumno</li>
                    <li>Libro del docente</li>
                    <li>Plataforma virtual</li>
                </ul>
            </section>

            <section id="valor" className="section highlight">
                <h2>Valor Institucional</h2>

                <ul>
                    <li>Escucha activa</li>
                    <li>Identidad institucional</li>
                    <li>Formación situada</li>
                </ul>

                <iframe
                    src="/pdfs/desafios.pdf"
                    width="100%"
                    height="600"
                    title="PDF Desafíos"
                    style={{
                        border: "none",
                        marginTop: "20px",
                    }}
                />
            </section>

        </ProjectPage>
    );
}

export default Desafios;
