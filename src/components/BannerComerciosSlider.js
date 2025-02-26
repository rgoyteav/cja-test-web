import React from "react";
import "./BannerComerciosSlider.css"; // Use the same CSS as BannerSlider
import logoNardini from '../assets/nardini-srl.jpeg';
import logoPunaRentals from '../assets/puna-rentals.png';
import logoHotelDelVino from '../assets/hotel-del-vino-large-2.png'
import logoAbril from '../assets/abril-frutos-secos.png';
import logoZeus from '../assets/zeus-peluqueria.jpeg';
import logoEmele from '../assets/emele-sublimaciones.jpeg';
import logoMz from '../assets/mz-construcciones.jpeg';
import logoLasMascios from '../assets/las-mascios-boutique.jpeg';
import logoSuperCasino from '../assets/super-casino.jpeg';
import logoBaruTiendaSaludable from '../assets/baru-tienda-saludable.jpeg';
import logoMapacheBar from '../assets/mapache-bar.jpeg';
import logoBooguieRetroBar from '../assets/booguie-retro-bar.jpeg';
import logoElMisterPlays from '../assets/el-mister-plays.jpeg';
import logoSEBeautique from '../assets/se-beautique.jpeg';
import logoMarianoTorresTaller from '../assets/mariano-torres-taller.jpeg';
import logoSigsas from '../assets/sigsas.png';
import logoTiendaLaFortuna from '../assets/tienda-la-fortuna.jpeg';
import logoBarberiaCastillo from '../assets/barberia-castillo.jpeg';
import logoFerreteriaGay from '../assets/ferreteria-gay.jpeg';
import logoSandwicheriaChanchin from '../assets/sandwicheria-chanchin.jpeg';
import logoSaltaLac from '../assets/saltalac.jpeg';
import logoMymCelulares from '../assets/mym-celulares.png';
import logoSuplementosNutricionales from '../assets/suplementos-nutricionales-salta.jpeg';
import logoCristianCelulares from '../assets/cristian-celulares.jpeg';
import logoMecanicaRicardoMartin from '../assets/ricardo-martin-mecanica-integral.png';
import logoNegroCopa from '../assets/lo-del-negro-copa.png';
import logoGuzmanRepuestos from '../assets/guzman-repuestos.jpeg';
import logoStarCars from '../assets/star-cars.jpeg';
import logoBateriasZarate from '../assets/baterias-zarate.jpeg';
import logoHefestoHerreria from '../assets/hefesto-herreria.jpeg';
import logoDonTomas from '../assets/kiosco-don-tomas.png';
import logoLgHerreria from '../assets/lg-herreria.jpeg';
import logoVove from '../assets/vove.jpeg';
import logoAlwaysRentACar from '../assets/always-rent-a-car.jpeg';
import logoViaBana from '../assets/heladeria-via-bana.png';
import logoMaxiPeluqueriaYBarberia from '../assets/maxi-peluqueria-barberia.png';
import logoEdinor from '../assets/edinor.jpeg';
import logoTeatroAdn from '../assets/teatro-adn.jpeg';
import logoCabanasOhana from '../assets/cabanas-ohana.jpeg';
import logoKoki from '../assets/koki.jpeg';
import logoLitoGolosinas from '../assets/lito-golosinas.jpeg';
import logoLocosPorLasGolosinas from '../assets/locos-por-las-golosinas.jpeg';
import logoQueicos from '../assets/queicos.jpeg';
import logoChiri from '../assets/lo-de-chiri.jpeg';

