import { useState, useMemo, useEffect } from "react";
import eventosData from "../../data/eventos.json";
import Grid from "../../components/Events/Grid/Grid";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todas");
  const [eventos, setEventos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventos = () => {
      setIsLoading(true);

      setTimeout(() => {
        try {
          if (!eventosData || eventosData.length === 0) {
            throw new Error("No hay eventos disponibles en este momento.");
          }

          setEventos(eventosData);
          setError(null);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }, 1500);
    };

    fetchEventos();
  }, []);

  const categoriasUnicas = [
    "Todas",
    ...new Set(eventos.map((e) => e.categoria)),
  ];

  const filteredEvents = useMemo(() => {
    return eventos.filter((evento) => {
      const matchesText =
        evento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evento.lugar.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        category === "Todas" || evento.categoria === category;
      return matchesText && matchesCategory;
    });
  }, [searchTerm, category, eventos]);

  if (isLoading) {
    return (
      <main className="home-status">
        <div className="loader"></div>
        <p>Cargando eventos de QuickPlan...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="home-status">
        <div className="error-message">
          <h2>⚠️ Ops! Algo salió mal</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </main>
    );
  }

  return (
    <main className="home">
      <div className="home-header">
        <h1>Agenda de eventos</h1>
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Buscar por título o lugar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categoriasUnicas.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <p className="event-counter">
            Mostrando <strong>{filteredEvents.length}</strong> de{" "}
            {eventos.length}
          </p>
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <Grid eventos={filteredEvents} />
      ) : (
        <p className="no-results">
          No se encontraron eventos con esos filtros.
        </p>
      )}
    </main>
  );
};

export default Home;
