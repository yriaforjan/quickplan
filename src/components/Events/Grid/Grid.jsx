import Card from "../Card/Card";

const Grid = ({ eventos }) => {
  return (
    <section className="eventos-grid">
      <ul>
        {eventos.map((ev) => (
          <li key={ev.id}>
            <Card data={ev} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Grid;
