import { useParams, useNavigate } from "react-router-dom";
import eventos from "../../data/eventos.json";
import "./EventDetail.css";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const evento = eventos.find((e) => e.id === parseInt(id));

  if (!evento) {
    return <div className="not-found">Evento no encontrado</div>;
  }

  return (
    <main>
      <div className="event-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>

        <article className="event-card-detail">
          <span className="detail-category">{evento.categoria}</span>
          <h1 className="detail-title">{evento.titulo}</h1>

          <div className="detail-info-grid">
            <div className="info-item">
              <span className="label">📅 FECHA</span>
              <p>{evento.fecha}</p>
            </div>
            <div className="info-item">
              <span className="label">📍 LUGAR</span>
              <p>{evento.lugar}</p>
            </div>
          </div>

          <hr className="divider" />

          <section className="detail-description">
            <h3>Sobre este evento</h3>
            <p>{evento.descripcion}</p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default EventDetail;
