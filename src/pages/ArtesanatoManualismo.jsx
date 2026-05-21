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

export default function ArtesanatoManualismo() {
    return (
        <>
            <Navbar />
            <main className="artesanato-page">
                <Motion.section
                    className="artesanato-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="artesanato-container">

                        <Motion.div className="artesanato-info" variants={slideRight}>
                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Em breve, novos conteúdos sobre artesanato e manualismo
                            </h2>

                            <p>
                                Esta página será atualizada com informações sobre técnicas
                                artesanais, peças produzidas, oficinas, processos criativos,
                                materiais utilizados e ações voltadas ao fortalecimento do
                                trabalho manual.
                            </p>

                            <p>
                                O objetivo é valorizar o artesanato como expressão cultural,
                                fonte de renda, criatividade, sustentabilidade e transformação
                                social.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="artesanato-card"
                            variants={slideLeft}
                            whileHover={refinedHover}
                        >
                            <h3>O que você encontrará aqui futuramente</h3>

                            <Motion.ul variants={staggerContainer}>
                                <Motion.li variants={cardItem}>Peças artesanais produzidas pelas arteiras;</Motion.li>
                                <Motion.li variants={cardItem}>Técnicas de manualismo e criação artística;</Motion.li>
                                <Motion.li variants={cardItem}>Oficinas de artesanato e capacitação;</Motion.li>
                                <Motion.li variants={cardItem}>Produtos feitos com materiais reutilizados;</Motion.li>
                                <Motion.li variants={cardItem}>Histórias das mulheres artesãs;</Motion.li>
                                <Motion.li variants={cardItem}>Galeria com fotos dos trabalhos;</Motion.li>
                                <Motion.li variants={cardItem}>Feiras, exposições e ações culturais.</Motion.li>
                            </Motion.ul>
                        </Motion.div>

                    </div>
                </Motion.section>

                <Motion.section
                    className="artesanato-cta"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <Motion.div className="artesanato-cta-content" whileHover={{ scale: 1.01 }}>
                        <h2>
                            A arte feita à mão conta histórias
                        </h2>

                        <p>
                            Em breve, esta página reunirá produções, oficinas e registros
                            que mostram a força do artesanato e do manualismo dentro do
                            Enlace das Arteiras.
                        </p>

                        <a href="/parceiros" className="btn-artesanato-primary">
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
