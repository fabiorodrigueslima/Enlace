import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion as Motion } from "framer-motion";
import {
    cardItem,
    fadeUp,
    refinedHover,
    slideLeft,
    slideRight,
    staggerContainer,
    viewportOnce,
} from "../utils/animations";

import fotoGaleria1 from "../assets/Galeria/1.png";
import fotoGaleria2 from "../assets/Galeria/2.png";
import fotoGaleria3 from "../assets/Galeria/3.png";
import fotoGaleria4 from "../assets/Galeria/4.png";
import fotoGaleria5 from "../assets/Galeria/5.png";
import fotoGaleria6 from "../assets/Galeria/6.png";
import fotoGaleria7 from "../assets/Galeria/7.png";
import fotoGaleria8 from "../assets/Galeria/8.png";
import fotoGaleria9 from "../assets/Galeria/9.png";
import fotoGaleria10 from "../assets/Galeria/10.png";
import fotoGaleria11 from "../assets/Galeria/11.png";
import fotoGaleria12 from "../assets/Galeria/12.png";
import fotoGaleria13 from "../assets/Galeria/13.png";
import fotoGaleria14 from "../assets/Galeria/14.png";
import fotoGaleria15 from "../assets/Galeria/15.png";

import "../styles/style.css";

const fotosGaleria = [
    fotoGaleria1,
    fotoGaleria2,
    fotoGaleria3,
    fotoGaleria4,
    fotoGaleria5,
    fotoGaleria6,
    fotoGaleria7,
    fotoGaleria8,
    fotoGaleria9,
    fotoGaleria10,
    fotoGaleria11,
    fotoGaleria12,
    fotoGaleria13,
    fotoGaleria14,
    fotoGaleria15,
];

export default function Galeria() {
    return (
        <>
            <Navbar />

            <main className="galeria-page">
                <Motion.section
                    className="galeria-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="galeria-container">
                        <Motion.div className="galeria-info" variants={slideRight}>
                            <span className="subtitulo">Galeria</span>

                            <h2>Registros das oficinas do projeto</h2>

                            <p>
                                Acompanhe momentos das ações realizadas pelo Enlace das
                                Arteiras, com registros das oficinas criativas, encontros,
                                práticas artesanais e vivências coletivas.
                            </p>

                            <p>
                                Cada imagem valoriza histórias, talentos, parcerias e a força
                                das mulheres que constroem essa rede de arte, cultura,
                                sustentabilidade e transformação social.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="galeria-card"
                            variants={slideLeft}
                            whileHover={refinedHover}
                        >
                            <h3>O que você encontra nesta galeria</h3>

                            <Motion.ul variants={staggerContainer}>
                                <Motion.li variants={cardItem}>Fotos de oficinas e cursos;</Motion.li>
                                <Motion.li variants={cardItem}>Registros de encontros e vivências;</Motion.li>
                                <Motion.li variants={cardItem}>Momentos de aprendizado coletivo;</Motion.li>
                                <Motion.li variants={cardItem}>Produções e processos criativos;</Motion.li>
                                <Motion.li variants={cardItem}>Memórias do projeto em ação.</Motion.li>
                            </Motion.ul>
                        </Motion.div>
                    </div>
                </Motion.section>

                <Motion.section
                    className="galeria-preview"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="galeria-preview-container">
                        <span className="subtitulo">Fotos das Oficinas</span>

                        <h2>Momentos registrados pelo Enlace das Arteiras</h2>

                        <Motion.div className="galeria-grid-preview" variants={staggerContainer}>
                            {fotosGaleria.map((foto, index) => (
                                <Motion.figure
                                    className="galeria-foto"
                                    key={foto}
                                    variants={cardItem}
                                    whileHover={refinedHover}
                                >
                                    <img
                                        src={foto}
                                        alt={`Registro ${index + 1} das oficinas do Enlace das Arteiras`}
                                        loading="lazy"
                                    />
                                    <figcaption>Registro {index + 1}</figcaption>
                                </Motion.figure>
                            ))}
                        </Motion.div>
                    </div>
                </Motion.section>

                <Motion.section
                    className="galeria-cta"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <Motion.div className="galeria-cta-content" whileHover={{ scale: 1.01 }}>
                        <h2>Cada imagem conta uma história</h2>

                        <p>
                            Esta página reúne fotos e registros que mostram a força da arte,
                            da cultura, da sustentabilidade e das mulheres que fazem parte do
                            Enlace das Arteiras.
                        </p>

                        <a href="/parceiros" className="btn-galeria-primary">
                            Conheça nossos parceiros
                        </a>
                    </Motion.div>
                </Motion.section>
            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
}
