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

export default function GastronomiaArtesanal() {
    return (
        <>
            <Navbar />

            <main className="gastronomia-page">

               

                <Motion.section
                    className="gastronomia-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="gastronomia-container">

                        <Motion.div className="gastronomia-info" variants={slideRight}>
                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Em breve, novidades sobre gastronomia artesanal
                            </h2>

                            <p>
                                Esta página será atualizada com informações sobre pratos,
                                receitas, oficinas, feiras gastronômicas, produção artesanal,
                                cultura alimentar e histórias de mulheres que transformam
                                sabores em oportunidade.
                            </p>

                            <p>
                                A gastronomia artesanal valoriza o cuidado, a memória, a
                                criatividade e a identidade cultural, fortalecendo a economia
                                criativa e a geração de renda.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="gastronomia-card"
                            variants={slideLeft}
                            whileHover={refinedHover}
                        >
                            <h3>O que você encontrará aqui futuramente</h3>

                            <Motion.ul variants={staggerContainer}>
                                <Motion.li variants={cardItem}>Receitas e produtos gastronômicos artesanais;</Motion.li>
                                <Motion.li variants={cardItem}>Oficinas de culinária criativa;</Motion.li>
                                <Motion.li variants={cardItem}>Feiras e eventos gastronômicos;</Motion.li>
                                <Motion.li variants={cardItem}>Histórias de empreendedoras da gastronomia;</Motion.li>
                                <Motion.li variants={cardItem}>Sabores regionais e afetivos;</Motion.li>
                                <Motion.li variants={cardItem}>Galeria com registros das produções;</Motion.li>
                                <Motion.li variants={cardItem}>Novidades sobre cursos e experiências culinárias.</Motion.li>
                            </Motion.ul>
                        </Motion.div>

                    </div>
                </Motion.section>

                <Motion.section
                    className="gastronomia-cta"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <Motion.div className="gastronomia-cta-content" whileHover={{ scale: 1.01 }}>
                        <h2>
                            Sabores que contam histórias
                        </h2>

                        <p>
                            Em breve, esta página reunirá produções, oficinas, eventos e
                            registros que valorizam a gastronomia artesanal dentro do
                            Enlace das Arteiras.
                        </p>

                        <a href="/parceiros" className="btn-gastronomia-primary">
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
