import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../../context/FavoritesContext";
import "./Card.css";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(data.id);

  const handleDetailClick = () => {
    navigate(`/evento/${data.id}`);
  };

  return (
    <article className="evento-card">
      <button
        className={`fav-btn ${isFavorite ? "active" : ""}`}
        onClick={() => toggleFavorite(data.id)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <span className={`badge ${data.categoria.toLowerCase()}`}>
        {data.categoria}
      </span>

      <h4>{data.titulo}</h4>

      <div className="evento-info">
        <p className="date-location">
          📅 {data.fecha} <br />
          📍 {data.lugar}
        </p>
      </div>

      <button className="detalle-btn" onClick={handleDetailClick}>
        Ver detalle
      </button>
    </article>
  );
};

export default Card;
