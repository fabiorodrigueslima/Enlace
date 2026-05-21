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

export default function SececDf() {
    return (
        <>
            <Navbar />

            <main className="secec-page">

                {/* CONTEÚDO */}
                <Motion.section
                    className="secec-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >

                    <div className="secec-container">

                        <Motion.div className="secec-info" variants={slideRight}>

                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Novas informações serão adicionadas em breve
                            </h2>

                            <p>
                                Estamos preparando conteúdos institucionais, informações
                                culturais, registros de ações, projetos apoiados, oficinas,
                                eventos e iniciativas relacionadas ao fortalecimento da cultura
                                e da economia criativa.
                            </p>

                            <p>
                                Esta página será atualizada continuamente para apresentar
                                novas atividades, parcerias, resultados e ações desenvolvidas
                                pelo projeto Enlace das Arteiras.
                            </p>

                        </Motion.div>

                        {/* CARD */}
                        <Motion.div
                            className="secec-card"
                            variants={slideLeft}
                            whileHover={refinedHover}
                        >

                            <h3>O que você encontrará aqui futuramente</h3>

                            <Motion.ul variants={staggerContainer}>
                                <Motion.li variants={cardItem}>Projetos culturais realizados;</Motion.li>
                                <Motion.li variants={cardItem}>Oficinas e ações comunitárias;</Motion.li>
                                <Motion.li variants={cardItem}>Feiras e eventos culturais;</Motion.li>
                                <Motion.li variants={cardItem}>Registros fotográficos;</Motion.li>
                                <Motion.li variants={cardItem}>Parcerias institucionais;</Motion.li>
                                <Motion.li variants={cardItem}>Informações sobre economia criativa;</Motion.li>
                                <Motion.li variants={cardItem}>Impacto social e cultural do projeto.</Motion.li>
                            </Motion.ul>

                        </Motion.div>

                    </div>

                </Motion.section>

                {/* CTA */}
                <Motion.section
                    className="secec-cta"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >

                    <Motion.div className="secec-cta-content" whileHover={{ scale: 1.01 }}>

                        <h2>
                            O projeto continua crescendo
                        </h2>

                        <p>
                            Continue acompanhando o Enlace das Arteiras para conhecer
                            novas ações, iniciativas culturais e projetos sociais.
                        </p>

                        <a href="/parceiros" className="btn-cta-primary">
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
