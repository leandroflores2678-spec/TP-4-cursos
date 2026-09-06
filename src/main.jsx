import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Inicio from './pages/inicio';
import ListaCursos from './pages/listacursos';
import DetalleCurso from './pages/detallecurso';
import NotFound from './pages/notfound';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<ListaCursos />} />
          <Route path="/cursos/:id" element={<DetalleCurso />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
