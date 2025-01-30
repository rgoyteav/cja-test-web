import React from "react";

const ReferidosPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ color: '#0c3553' }}>Programa de Referidos 2025</h1>
      <div className="mt-4">
        <p>
          El Programa de Referidos 2025 premia a los socios que inviten nuevos miembros al club. Este programa busca fidelizar los socios activos
          y aumentar la masa societaria del Centro Juventud Antoniana.
        </p>
        <h3>¿Cómo participar?</h3>
        <p>Consulta todos los detalles descargando el documento oficial:</p>
        <a 
          href="/docs/CJA - Programa de Referidos 2025.pdf" 
          download 
          className="btn btn-secondary mb-lg-0 mb-2"
          style={{ backgroundColor: '#0c3553' }}
        >
          Descargar Programa de Referidos
        </a>
      </div>
    </div>
  );
};

export default ReferidosPage;