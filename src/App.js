import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // JavaScript de Bootstrap (necesario para el carrusel)
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import FotosPage from './pages/FotosPage';  // Importar las nuevas páginas
import HistoriaPage from './pages/HistoriaPage.js';
import SociosPage from './pages/SociosPage';
import PolideportivoPage from './pages/PolideportivoPage';  // Página futura
import TiendaPage from './pages/TiendaPage';  // Página futura
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import RedesSocialesPage from './pages/RedesSocialesPage';
import BeneficiosPage from './pages/BeneficiosPage';
import RequisitosSocios from './pages/RequisitosSocios.js';
import TiposCuotas from './pages/TiposCuotasPage.js';
import Moratoria from './pages/MoratoriaPage.js';
import Referidos from './pages/ReferidosPage.js'
import Abonos from './pages/AbonosPage.js'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <div className="container flex-grow-1 mt-4"> {/* flex-grow-1 expande el contenedor */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fotos" element={<FotosPage />} />
            <Route path="/historia" element={<HistoriaPage />} />
            <Route path="/socios" element={<SociosPage />} />
            <Route path="/polideportivo" element={<PolideportivoPage />} />
            <Route path="/tienda" element={<TiendaPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/redes-sociales" element={<RedesSocialesPage />} />
            <Route path="/beneficios" element={<BeneficiosPage />} />
            <Route path="/requisitos-asociarse" element={<RequisitosSocios />} />
            <Route path="/tipos-cuotas" element={<TiposCuotas />} />
            <Route path="/moratoria" element={<Moratoria />} />
            <Route path="/programa-referidos" element={<Referidos />} />
            <Route path="/abonos" element={<Abonos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;