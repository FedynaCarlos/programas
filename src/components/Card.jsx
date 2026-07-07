import { Link } from "react-router-dom";

function Card({ titulo, descripcion, ruta }) {
    return (
        <div className="card">
             <Link to={ruta}>
            <h2>{titulo}</h2>

            <p>{descripcion}</p>

           
                <button>Ver más</button>
            </Link>
        </div>
    );
}

export default Card;