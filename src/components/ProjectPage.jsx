
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

function ProjectPage({ children }) {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Layout>
            <div className="desafios-container">

                {children}

                <Link to="/" className="back-button">
                    ← Volver
                </Link>

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

export default ProjectPage;
