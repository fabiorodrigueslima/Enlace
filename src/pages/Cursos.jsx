import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion as Motion } from "framer-motion";
import {
    cardItem,
    fadeUp,
    refinedHover,
    scaleIn,
    staggerContainer,
    viewportOnce,
} from "../utils/animations";

import "../styles/style.css";

export default function Cursos() {
    const linkInscricao = "https://forms.gle/3TRrAM6NgWEAHi1B8";

    return (
        <>
            <Navbar />

            <main className="cursos-page">
                <Motion.section
                    className="cursos-hero"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <Motion.div className="cursos-hero-content" variants={staggerContainer}>
                        <span className="subtitulo">Formação e criatividade</span>

                        <h1>Cursos, Oficinas e Vivências</h1>

                        <p>
                            O Enlace das Arteiras promove atividades formativas voltadas ao
                            fortalecimento feminino, à economia criativa, à sustentabilidade
                            e à valorização do fazer artesanal.
                        </p>

                        <p>
                            As oficinas, palestras, cursos e vivências foram desenvolvidas
                            para ampliar conhecimentos, fortalecer capacidades empreendedoras
                            e incentivar conexões comunitárias através da arte e da cultura.
                        </p>
                    </Motion.div>
                </Motion.section>

                <Motion.section
                    className="oficinas-section"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="oficinas-container">
                        <Motion.div className="oficinas-topo" variants={fadeUp}>
                            <span className="subtitulo">Programação</span>
                            <h2>Oficinas disponíveis</h2>
                            <p>
                                Confira as atividades com inscrições abertas e participe dessa
                                rede de aprendizado, arte e transformação.
                            </p>
                        </Motion.div>

                        <div className="oficinas-grid">
                            <Motion.article
                                className="oficina-card"
                                variants={scaleIn}
                                whileHover={refinedHover}
                            >
                                <Motion.div
                                    className="oficina-banner"
                                    initial={{ scale: 1.04 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1.1, ease: "easeOut" }}
                                    viewport={viewportOnce}
                                />

                                <Motion.div className="oficina-content" variants={staggerContainer}>
                                    <span className="oficina-tag">Vivência</span>

                                    <h3>Vivência Mulheres em Roda</h3>

                                    <Motion.div className="oficina-info" variants={staggerContainer}>
                                        <Motion.p variants={cardItem}>
                                            <strong>Data:</strong> 26, 27 e 28/05/2026
                                        </Motion.p>

                                        <Motion.p variants={cardItem}>
                                            <strong>Horário:</strong> 14h às 18h
                                        </Motion.p>

                                        <Motion.p variants={cardItem}>
                                            <strong>Local:</strong> Centro de Práticas Sustentáveis -
                                            CPS
                                        </Motion.p>

                                        <Motion.p variants={cardItem}>
                                            <strong>Carga horária:</strong> 12h
                                        </Motion.p>
                                    </Motion.div>

                                    <p className="oficina-resumo">
                                        Atividade sensível e imersiva que utiliza linguagens
                                        artísticas como teatro, dança, poesia e práticas manuais
                                        para promover troca, escuta e conexão entre mulheres.
                                    </p>

                                    <a
                                        href={linkInscricao}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-inscricao"
                                    >
                                        Inscreva-se
                                    </a>
                                </Motion.div>
                            </Motion.article>
                        </div>
                    </div>
                </Motion.section>

                <Motion.section
                    className="galeria-cursos"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="galeria-cursos-container">
                        <span className="subtitulo">Galeria</span>

                        <h2>Registros das atividades</h2>

                        <Motion.div className="galeria-carrossel" variants={staggerContainer}>
                            {["Foto 1", "Foto 2", "Foto 3", "Foto 4"].map((item) => (
                                <Motion.div
                                    className="galeria-item"
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
                    className="cursos-destaque"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <Motion.div className="cursos-destaque-content" whileHover={{ scale: 1.01 }}>
                        <h2>Aprender juntas é transformar realidades!</h2>

                        <p>
                            Participe das oficinas, fortaleça seu talento e faça parte desta
                            rede de mulheres que constroem um futuro mais criativo,
                            sustentável e solidário. As atividades são gratuitas e voltadas
                            para mulheres artesãs e manualistas do Jardim Botânico e São
                            Sebastião - DF.
                        </p>

                        <a
                            href={linkInscricao}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cursos-primary"
                        >
                            Faça sua inscrição
                        </a>

                        <strong className="vagas-limitadas">Vagas limitadas!</strong>
                    </Motion.div>
                </Motion.section>

                <Motion.section
                    className="cursos-aviso"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <Motion.div className="cursos-aviso-content" whileHover={{ x: 6 }}>
                        <h3>Informação importante</h3>

                        <p>
                            É necessário a doação de{" "}
                            <strong>1 kg de alimento não perecível</strong> no dia da
                            atividade, destinado à cooperativa parceira.
                        </p>
                    </Motion.div>
                </Motion.section>
            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
}
