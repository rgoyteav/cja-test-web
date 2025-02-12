import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../styles/FotosPage.css';
import portadaFray from '../assets/pictures/fray/fray-1.JPG';
import carouselFray1 from '../assets/pictures/fray/fray-1.JPG';
import carouselFray2 from '../assets/pictures/fray/fray-2.jpg';
import carouselFray3 from '../assets/pictures/fray/fray-3.jpg';
import carouselFray4 from '../assets/pictures/fray/fray-4.jpg';
import carouselFray5 from '../assets/pictures/fray/fray-5.jpg';
import carouselFray6 from '../assets/pictures/fray/fray-6.jpg';
import carouselFray8 from '../assets/pictures/fray/fray-8.jpeg';
import portadaFamiliaAntoniana from '../assets/pictures/familia/familia-3.JPG';
import carouselFamilia1 from '../assets/pictures/familia/familia-3.JPG';
import carouselFamilia2 from '../assets/pictures/familia/familia-1.JPG';
import carouselFamilia3 from '../assets/pictures/familia/familia-2.JPG';
import carouselFamilia4 from '../assets/pictures/familia/familia-4.JPG';
import carouselFamilia5 from '../assets/pictures/familia/familia-5.jpg';
import carouselFamilia6 from '../assets/pictures/familia/familia-6.jpg';
import carouselFamilia7 from '../assets/pictures/familia/familia-7.jpg';
import carouselFamilia8 from '../assets/pictures/familia/familia-8.jpg';
import carouselFamilia9 from '../assets/pictures/familia/familia-9.jpg';
import portadaHinchada from '../assets/pictures/hinchada/hinchada-10.jpg';
import carouselHinchada1 from '../assets/pictures/hinchada/hinchada-10.jpg';
import carouselHinchada2 from '../assets/pictures/hinchada/hinchada-1.JPG';
import carouselHinchada3 from '../assets/pictures/hinchada/hinchada-2.JPG';
import carouselHinchada4 from '../assets/pictures/hinchada/hinchada-3.JPG';
import carouselHinchada5 from '../assets/pictures/hinchada/hinchada-4.JPG';
import carouselHinchada6 from '../assets/pictures/hinchada/hinchada-5.JPG';
import carouselHinchada7 from '../assets/pictures/hinchada/hinchada-6.JPG';
import carouselHinchada8 from '../assets/pictures/hinchada/hinchada-7.jpg';
import carouselHinchada9 from '../assets/pictures/hinchada/hinchada-8.jpg';
import carouselHinchada10 from '../assets/pictures/hinchada/hinchada-9.jpg';
import carouselHinchada11 from '../assets/pictures/hinchada/hinchada-11.jpg';
import carouselHinchada12 from '../assets/pictures/hinchada/hinchada-12.jpg';
import carouselHinchada13 from '../assets/pictures/hinchada/hinchada-13.jpg';
import carouselHinchada14 from '../assets/pictures/hinchada/hinchada-14.jpg';
import carouselHinchada15 from '../assets/pictures/hinchada/hinchada-15.jpg';
import carouselHinchada16 from '../assets/pictures/hinchada/hinchada-16.jpg';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
};


const FotosPage = () => {
  // Estado para controlar cuál carousel está activo
  const [activeCarousel, setActiveCarousel] = useState(null);

  // Función para mostrar el carousel correspondiente al hacer clic
  const handleShowCarousel = (albumId) => {
    setActiveCarousel(albumId); // Cambia al carousel correspondiente
  };

  const handleGoBack = () => {
    setActiveCarousel(null); // Vuelve al estado inicial (portadas)
  };

  return (
    <motion.div className="fotos"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}>
      <p>
        ¡Explora nuestra galería de imágenes!
      </p>
      <p>
        Hacé clic en una portada para ver las fotos de cada álbum.
      </p>
      {/* Contenedor de las portadas */}
      {!activeCarousel && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="portadas" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {/* Portada de Album 1 */}
            <div className="portada" onClick={() => handleShowCarousel(1)} style={{ position: 'relative', cursor: 'pointer' }}>
              <img
                src={portadaFray}
                alt="Portada Fray Honorato Pistoia"
                style={{
                  width: '300px', height: '200px', objectFit: 'cover', transition: 'transform 0.3s',
                }}
                className="portada-img"
              />
              <div className="portada-text" style={{
                position: 'absolute', bottom: '10px', left: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px'
              }}>
                <h5>Nuestra Casa</h5>
              </div>
            </div>

            {/* Portada de Album 2 */}
            <div className="portada" onClick={() => handleShowCarousel(2)} style={{ position: 'relative', cursor: 'pointer' }}>
              <img
                src={portadaFamiliaAntoniana}
                alt="Portada Familia Antoniana"
                style={{
                  width: '300px', height: '200px', objectFit: 'cover', transition: 'transform 0.3s',
                }}
                className="portada-img"
              />
              <div className="portada-text" style={{
                position: 'absolute', bottom: '10px', left: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px'
              }}>
                <h5>La Familia Antoniana</h5>
              </div>
            </div>

            {/* Portada de Album 3 */}
            <div className="portada" onClick={() => handleShowCarousel(3)} style={{ position: 'relative', cursor: 'pointer' }}>
              <img
                src={portadaHinchada}
                alt="Portada 2"
                style={{
                  width: '300px', height: '200px', objectFit: 'cover', transition: 'transform 0.3s',
                }}
                className="portada-img"
              />
              <div className="portada-text" style={{
                position: 'absolute', bottom: '10px', left: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px'
              }}>
                <h5>Hinchada</h5>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mostrar el Carousel de Álbum 1 si activeCarousel es 1 */}
      {activeCarousel === 1 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div>
            <Button onClick={handleGoBack} variant="secondary" style={{ marginBottom: '20px' }}>Volver</Button>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFray1}
                  alt="Fray Honorato Pistoia"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFray2}
                  alt="Fray Honorato Pistoia"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFray3}
                  alt="Fray Honorato Pistoia"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFray4}
                  alt="Fray Honorato Pistoia"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFray5}
                  alt="Fray Honorato Pistoia"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFray6}
                  alt="Fray Honorato Pistoia"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFray8}
                  alt="Fray Honorato Pistoia"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </motion.div>
      )}

      {/* Mostrar el Carousel de Álbum 2 si activeCarousel es 2 */}
      {activeCarousel === 2 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div>
            <Button onClick={handleGoBack} variant="secondary" style={{ marginBottom: '20px' }}>Volver</Button>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia1}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia2}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia3}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia4}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia5}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia6}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia7}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia8}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFamilia9}
                  alt="Familia Antoniana"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </motion.div>
      )}

      {/* Mostrar el Carousel de Álbum 3 si activeCarousel es 3 */}
      {activeCarousel === 3 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div>
            <Button onClick={handleGoBack} variant="secondary" style={{ marginBottom: '20px' }}>Volver</Button>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada1}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada2}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada3}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada4}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada5}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada6}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada7}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada8}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselHinchada9}
                  alt="Hinchada"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FotosPage;
