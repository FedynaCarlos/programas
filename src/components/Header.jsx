import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // cerrar al hacer click afuera
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="header">

            <Link to="/" className="logo">
                <img src="/images/logos.png" alt="LOGOS" />
            </Link>

            <div className="burger" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav ref={menuRef} className={`nav ${open ? "active" : ""}`}>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/piensa-infinito" onClick={() => setOpen(false)}>Piensa</Link>
                <Link to="/bambu" onClick={() => setOpen(false)}>Bambú</Link>
                <Link to="/desafios" onClick={() => setOpen(false)}>Desafíos</Link>
                <Link to="/religion" onClick={() => setOpen(false)}>Religión</Link>
            </nav>

        </header>
    );
}

export default Header;