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

import "../styles/style.css";

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
                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Em breve, registros visuais do nosso projeto
                            </h2>

                            <p>
                                Esta página será atualizada com imagens das ações realizadas,
                                oficinas criativas, feiras, encontros, produções artesanais,
                                eventos culturais e momentos especiais da nossa trajetória.
                            </p>

                            <p>
                                A galeria será um espaço para valorizar histórias, pessoas,
                                talentos, parcerias e resultados que fazem parte do Enlace
                                das Arteiras.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="galeria-card"
                            variants={slideLeft}
                            whileHover={refinedHover}
                        >
                            <h3>O que você encontrará aqui futuramente</h3>

                            <Motion.ul variants={staggerContainer}>
                                <Motion.li variants={cardItem}>Fotos de oficinas e cursos;</Motion.li>
                                <Motion.li variants={cardItem}>Registros das feiras e eventos;</Motion.li>
                                <Motion.li variants={cardItem}>Produtos artesanais produzidos;</Motion.li>
                                <Motion.li variants={cardItem}>Momentos com parceiros e apoiadores;</Motion.li>
                                <Motion.li variants={cardItem}>Antes e depois de produções criativas;</Motion.li>
                                <Motion.li variants={cardItem}>Galeria das arteiras participantes;</Motion.li>
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
                        <span className="subtitulo">Prévia da Galeria</span>

                        <h2>Espaço reservado para fotos do projeto</h2>

                        <Motion.div className="galeria-grid-preview" variants={staggerContainer}>
                            {["📷", "🎨", "🛍️", "🤝", "🌱", "✨"].map((item) => (
                                <Motion.div
                                    className="galeria-placeholder"
                                    key={item}
                                    variants={cardItem}
                                    whileHover={refinedHover}
                                >
                                    {item}
                                </Motion.div>
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
                        <h2>
                            Cada imagem contará uma história
                        </h2>

                        <p>
                            Em breve, esta página reunirá fotos e registros que mostram
                            a força da arte, da cultura, da sustentabilidade e das mulheres
                            que fazem parte do Enlace das Arteiras.
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
