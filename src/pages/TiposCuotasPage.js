// src/components/TiposCuotas.js

import React from 'react';
// import './TiposCuotas.css'; // Si quieres agregar estilos específicos

const TiposCuotasPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ color: '#0c3553', fontWeight: 'bold' }}>Tipos y valores de cuotas sociales</h1>
      <div className="mt-4">
        <p>En el Centro Juventud Antoniana ofrecemos diferentes tipos de cuotas sociales adaptadas a las necesidades de nuestros socios. A continuación, te detallamos las cuotas y sus respectivos valores mensuales, junto con descuentos especiales para grupos familiares.</p>

        <table className="table table-bordered table-striped">
          <thead>
            <tr style={{ backgroundColor: '#0c3553', color: 'white' }}>
              <th>Tipo de Cuota</th>
              <th>Valor Mensual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>SOCIO ACTIVO (+18 AÑOS)</strong></td>
              <td><span style={{ fontWeight: 'bold' }}>$10.000</span></td>
            </tr>
            <tr>
              <td><strong>SOCIO CADETE (+13 AÑOS)</strong></td>
              <td><span style={{ fontWeight: 'bold' }}>$3.000</span></td>
            </tr>
            <tr>
              <td><strong>SOCIO MENOR (-13 AÑOS)</strong></td>
              <td><span style={{ fontWeight: 'bold' }}>$1.500</span></td>
            </tr>
            <tr>
              <td><strong>SOCIO VITALICIO</strong></td>
              <td><span style={{ fontWeight: 'bold' }}>SIN CARGO</span></td>
            </tr>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th colSpan={2} className="text-center">GRUPOS FAMILIARES</th>
            </tr>
            <tr>
              <td><strong>3 PERSONAS</strong></td>
              <td><span style={{ fontWeight: 'bold' }}>DESCUENTO 10%</span></td>
            </tr>
            <tr>
              <td><strong>4 PERSONAS</strong></td>
              <td><span style={{ fontWeight: 'bold' }}>DESCUENTO 15%</span></td>
            </tr>
            <tr>
              <td><strong>5 PERSONAS o MÁS</strong></td>
              <td><span style={{ fontWeight: 'bold' }}>DESCUENTO 20%</span></td>
            </tr>
          </tbody>
        </table>

        <p>Valores correspondientes al período de Noviembre 2024 - Enero 2025. Si deseas más información, no dudes en ponerte en contacto con nosotros a través de nuestra página de contacto o visitando nuestra sede para obtener detalles adicionales.</p>
        
        <p><strong>¡Únete al CJA y disfruta de todos los beneficios de ser parte de nuestra comunidad!</strong></p>
      </div>
    </div>
  );
};


export default TiposCuotasPage;
