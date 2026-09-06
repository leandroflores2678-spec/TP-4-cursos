import { Link } from 'react-router-dom';

function TarjetaDeCurso({ curso }) {
  return (
    <div className="tarjeta">
      <h3>{curso.nombre}</h3>
      <p>Profesor: {curso.profesor}</p>
      <p>Nivel: {curso.nivel}</p>
      <Link to={`/cursos/${curso.id}`}>Ver detalle</Link>
    </div>
  );
}

export default TarjetaDeCurso;
