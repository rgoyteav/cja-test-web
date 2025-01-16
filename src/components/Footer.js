import React from 'react';
import 'font-awesome/css/font-awesome.min.css';  // Asegúrate de importar los estilos de Font Awesome

const Footer = () => {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: '#0c3553', color: 'white' }}>
      <p>&copy; {new Date().getFullYear()} Centro Juventud Antoniana - Todos los derechos reservados.</p>
      


      {/* Sección de redes sociales */}
      <div className="social-links">
        <a href="https://www.facebook.com/CJAOficial" target="_blank" rel="noopener noreferrer" style={{ color: '#F0F5F5', margin: '0 10px' }}>
          <i className="fa fa-facebook" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.instagram.com/cjaoficial" target="_blank" rel="noopener noreferrer" style={{ color: '#F0F5F5', margin: '0 10px' }}>
          <i className="fa fa-instagram" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://twitter.com/CJAOficial" target="_blank" rel="noopener noreferrer" style={{ color: '#F0F5F5', margin: '0 10px' }}>
          <i className="fa fa-twitter" style={{ fontSize: '24px' }}></i>
        </a>
      </div>

      {/* Correo electrónico */}
      <p>
        <a href="mailto:institucional@juventudantoniana.com" style={{ color: '#F0F5F5' }}>
          institucional@juventudantoniana.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;