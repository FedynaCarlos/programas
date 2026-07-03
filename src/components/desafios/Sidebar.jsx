function Sidebar({ secciones }) {
    return (
        <nav className="side-nav">
            {secciones.map((s) => (
                <a key={s.id} href={`#${s.id}`}>
                    {s.label}
                </a>
            ))}
        </nav>
    );
}

export default Sidebar;