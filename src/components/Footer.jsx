import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <img
                src="/images/logos-footer.png"
                alt="footer"
                className="footer-image"
            />
            <p className="footer-copy">
                © {new Date().getFullYear()} LOGOS. Todos los derechos reservados.
            </p>
        </footer>
    );
}

export default Footer;