const BannerComerciosSlider = () => {
    // List of businesses with their logos and links
    const allBusinesses = [
        { imgSrc: logoHotelDelVino, altText: "Del Vino Hotel Boutique", link: "#" },
        { imgSrc: logoPunaRentals, altText: "Puna Rentals", link: "#" },
        { imgSrc: logoNardini, altText: "Nardini SRL", link: "#" },
        { imgSrc: logoAbril, altText: "Abril Frutos Secos", link: "#" },
        { imgSrc: logoZeus, altText: "Zeus Peluquería", link: "#" },
        { imgSrc: logoEmele, altText: "Emele Sublimación & Gráfica", link: "#" },
        { imgSrc: logoMz, altText: "MZ Construcciones", link: "#" },
        { imgSrc: logoLasMascios, altText: "Las Mascio's Boutique", link: "#" },
        { imgSrc: logoSuperCasino, altText: "Súper Casino", link: "#" },
        { imgSrc: logoBaruTiendaSaludable, altText: "Barú Tienda Saludable", link: "#" },
        { imgSrc: logoMapacheBar, altText: "Mapache Bar", link: "#" },
        { imgSrc: logoBooguieRetroBar, altText: "Booguie Retro Bar", link: "#" },
        { imgSrc: logoElMisterPlays, altText: "El Mister Plays", link: "#" },
        { imgSrc: logoSEBeautique, altText: "SE Beautique", link: "#" },
        { imgSrc: logoMarianoTorresTaller, altText: "Taller Mariano Torres", link: "#" },
        { imgSrc: logoSigsas, altText: "SIGSAS", link: "#" },
        { imgSrc: logoTiendaLaFortuna, altText: "Tienda La Fortuna", link: "#" },
        { imgSrc: logoBarberiaCastillo, altText: "Barbería Castillo", link: "#" },
        { imgSrc: logoFerreteriaGay, altText: "Ferretería Gay", link: "#" },
        { imgSrc: logoSandwicheriaChanchin, altText: "Sandwichería Chanchín", link: "#" },
        { imgSrc: logoSaltaLac, altText: "SALTALAC", link: "#" },
        { imgSrc: logoMymCelulares, altText: "M&M Celulares", link: "#" },
        { imgSrc: logoSuplementosNutricionales, altText: "Suplementos Nutricionales Salta", link: "#" },
        { imgSrc: logoCristianCelulares, altText: "Cristian Celulares", link: "#" },
        { imgSrc: logoMecanicaRicardoMartin, altText: "Mecánica Integral Ricardo Martin", link: "#" },
        { imgSrc: logoNegroCopa, altText: "Lo del Negro Copa", link: "#" },
        { imgSrc: logoGuzmanRepuestos, altText: "Guzmán Repuestos", link: "#" },
        { imgSrc: logoStarCars, altText: "Star Cars Mecánica", link: "#" },
        { imgSrc: logoBateriasZarate, altText: "Baterías Zárate", link: "#" },
        { imgSrc: logoHefestoHerreria, altText: "Hefesto Herrería", link: "#" },
        { imgSrc: logoDonTomas, altText: "Kiosco Don Tomás", link: "#" },
        { imgSrc: logoLgHerreria, altText: "LG Herrería", link: "#" },
        { imgSrc: logoVove, altText: "VOVE", link: "#" },
        { imgSrc: logoAlwaysRentACar, altText: "Always Rent A Car", link: "#" },
        { imgSrc: logoViaBana, altText: "Heladería Via Bana", link: "#" },
        { imgSrc: logoMaxiPeluqueriaYBarberia, altText: "Maxi Peluquería y Barbería", link: "#" },
        { imgSrc: logoEdinor, altText: "EDINOR", link: "#" },
        { imgSrc: logoTeatroAdn, altText: "Teatro ADN", link: "#" },
        { imgSrc: logoCabanasOhana, altText: "Cabañas Ohana", link: "#" },
        { imgSrc: logoKoki, altText: "KOKI 24 Horas", link: "#" },
        { imgSrc: logoLitoGolosinas, altText: "Lito Golosinas", link: "#" },
        { imgSrc: logoLocosPorLasGolosinas, altText: "Locos por las Golosinas", link: "#" },
        { imgSrc: logoQueicos, altText: "Queicos Juice Bar", link: "#" },
        { imgSrc: logoChiri, altText: "Lo de Chiri Empanadas", link: "#" }
    ];

    // Duplicate the array to create a seamless loop effect
    const slides = [...allBusinesses, ...allBusinesses];

    const slideWidth = 200;
    const speedFactor = 2.5;
    const slideTrackStyle = {
        width: `${slides.length * slideWidth}px`,
        animationDuration: `${allBusinesses.length * speedFactor}s` // Adjust speed based on number of businesses
    };

    return (
        <div className="businessSlider">
            <div className="businessSlide-track" style={slideTrackStyle}>
                {slides.map((slide, index) => (
                    <div className="businessSlide" key={`businessSlide-${index}`}>
                        {/* <a href={slide.link} target="_blank" rel="noopener noreferrer"> */}
                        <a>
                            <img src={slide.imgSrc} alt={slide.altText} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerComerciosSlider;