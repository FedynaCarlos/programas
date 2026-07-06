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

                        <h1>Somos Logos</h1>

                        <p className="hero-text">
                            En Ediciones Logos acompañamos a las instituciones educativas con propuestas pedagógicas innovadoras...
                        </p>

                        <img
                            src="/images/acompania.PNG"
                            alt="Acompañamiento Logos"
                            className="hero-image"
                        />

                        <div className="hero-programs">

                            {cards.map((card) => (
                                <div key={card.id} className="card-wrapper">

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