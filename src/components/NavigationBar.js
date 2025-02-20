import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importamos Link para navegación
import logo from '../assets/escudo-cja.png';
import './NavigationBar.css'; // Asegúrate de importar el archivo CSS con las transiciones

const NavigationBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Estado para el colapso

  const handleToggle = () => setIsCollapsed(!isCollapsed); // Cambia el estado del colapso
  const handleLinkClick = () => setIsCollapsed(true); // Oculta la barra al hacer clic en un enlace

  // Estado para controlar la visibilidad del submenú de "Socios"
  const [isSociosOpen, setIsSociosOpen] = useState(false);
  
  const toggleSociosMenu = () => {
    setIsSociosOpen(!isSociosOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0c3553' }}>
      <div className="container">
        <Link className="d-flex align-items-center" to="/" style={{ gap: '10px', color: 'white', textDecoration: 'None' }}>
          <img
            src={logo}
            alt="Escudo del Centro Juventud Antoniana"
            width="80"
            height="80"
          />
          Centro Juventud Antoniana
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/fotos" onClick={handleLinkClick}>Fotos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historia" onClick={handleLinkClick}>Historia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={handleLinkClick}>Socios</Link>
              <ul className={`sub-menu ${isSociosOpen ? 'show' : ''}`} style={{ listStyle: 'none', padding: 0 }}>
              {/* <li><a className="nav-link"  href="#" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Pagá tu cuota con Macro Click</a></li> */}
                <li><Link className="nav-link" to="/beneficios" onClick={handleLinkClick}>Comercios adheridos</Link></li>
                <li><Link className="nav-link" to="/requisitos-asociarse" onClick={handleLinkClick}>Requisitos para ser socio</Link></li>
                <li><a className="nav-link"  href="https://juventudantoniana.accessfan.ar" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Asociate con AccessFan</a></li>
                <li><Link className="nav-link" to="/tipos-cuotas" onClick={handleLinkClick}>Tipos y valores de cuotas sociales</Link></li>
                <li><Link className="nav-link" to="/moratoria" onClick={handleLinkClick}>Moratoria 2025</Link></li>
                <li><Link className="nav-link" to="/programa-referidos" onClick={handleLinkClick}>Asociá a un amigo y ganá (Muy pronto)</Link></li>
                <li><Link className="nav-link" to="/abonos" onClick={handleLinkClick}>Abonos para socios (Muy pronto)</Link></li>
                <li><a className="nav-link"  href="http://api.whatsapp.com/send?phone=543873032500" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>WhatsApp de Socios</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link disabled className="nav-link" to="/polideportivo" onClick={handleLinkClick}>Polideportivo (En progreso)</Link>
            </li>
            <li className="nav-item">
              <Link disabled className="nav-link" to="/contacto" onClick={handleLinkClick}>Contacto</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/tienda" onClick={handleLinkClick}>Tienda (En progreso)</Link>
            </li> */}
            <li className="nav-item">
              <a
                className="btn btn-secondary me-2 mb-lg-0 mb-2"
                href="http://juventudantoniana.accessfan.ar/"
                style={{ backgroundColor: '#3C2713' }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                ¡ASOCIATE!
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="btn btn-secondary mb-lg-0 mb-2"
                href="#"
                style={{ backgroundColor: '#3C2713' }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                Pagá tu cuota con Macro Click
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
