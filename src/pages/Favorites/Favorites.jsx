import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import eventosData from "../../data/eventos.json";
import "./Favorites.css";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const misFavoritos = eventosData.filter((ev) => favorites.includes(ev.id));

  return (
    <main>
      <div className="favorites-page">
        <div className="favorites-header">
          <h1>Mis Favoritos</h1>
          <p className="fav-counter">
            Tienes <strong>{misFavoritos.length}</strong> eventos guardados
          </p>
        </div>

        <section className="favorites-list">
          {misFavoritos.length > 0 ? (
            misFavoritos.map((ev) => (
              <div key={ev.id} className="fav-item-row">
                <div
                  className="fav-item-info"
                  onClick={() => navigate(`/evento/${ev.id}`)}
                >
                  <span className="fav-item-category">{ev.categoria}</span>
                  <h3>{ev.titulo}</h3>
                  <p>
                    📍 {ev.lugar} | 📅 {ev.fecha}
                  </p>
                </div>

                <button
                  className="remove-fav-btn"
                  onClick={() => toggleFavorite(ev.id)}
                >
                  Quitar
                </button>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>Tu lista está vacía.</p>
              <button className="explore-btn" onClick={() => navigate("/")}>
                Explorar eventos
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Favorites;
