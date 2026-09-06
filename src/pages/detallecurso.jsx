import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerCursoPorId } from '../servicios/cursos';

function DetalleCurso() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerCursoPorId(id)
      .then((data) => setCurso(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{curso.nombre}</h1>
      <p>Profesor: {curso.profesor}</p>
      <p>Nivel: {curso.nivel}</p>
      <p>Cupo: {curso.cupo}</p>
      <p>Descripcion: {curso.descripcion}</p>
      <Link to="/cursos">Volver</Link>
    </div>
  );
}

export default DetalleCurso;
