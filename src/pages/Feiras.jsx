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

export default function Feiras() {
    return (
        <>
            <Navbar />

            <main className="feiras-page">


                <Motion.section
                    className="feiras-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="feiras-container">

                        <Motion.div className="feiras-info" variants={slideRight}>
                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Em breve, novidades sobre nossas feiras e eventos
                            </h2>

                            <p>
                                Esta página será atualizada com informações sobre datas,
                                locais, participantes, registros fotográficos, exposições,
                                vendas e ações culturais realizadas pelo Enlace das Arteiras.
                            </p>

                            <p>
                                As feiras são espaços importantes para valorizar o trabalho
                                artesanal, fortalecer a economia criativa, aproximar a comunidade
                                e gerar oportunidades para mulheres empreendedoras.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="feiras-card"
                            variants={slideLeft}
                            whileHover={refinedHover}
                        >
                            <h3>O que você encontrará aqui futuramente</h3>

                            <Motion.ul variants={staggerContainer}>
                                <Motion.li variants={cardItem}>Calendário de feiras e eventos;</Motion.li>
                                <Motion.li variants={cardItem}>Locais e horários das próximas ações;</Motion.li>
                                <Motion.li variants={cardItem}>Produtos artesanais em exposição;</Motion.li>
                                <Motion.li variants={cardItem}>Participação das arteiras;</Motion.li>
                                <Motion.li variants={cardItem}>Registros fotográficos dos eventos;</Motion.li>
                                <Motion.li variants={cardItem}>Parcerias e apoiadores das feiras;</Motion.li>
                                <Motion.li variants={cardItem}>Resultados e impacto das ações realizadas.</Motion.li>
                            </Motion.ul>
                        </Motion.div>

                    </div>
                </Motion.section>

                <Motion.section
                    className="feiras-cta"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <Motion.div className="feiras-cta-content" whileHover={{ scale: 1.01 }}>
                        <h2>
                            A arte ganha vida quando chega à comunidade
                        </h2>

                        <p>
                            Em breve, esta página reunirá feiras, exposições e eventos
                            que conectam cultura, sustentabilidade, empreendedorismo
                            e transformação social.
                        </p>

                        <a href="/parceiros" className="btn-feiras-primary">
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
