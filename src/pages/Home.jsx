import Layout from "../layouts/Layout";
import Card from "../components/Card";
import cards from "../data/cards";
import "../styles/home.css";

import {
    HiOutlineChatBubbleLeftRight,
    HiOutlineClipboardDocumentList,
    HiOutlineUsers,
    HiOutlinePresentationChartLine,
    HiOutlineUserCircle,
} from "react-icons/hi2";

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

                        {/* ACOMPAÑAMIENTO */}

                        <div className="acompanamiento-wrapper">

                            <div className="acompanamiento-grid">

                                <div className="acompanamiento-card">
                                    <div className="numero">1</div>

                                    <HiOutlineChatBubbleLeftRight className="acompanamiento-icon" />

                                    <h3>Escucha institucional</h3>

                                    <p>
                                        Conocemos necesidades, niveles, tiempos y
                                        prioridades.
                                    </p>
                                </div>

                                <div className="acompanamiento-card">
                                    <div className="numero">2</div>

                                    <HiOutlineClipboardDocumentList className="acompanamiento-icon" />

                                    <h3>Presentación y planificación</h3>

                                    <p>
                                        Presentamos el programa y definimos juntos el
                                        recorrido de trabajo.
                                    </p>
                                </div>

                                <div className="acompanamiento-card">
                                    <div className="numero">3</div>

                                    <HiOutlineUsers className="acompanamiento-icon" />

                                    <h3>Organización y gestión</h3>

                                    <p>
                                        Coordinamos agendas, invitaciones, materiales,
                                        envíos y accesos.
                                    </p>
                                </div>

                                <div className="acompanamiento-card">
                                    <div className="numero">4</div>

                                    <HiOutlinePresentationChartLine className="acompanamiento-icon" />

                                    <h3>Implementación acompañada</h3>

                                    <p>
                                        Sostenemos el contacto y acompañamos el
                                        desarrollo del programa.
                                    </p>
                                </div>

                            </div>

                            {/* REFERENTE */}

                            <div className="referente-box">

                                <div className="referente-icon-wrapper">
                                    <HiOutlineUserCircle className="referente-react-icon" />
                                </div>

                                <p>
                                    Un referente comercial coordina el proceso y articula
                                    con el equipo pedagógico para garantizar una
                                    implementación efectiva y sostenida.
                                </p>

                            </div>

                        </div>

                        {/* PROGRAMAS */}

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