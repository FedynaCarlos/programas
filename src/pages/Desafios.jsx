import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import "../styles/desafios.css";
import Hero from "../components/desafios/Hero";
import Sidebar from "../components/desafios/Sidebar";
import Section from "../components/desafios/Section";
function Desafios() {

    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const secciones = [
        { id: "presentacion", label: "Presentación" },
        { id: "implementacion", label: "Implementación" },
        { id: "diagnostico", label: "Diagnóstico" },
        { id: "formacion", label: "Formación" },
        { id: "familias", label: "Familias" },
        { id: "comunidad", label: "Comunidad" },
        { id: "recursos", label: "Recursos" },
        { id: "valor", label: "Valor institucional" },
    ];

    return (
        <Layout>

            {/* CONTENIDO PRINCIPAL */}
            <div className="desafios-container">

                {/* SIDEBAR */}
                {/* <Sidebar secciones={secciones} /> */}
                <h1>Prueba</h1>
                {/* HERO */}
                {/* <Hero /> */}

                {/* SECCIONES */}
                <Section
                    id="presentacion"
                    titulo="Presentación General"
                >
                    <p>
                        Esta propuesta integral de acompañamiento en Educación
                        Afectivo-Sexual (ESI) está diseñada para fortalecer el trabajo
                        conjunto entre equipos directivos y familias.
                    </p>
                </Section>
                {/* <Section
                    id="presentacion"
                    titulo="Presentación General"
                >
                    <p>
                        Esta propuesta integral de acompañamiento en Educación
                        Afectivo-Sexual (ESI) está diseñada para fortalecer el trabajo
                        conjunto entre equipos directivos, docentes y familias.
                    </p>
                </Section> */}

                <section id="implementacion" className="section">
                    <h2>Sugerencia de Implementación</h2>
                    <p className="quote">“Cambio cultural sostenido en el tiempo”</p>
                    <ul>
                        <li>Año 1: Escucha institucional</li>
                        <li>Año 2: Consolidación de prácticas</li>
                        <li>Año 3: Evaluación institucional</li>
                    </ul>
                </section>

                <section id="diagnostico" className="section">
                    <h2>Diagnóstico Institucional</h2>
                    <p className="quote">“Escuchar antes de intervenir”</p>
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
                        <li>Cursos auto gestionados</li>
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
                </section>

                {/* BOTÓN VOLVER HOME */}
                <Link to="/" className="back-button">
                    ← Volver al inicio
                </Link>

                {/* BOTÓN VOLVER ARRIBA */}
                <button
                    className={`to-top ${showTop ? "show" : ""}`}
                    onClick={scrollTop}
                    aria-label="Volver arriba"
                >
                    ↑
                </button>

            </div>
        </Layout>
    );
}

export default Desafios;