import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const HistoriaPage = () => {
  return (
    <div className="historia-page">
      <div class="container">
        <motion.div
          className="fotos"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1>Fundación</h1>
          <p>En noviembre de 1915, el Obispo de nuestra provincia, José Gregorio Calixto Romero, autorizó al Padre Enrique Biagini a fundar un centro destinado a
            “alejar a los jóvenes de ambos sexos del contagio de los malos hábitos y encauzarlos en el camino de las buenas costumbres”.</p>
          <p>El 6 de diciembre de 1915, en Corrientes, se redactó en latín el acta de “erección canónica” de Juventud Antoniana, firmada por el Padre Lorenzo Mondanelli.
            Esta llegó a Salta, y la primera reunión tuvo lugar el 12 de enero de 1916, fecha establecida como la fundación oficial del club.</p>
        </motion.div>

        <motion.div
          className="fotos"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2>Historia Deportiva</h2>
          <p>En 1921 se fundó la Liga Salteña de Fútbol, siendo Juventud Antoniana uno de los clubes fundadores. Su primer título local llegó en 1928.
            Hasta 1967 el interior no tenía lugar en los torneos de AFA por lo que el Santo se convirtió en el equipo más popular de la
            provincia en base a su prestigio y campeonatos ganados en el ámbito local.
          </p>
          <p>
            En 1968 debuta en el torneo Regional, volviendo a ser el representante salteño en este torneo en los años siguientes, hasta que en 1971 finalmente se le
            da el título y primera clasificación salteña a un torneo de primera división, para conseguir este primer logro salteño a nivel nacional, el Santo venció
            a Gimnasia de Jujuy por 4 a 1, con récord de recaudación nacional, y cerrando la clasificación en Catamarca, al vencer a Sarmiento, con una caravana nunca
            vista en la historia del futbol salteño. El Nacional 71 fue una revolución para Salta, el partido más recordado (más allá del debut ante Newells en Salta),
            fue el partido en el Monumental ante el poderoso River, con gol de chilena de José Luñiz, el Santo se puso en ventaja, pero el local le dio vuelta con un
            polémico arbitraje, ganando el millonario por 2 a 1.
          </p>
          <p>Otros partidos muy recordados en los Nacionales son el empate ante Racing en Salta en el 75, en el mismo Nacional, goleada a favor ante Gimnasia de La Plata
            por 6 a 1. La máxima goleada ante Santa Rosa de la Pampa por 7 a 1 en el 83, derrota en el debut también en el Nacional 83 ante San Lorenzo en cancha de Velez,
            con una multitud que viajo desde Salta.</p>
          <p>
            Una nueva restructuración marcaba un nuevo objetivo, llegar al flamante Nacional B de AFA, para ello se crea el Torneo del Interior, torneo en que Juventud
            participa en forma consecutiva desde 1986 hasta 1995, sin conseguir el ascenso, pero jugando todos los torneos de estas características, hasta su reemplazo
            por el Argentino A, en el debut de este nuevo torneo, en la temporada 1995/96, el Santo realiza una gran campaña, llegando a la final ante Cipolletti.
            En la ida en Salta fue empate en cero, lo que parecía que el sueño del ascenso iba a volver a quedar trunco, pero once héroes consiguieron el triunfo en el
            sur, el gol de Espeche retumbo en toda la provincia, y luego de tantos años de lucha, se pudo llegar por fin al Nacional B, fueron 10 años de lucha para
            llegar a este objetivo.
          </p>
          <p>
            Solo una temporada en Nacional B, un golpe durísimo, el descenso, pero nuevamente el ascenso, un equipo de categoría para volver a gritar campeón del Argentino A
            en el 98 y volver a la máxima categoría de ascenso. En este regreso el Santo hizo su mejor campeonato en un torneo de AFA, un equipo que dejaba todo en cada
            partido, se llegó a los play off, dejando en el camino a Gimnasia y Tiro, San Martin de Tucumán y la semifinal ante All Boys, con el recordado 5 a 3 en
            Floresta, con un cierre de oro, con el gol de mitad de cancha de Miguel Ángel “Pichi” Velarde, en la final ante el Chacarita del sindicalista Barrionuevo no
            se pudo, empate en Salta y derrota en San Martín.
          </p>
          <p>
            Hasta el 2006 se mantuvo la categoría, hasta que llego el descenso, varios años en el Argentino/Federal A, hasta un nuevo descenso en el 2019 para
            jugar los torneos regionales hasta la fecha. Lo más destacado antes de este último descenso, fue un partido que mantuvo en vilo a la provincia, el 3 de mayo
            del 2014, por esas cosas del destino, tuvieron que jugar un desempate por no descender los máximo rivales de la provincia. Luego del empate sin goles,
            llegaron los penales, Mariano Maino (ex arquero del clásico rival) ataja un penal, Matías López liquida la serie para enviar al descenso a Central Norte.
          </p>
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}>
          <h2>Logros y Récords</h2>
          <ul>
            <li>
              Campeón regional 1971 (consiguiendo la clasificación al Torneo Nacional, siendo el primer salteño en llegar a primera división, en ese mismo torneo
              José Artemio Luñiz, delantero antoniano, consiguió ser el máximo artillero del certamen, siendo el primer goleador en primera división jugando para un
              equipo indirectamente afiliado a AFA)
            </li>
            <li>Clasificación a los Nacionales 1971, 1973, 1975, 1978, 1983 y 1985</li>
            <li>Récord nacional de 44 partidos invicto (1988/89).</li>
            <li>2 veces campeón del Torneo Argentino A (1995/96 y 1997/98).</li>
          </ul>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}>
          <h2>Datos Destacados</h2>
          <p><strong>Apodo del Club:</strong> Santo (anteriormente "Franciscano").</p>
          <p><strong>Clásicos:</strong>
            <ul>
              <li>Central Norte (Salta) - Principal rival.</li>
              <li>Gimnasia y Esgrima (Jujuy) - Regional.</li>
              <li>Gimnasia y Tiro (Salta) - Primer clásico.</li>
            </ul>
          </p>
          <p><strong>Estadio:</strong> Fray Honorato Pistoia.</p>
          <p><strong>Máximos goleadores:</strong> Rodolfo Garnica y Luis Rivero.</p>
          <p><strong>Jugadores con más partidos:</strong> Luis Flores y Nelson Marin.</p>
          <p><strong>Máximo goleador en torneos de AFA y Consejo Federal:</strong> Miguel Ángel Velarde.</p>
          <p><strong>Jugador con más partidos en AFA y Consejo Federal:</strong> José Antonio Valdiviezo.</p>
          <p><strong>Jugadores destacados:</strong> Arturo Wierna, Hugo Castellanos, Silvano Castellanos, Luis Pacheco, José Pacheco, Celencio Valle, José Lazarte,
            Juan Manuel Juárez, Arturo Botelli, Miguel Soto, Mariano Echazu, Dimarco, Oscar Miranda, Eduardo Kulesza, Juan Carlos Berruezo, Héctor Ruiz,
            Pablo de las Mercedes Cárdenas, Néstor Colque, Ricardo Aniceto Roldan, Juan Carlos Rico, Juan de Dios Laguna, Abelardo Iñiguez, Néstor Gómez,
            José Luñiz, José Ferreyra, Osvaldo Mazo, Luis Rivero, Pedro Albornoz, Marcelo Jiménez, Roberto Medina, Mario Bustos, Néstor Choque, Rodolfo Garnica,
            Luis Flores, Omar Américo Vargas, José Luis Córdoba, Osvaldo Maggio, Sergio Balmaceda, Marcelo Cortes, Roberto Walter Mamani, Gustavo Vera, Carlos Cil,
            Marcelo Cil, Raúl Olarte, Pablo Saldaño, Adrián Cuadrado, José Antonio Valdiviezo, Nelson Marín, Héctor Aguirre, José Pereyra, Martin Ligori, Raúl Iturrieta,
            Esteban Espeche, Juan Carlos Pruyas, Miguel Ángel Velarde, Carlos Rosas, Cristian Contreras, Alejandro Casal, Jorge Peña, Nicolas Jiménez, Alberto Boggio,
            Claudio Mir, Sergio Albornoz, Gustavo Lucco, Oscar Gómez, Ángel Bernuncio, Mauro Laspada, Cristian Alfaro, Daniel Ramasco, Pablo Rodríguez, Ricardo Gómez,
            David Cerutti, Luis Velázquez, Sergio Liendro, Víctor Vargas, Juan Pablo Cárdenas, Marcos Navarro, Carlos Medina, Matías Rinaudo, José Luis Campi,
            Raúl Gorostegui, Oscar Domínguez, Hernán Hechalar, Gustavo Ortiz, Gustavo Ibañez, Gustavo Balvorin, Nicolas Perez, Martin Esparza.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}>
          <h2>Dirigentes Destacados</h2>
          <p><strong>Ingeniero Alfonso Peralta:</strong> Primer presidente (provisorio), y el dirigente con más años en el cargo de presidencial (18 años en
            distintas etapas), además un reconocido ingeniero en la provincia de Salta. Impulsor de obras hidráulicas tendientes a la evolución y desarrollo de la
            provincia, fundador (1934) y primer presidente de la Asociación de Ingenieros, Arquitectos y Agrimensores de Salta. Representante de la provincia de Salta
            en la Comisión Bicameral en la década del 60 para la defensa de los derechos de la provincia de Salta en la cuestión de límites con Jujuy. El embalse del
            Dique Campo Alegre lleva su nombre. (Nombre completo: Mariano José Francisco Alfonso Peralta).
          </p>
          <p><strong>Fray Honorato Pistoia:</strong> Llegó a Salta en 1954. En aquellas décadas, el Centro Juventud Antoniana, por estatuto, contaba con un padre directo,
            asignado por la orden mayor de los franciscanos, durante muchos años fue Fray Honorato Pistoia, convirtiéndose con el tiempo en el guía espiritual más importante
            de nuestra historia, no solamente por su función específica de guiar a los socios y dirigentes como lo marcaba el estatuto, sino por ser un hincha tan fanático
            como aquel salteño que de toda su vida alienta desde los tablones. Socio fundando del Instituto Guemesiano de Salta, director del Instituto Padre Gabriel
            Tommasini, docente, periodista, escribió varios libros (“La Iglesia en Salta en la época hispánica” incluido en “Estudio socio económico y cultural de Salta”
            Centro de Investigaciones de la Universidad Nacional de Salta, Tomo III. "La Iglesia de Salta en la época hispánica". “Los Franciscanos en el Tucumán
            1566 - 1810”. “Los Franciscanos en el Tucumán y en el Norte Argentino 1566-1973”. “El pensamiento politico de Güemes”. (Nombre real: Benedetto Pistoia)</p>
        </motion.section>
      </div>
    </div>
  );
};

export default HistoriaPage;
