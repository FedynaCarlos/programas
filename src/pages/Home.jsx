import Layout from "../layouts/Layout";
import Card from "../components/Card";
import cards from "../data/cards";
import "../styles/home.css";

function Home() {
    return (
        <Layout>
            <div className="home">
                <section className="hero-card">
                    <div className="hero-inner">
                        <h1>Acompañamiento institucional</h1>

                        <h2>
                            Un mismo plan de acompañamiento transversal a los 4 programas
                        </h2>

                        <p className="hero-text">
                            Un recorrido ordenado y sostenido para implementar cada
                            propuesta de acuerdo con la realidad de la institución.
                        </p>

                        <img
                            src="/images/acompania.PNG"
                            alt="Acompañamiento Logos"
                            className="hero-image"
                        />

                        <div className="hero-programs">
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    className={`card-wrapper card-${card.id}`}
                                >
                                    <Card
                                        titulo={card.titulo}
                                        descripcion={card.descripcion}
                                        ruta={card.ruta}
                                    />

                                    <img
                                        src={card.logo}
                                        alt={card.titulo}
                                        className="card-logo"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Home;