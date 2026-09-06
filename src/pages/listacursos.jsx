import { useState, useEffect } from 'react';
import { obtenerCursos } from '../servicios/cursos';
import TarjetaDeCurso from '../components/tarjetadecurso';

function ListaCursos() {
  const [cursos, setCursos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerCursos()
      .then((data) => setCursos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Cursos</h1>
      {cursos.map((curso) => (
        <TarjetaDeCurso key={curso.id} curso={curso} />
      ))}
    </div>
  );
}

export default ListaCursos;
