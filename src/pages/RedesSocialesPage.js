import React from 'react';
import '../styles/RedesSocialesPage.css';

const RedesSocialesPage = () => {
  return (
    <div className="redes-sociales-container">
      <h2 className="redes-sociales-title">¡Seguinos en nuestras redes sociales!</h2>

      <div className="iframe-container">
        {/* iFrame de Instagram */}
        <div className="iframe-wrapper">
          <h3>Instagram</h3>
          <iframe
            src="https://www.instagram.com/cjaoficial/embed"
            width="400"
            height="500"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            title="Instagram Feed"
          ></iframe>
        </div>

        {/* iFrame de Facebook */}
        <div className="iframe-wrapper">
          <h3>Facebook</h3>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCJAOficial&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="500"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Feed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RedesSocialesPage;