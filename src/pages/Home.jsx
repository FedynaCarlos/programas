import Layout from "../layouts/Layout";
import Card from "../components/Card";
import cards from "../data/cards";
import "../styles/home.css";

function Home() {
    return (
        <Layout>

            {/* HERO GRANDE */}
            <section className="hero-card">
                <div className="hero-inner">
                    <h1>Somos Logos </h1>
                    <p className="hero-text">Esta propuesta de acompañamiento pedagógico se basa en un modelo integral donde el 70% del trabajo es presencial, con asesoramiento a equipos directivos y docentes, formación en territorio y seguimiento en aula. El 30% restante se apoya en recursos pedagógicos, plataforma digital y materiales de trabajo. Este esquema permite una implementación situada, progresiva y enfocada en la mejora real de las prácticas de enseñanza y los aprendizajes.</p>
                </div>
            </section>

            {/* CARDS PROYECTOS */}
            <section className="cards-grid">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        titulo={card.titulo}
                        descripcion={card.descripcion}
                        ruta={card.ruta}
                    />
                ))}
            </section>

        </Layout >
    );
}

export default Home;