import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../styles/FotosPage.css';


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
    <section className="fotos">
      <p>
        Explora nuestra galería de imágenes que capturan los momentos más representativos y
        memorables del Centro Juventud Antoniana. Desde eventos deportivos hasta actividades
        culturales, cada foto cuenta una historia única que refleja la energía y el compromiso de nuestra comunidad.
      </p>
      {/* Contenedor de las portadas */}
      {!activeCarousel && (
        <div className="portadas" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {/* Portada de Album 1 */}
          <div className="portada" onClick={() => handleShowCarousel(1)} style={{ position: 'relative', cursor: 'pointer' }}>
            <img
              src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/425550398_684399557202284_7893717502934423826_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHYBNvUGRWq4rNRJla0GcqzaUmOkasFYg5pSY6RqwViDqJXD8uTyg8zAQkLE2gfo30&_nc_ohc=SPQt4se15hsQ7kNvgH5j8R4&_nc_oc=Adj4VNlgzznZq7dtrZUcwbWeHEJxmMVMOJHMFI3iqJbo5UXHM1O-yp8qYWRMYjRF974&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=A48eBbz_q-TFMFz2ZxShqSu&oh=00_AYBdO9Kk4dWRgB83SzFwBlcJCllf3ratGf5cKODiU3I5Mw&oe=678B3773"
              alt="Portada 1"
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
              src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/444765319_750470990595140_1939201600114155998_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHWZEqQvt5XOpttZyWBD329tD6FqAZCt-e0PoWoBkK353j1_6HIBzuqycw3kOPokqA&_nc_ohc=Mtt2Ru8CPNkQ7kNvgEQzokP&_nc_oc=Adj-iiDYomlPX3dcsBZtO-EkwDuSsQXcGznSO3nvvURU5_tIfxgntKQA1l3xlxza1EVA1NsIWHo4itdQ7yV2s6t-&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AvL4i7ouFpAErwjyDxMYViG&oh=00_AYC2guMumyWlnkstMCLEQ2-6ddo9mR4bqpQjbStKly5Rsw&oe=678B6FF4"
              alt="Portada 2"
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
        </div>
      )}

      {/* Mostrar el Carousel de Álbum 1 si activeCarousel es 1 */}
      {activeCarousel === 1 && (
        <div>
          <Button onClick={handleGoBack} variant="secondary" style={{ marginBottom: '20px' }}>Volver</Button>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/425550398_684399557202284_7893717502934423826_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHYBNvUGRWq4rNRJla0GcqzaUmOkasFYg5pSY6RqwViDqJXD8uTyg8zAQkLE2gfo30&_nc_ohc=SPQt4se15hsQ7kNvgH5j8R4&_nc_oc=Adj4VNlgzznZq7dtrZUcwbWeHEJxmMVMOJHMFI3iqJbo5UXHM1O-yp8qYWRMYjRF974&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=A48eBbz_q-TFMFz2ZxShqSu&oh=00_AYBdO9Kk4dWRgB83SzFwBlcJCllf3ratGf5cKODiU3I5Mw&oe=678B3773"
                alt="Foto 1"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/261629424_4901326289891850_6969098742264142352_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE_k9rLR0ur_hNDnMMwq2fKgPWz-5-bQKCA9bP7n5tAoMZrrF4jnbFBUone4RSVVAc&_nc_ohc=LA9kWG6w4-UQ7kNvgHPsfs6&_nc_oc=AdiMqUlBxrvzNIdBBYmTOi4fUxO_Ak2leDFTEKFF0eZ3JKLAEmikH9s0aTkf3SUyof1BHm1yHUzUh9dnZ8EpQr3f&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AuqQcezTBHGEA0EUbHUbD3q&oh=00_AYDl3n2Af9du5OO_yOOwlIWPgyrljHEIR00Tki-Nw61bUQ&oe=678B7B6A"
                alt="Foto 2"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/260873577_4901324406558705_1609370463536985489_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHf0pjP0EmzXJz_JE9WTvS4o9lnrkI2An2j2WeuQjYCfSYPocKGhWYBVD-pu4IQYrI&_nc_ohc=D6r13DuCwTsQ7kNvgFsQgjK&_nc_oc=Adg84ZCNCnw84MS8mRnmvuIgzd99dWPGVvU2rp329OTCtfX380sGpc_aZo__8z03UaORIQxc4md8O0HSQVYZnqQH&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AvpR0SO_MlXkve_ehGas5VS&oh=00_AYAQO0UHs5dluWKHfNfLdyOGkymKYn4SL8zNxlVDQy5Qaw&oe=678B7A53"
                alt="Foto 3"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}

      {/* Mostrar el Carousel de Álbum 2 si activeCarousel es 2 */}
      {activeCarousel === 2 && (
        <div>
          <Button onClick={handleGoBack} variant="secondary" style={{ marginBottom: '20px' }}>Volver</Button>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/444765319_750470990595140_1939201600114155998_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHWZEqQvt5XOpttZyWBD329tD6FqAZCt-e0PoWoBkK353j1_6HIBzuqycw3kOPokqA&_nc_ohc=Mtt2Ru8CPNkQ7kNvgEQzokP&_nc_oc=Adj-iiDYomlPX3dcsBZtO-EkwDuSsQXcGznSO3nvvURU5_tIfxgntKQA1l3xlxza1EVA1NsIWHo4itdQ7yV2s6t-&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AvL4i7ouFpAErwjyDxMYViG&oh=00_AYC2guMumyWlnkstMCLEQ2-6ddo9mR4bqpQjbStKly5Rsw&oe=678B6FF4"
                alt="Foto 1"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/442509039_750471127261793_1757090670047241520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFOxgUjYHZgMTeGVb-zrZFeS3aYgs43plZLdpiCzjemVqcs1KtkCpGd_5lfcUhYbZc&_nc_ohc=mzyaXcfcIeEQ7kNvgFIgZI2&_nc_oc=AdhLu-ZV-ZBJFeIlLIUngh7AMnrW4VluhjhvzwuVjg4d6kJDLZ0dUHUqXyuLelPQKpLjIkfEVjcffBvozxdJnLEA&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AJGaBUz2Y-_LxeJxbiyK6KM&oh=00_AYDKGyn57f8wYqp1dEZ-01uo9C0MmpJnLh3kskXr9aSGyA&oe=678B8024"
                alt="Foto 2"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/442496398_750470467261859_4116270557769173639_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEdriEQp7cCDXUHJros2uRsLICuXmalzUcsgK5eZqXNR_FRnhTsXEH7epo4sSaiP7M&_nc_ohc=MvKdEeofDzsQ7kNvgF840JL&_nc_oc=AdjIkbjxWg88KfVnfjW7quN_0ACnYChlQqnfnITrjywZKSvAqAA0KFi8PydTVXHRdz_Q7ntGJZIkTrBJbhKHnWWI&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AcsObVh3PRxvjwD6dGxjpFx&oh=00_AYBbm1wrvJi5pKDP4028mU7mw0vNhcEtvYdSTdxx5Qq4WQ&oe=678B59BB"
                alt="Foto 3"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default FotosPage;
