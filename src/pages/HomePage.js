import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import logo from '../assets/escudo-cja.png'
import BannerSlider from '../components/BannerSlider';

const HomePage = () => {
    useEffect(() => {
        // Forzar que el script de Twitter se ejecute nuevamente
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
        }
    }, []); // Este useEffect se ejecuta cada vez que el componente se monta
    return (
        <div>
            <section className="fotos">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/425550398_684399557202284_7893717502934423826_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHYBNvUGRWq4rNRJla0GcqzaUmOkasFYg5pSY6RqwViDqJXD8uTyg8zAQkLE2gfo30&_nc_ohc=SPQt4se15hsQ7kNvgH5j8R4&_nc_oc=Adj4VNlgzznZq7dtrZUcwbWeHEJxmMVMOJHMFI3iqJbo5UXHM1O-yp8qYWRMYjRF974&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=A48eBbz_q-TFMFz2ZxShqSu&oh=00_AYBdO9Kk4dWRgB83SzFwBlcJCllf3ratGf5cKODiU3I5Mw&oe=678B3773"
                            alt="Primera foto"
                            style={{ height: '500px', objectFit: 'cover' }} // Asegura una altura uniforme
                        />
                        <Carousel.Caption
                            style={{
                                backgroundColor: 'rgba(240, 245, 245, 0.8)',  // Fondo de color gris claro
                                color: '#3C2713',  // Color de texto oscuro para buen contraste
                                padding: '20px',
                            }}
                        >
                            <h3>Bienvenidos al Centro Juventud Antoniana</h3>
                            <p>¡Asociate al club y formá parte de nuestra familia!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t39.30808-6/326735152_698064808636812_5142633167108157094_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGBqw3LpI6nU49ujs4eN-hfP-v-0x8wXeQ_6_7THzBd5LpMMtlKSkOfKFGFC5T1jeo&_nc_ohc=KRQc3aTOErYQ7kNvgGhm73i&_nc_oc=Adgnf_Cm-zGzt_kKRmHHttS2-937Bx55XfuT725Bj16-kApg7EseYRYDWU9-Dny6-hY&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=A6dGiTUhDuQqpoNkgYt6aLm&oh=00_AYCpjYwxNQEBfZ6qYVgqZX5wOJlDucnI7oJ7RQ17GWtyhQ&oe=678B4530"
                            alt="Segunda foto"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption
                            style={{
                                backgroundColor: 'rgba(240, 245, 245, 0.8)',  // Fondo de color gris claro
                                color: '#3C2713',  // Color de texto oscuro para buen contraste
                                padding: '20px',
                            }}
                        >
                            <h3>El más popular desde 1916</h3>
                            <p>Hace 109 años, somos el único Santo del país</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://scontent.fsla1-1.fna.fbcdn.net/v/t1.6435-9/82178711_2985455058145659_5607948427703877632_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGoOeKZLR2GMFbeIYIfYMeUzU0rfidjNKDNTSt-J2M0oOCocNq9sWHIZawfVzLv9HQ&_nc_ohc=YwYtnmhzKVMQ7kNvgFWPf2R&_nc_oc=Adhqapd3kuIqVG98pbBCyYze_bwd2kyA-yhRqphlrJFs9wnJeOm68_Dsx9HR1E6hbKd-TxZN2cV-C45D02gtdaBX&_nc_zt=23&_nc_ht=scontent.fsla1-1.fna&_nc_gid=ABUgjBve5G5qfUIZRNu872J&oh=00_AYBtZAkJwcsdOj4AjZTzg_Iz4kDzuRBgRInqAJa4xm9lIA&oe=67ACD99E"
                            alt="Tercera foto"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption
                            style={{
                                backgroundColor: 'rgba(240, 245, 245, 0.8)',  // Fondo de color gris claro
                                color: '#3C2713',  // Color de texto oscuro para buen contraste
                                padding: '20px',
                            }}
                        >
                            <h3>¡El santo no se explica, se siente!</h3>
                            <p>Venite, ponete la camiseta y viví esta pasión.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <BannerSlider />

            <section className="publicidad" style={{ textAlign: 'center', padding: '40px 0', backgroundColor: '#F0F5F5', color: '#0c3553' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '30px' }}>¡No te lo pierdas!</h2>
                <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                    Conocé los comercios adheridos a nuestro programa de beneficios para socios y aprovechá promociones exclusivas.
                    <br />¡Tu oportunidad de ser parte del club más grande está aquí!
                </p>
                <a href="/beneficios" style={{
                    backgroundColor: '#0c3553', color: '#FFF', padding: '15px 30px', fontSize: '18px',
                    textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s'
                }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#255a7b'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0c3553'}>
                    Programa de Beneficios
                </a>
            </section>

             <section className="redes-sociales-preview" style={{ textAlign: 'center', padding: '40px 0', backgroundColor: '#F0F5F5' }}>
                <h2 style={{ color: '#0c3553' }}>¡Conectate con el Santo!</h2>
                <p style={{ color: '#3C2713', fontSize: '18px' }}>
                    Descubrí las últimas novedades en nuestras redes sociales. ¡Seguinos y formá parte de nuestra comunidad!
                </p>

                
                <div className="social-iframe" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                    
                    <iframe
                        title="Facebook"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCJAOficial&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="340"
                        height="500"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>

                    <iframe
                        title="Instagram"
                        src="https://www.instagram.com/cjaoficial/embed"
                        width="340"
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        allow="encrypted-media"
                        style={{ border: 'none', overflow: 'hidden' }}
                    ></iframe>

                    <a class="twitter-timeline"
                        data-width="340"
                        data-height="500"
                        href="https://twitter.com/CJAOficial?ref_src=twsrc%5Etfw"></a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </section>

            <section style={{ padding: '40px 0', textAlign: 'center', padding: '40px 0', backgroundColor: '#F0F5F5' }}>
                <h2 style={{ color: '#0c3553', marginBottom: '20px' }}>Nuestra Ubicación</h2>
                <p style={{ marginBottom: '20px', color: '#333' }}>Visitanos en el Fray Honorato Pistoia</p>
                <div style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', width: '80%', margin: '0 auto' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2133422073393!2d-65.41009682416751!3d-24.797709908175896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a0f7908bb3%3A0xfdef52fe82fcbfe6!2sLerma%20601%2C%20A4400%20Salta!5e1!3m2!1ses-419!2sar!4v1736885097126!5m2!1ses-419!2sar"
                        width="100%"
                        height="400"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Ubicación Juventud Antoniana"
                    ></iframe>
                </div>
            </section>

            <section className="contact" style={{ padding: '40px 10px', backgroundColor: '#F0F5F5' }}>
                {/* Aquí agregamos el Formulario de Contacto */}
                <ContactForm />
            </section>
        </div>
    );
};

export default HomePage;
