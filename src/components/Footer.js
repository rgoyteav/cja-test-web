import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: '#0c3553', color: 'white' }}>
      <p>&copy; {new Date().getFullYear()} Centro Juventud Antoniana - Todos los derechos reservados.</p>
      


      {/* Sección de redes sociales */}
      <div className="social-links">
        <a href='http://api.whatsapp.com/send?phone=543873032500' target='_blank' rel="noopener noreferrer" style={{ color: '#F0F5F5', margin: '0 10px' }}>
          <i className="fab fa-whatsapp" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.facebook.com/CJAOficial" target="_blank" rel="noopener noreferrer" style={{ color: '#F0F5F5', margin: '0 10px' }}>
          <i className="fab fa-facebook" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.instagram.com/cjaoficial" target="_blank" rel="noopener noreferrer" style={{ color: '#F0F5F5', margin: '0 10px' }}>
          <i className="fab fa-instagram" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://twitter.com/CJAOficial" target="_blank" rel="noopener noreferrer" style={{ color: '#F0F5F5', margin: '0 10px' }}>
          <i className="fab fa-twitter" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://twitter.com/CJAOficial" target="_blank" rel="noopener noreferrer" style={{ color: '#F0F5F5', margin: '0 10px' }}>
          <i className="fab fa-tiktok" style={{ fontSize: '24px' }}></i>
        </a>

      </div>

      {/* Correo electrónico */}
      <p>
        <a href="mailto:institucional@juventudantoniana.com.ar" style={{ color: '#F0F5F5' }}>
          institucional@juventudantoniana.com.ar
        </a>
      </p>
    </footer>
  );
};

export default Footer;