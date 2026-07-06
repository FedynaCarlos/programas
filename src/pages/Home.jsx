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
        En Ediciones Logos acompañamos a las instituciones educativas con propuestas pedagógicas innovadoras que promueven el desarrollo integral de los estudiantes. Nuestro modelo combina un 70% de acompañamiento presencial —a través de asesoramiento, capacitaciones y seguimiento en cada colegio— con un 30% de recursos educativos, materiales impresos y herramientas digitales. De esta manera, construimos junto a docentes y directivos experiencias de aprendizaje significativas que fortalecen la enseñanza y la formación en valores.

        <p className="hero-text">
            ...
        </p>

        <div className="hero-programs">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    titulo={card.titulo}
                    descripcion={card.descripcion}
                    ruta={card.ruta}
                />
            ))}
        </div>

    </div>
</section>

            </div>
        </Layout>
    );
}

export default Home;