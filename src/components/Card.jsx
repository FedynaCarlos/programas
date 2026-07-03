import { Link } from "react-router-dom";

function Card({ titulo, descripcion, ruta }) {
    return (
        <div className="card">
            <h2>{titulo}</h2>

            <p>{descripcion}</p>

            <Link to={ruta}>
                <button>Ver más</button>
            </Link>
        </div>
    );
}

export default Card;