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

import economiaCriativa from "../assets/EconomiaCriativa.jpeg";
import fotos from "../assets/Fotos.jpeg";
import harmoniaDeCores from "../assets/Harmonia de cores.jpeg";
import mulheresEmRoda from "../assets/mulheres-em-roda.jpeg";
import novasPossibilidades from "../assets/NovasPossibilidades.jpeg";
import redes from "../assets/Redes.jpeg";
import trabalho from "../assets/Trabalho.jpeg";

import "../styles/style.css";

export default function Cursos() {
    const linkInscricao = "https://forms.gle/3TRrAM6NgWEAHi1B8";

    const oficinas = [
        {
            tag: "Vivência",
            titulo: "Vivência Mulheres em Roda",
            data: "26, 27 e 28/05/2026",
            horario: "14h às 18h",
            local: "Centro de Práticas Sustentáveis - CPS",
            cargaHoraria: "12h",
            resumo:
                "Atividade sensível e imersiva que utiliza linguagens artísticas como teatro, dança, poesia e práticas manuais para promover troca, escuta e conexão entre mulheres.",
            imagem: mulheresEmRoda,
        },
        {
            tag: "Oficina",
            titulo: "Imagem Profissional e Harmonia de Cores",
            data: "08 e 10/06/2026",
            horario: "14h às 18h",
            local: "Centro de Práticas Sustentáveis - CPS",
            cargaHoraria: "08h",
            resumo:
                "A oficina tem como objetivo fortalecer a imagem profissional de artesãs e manualistas, trabalhando a forma como se apresentam no mercado e como comunicam valor por meio da estética.",
            imagem: harmoniaDeCores,
        },
        {
            tag: "Oficina",
            titulo: "Transforme suas redes sociais em uma vitrine de vendas",
            data: "13, 20 e 27/06/2026",
            horario: "08h30 às 12h30",
            local: "Centro de Práticas Sustentáveis - CPS",
            cargaHoraria: "12h",
            resumo:
                "Oficina voltada para ensinar noções básicas de divulgação em redes sociais e aplicativos de comunicação, ajudando artesãs e manualistas a ampliarem o alcance do seu trabalho e impulsionarem suas vendas.",
            imagem: redes,
        },
        {
            tag: "Oficina",
            titulo: "Valorize suas peças com fotos que vendem",
            data: "22, 24 e 26/06/2026",
            horario: "14h às 18h",
            local: "Centro de Práticas Sustentáveis - CPS",
            cargaHoraria: "12h",
            resumo:
                "Oficina prática que ensina técnicas básicas de fotografia de produtos, como iluminação, enquadramento e composição, para criar imagens que valorizam as peças e atraem mais clientes.",
            imagem: fotos,
        },
        {
            tag: "Oficina",
            titulo: "Seu Trabalho tem valor",
            data: "06 e 08/07/2026",
            horario: "14h às 17h",
            local: "Centro de Práticas Sustentáveis - CPS",
            cargaHoraria: "6h",
            resumo:
                "Oficina sobre precificação que ensina a calcular o valor das peças considerando custos, tempo de produção e despesas envolvidas.",
            imagem: trabalho,
        },
        {
            tag: "Oficina",
            titulo: "Transforme resíduos em novas possibilidades",
            data: "10/07/2026",
            horario: "14h às 16h",
            local: "Centro de Práticas Sustentáveis - CPS",
            cargaHoraria: "2h",
            resumo:
                "Oficina teórico-prática sobre separação e destinação correta de resíduos, com foco no uso de materiais recicláveis como matéria-prima para a produção artesanal. A atividade contará com intérprete de Libras.",
            imagem: novasPossibilidades,
        },
        {
            tag: "Oficina",
            titulo: "Saberes Tradicionais e Economia Criativa Feminina",
            data: "20 e 27/07/2026",
            horario: "14h às 18h",
            local: "Centro de Práticas Sustentáveis - CPS",
            cargaHoraria: "8h",
            resumo:
                "Vivência formativa voltada a mulheres interessadas em práticas sustentáveis e emancipatórias, a partir da economia solidária e criativa. A atividade promove reflexões sobre saberes tradicionais, ancestralidade feminina e experiências coletivas, estimulando autonomia, geração de renda e bem viver, além de fortalecer vínculos, afetividade e o protagonismo feminino nas relações de trabalho.",
            imagem: economiaCriativa,
        },
    ];

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

                        <a href="#oficinas-disponiveis" className="btn-cursos-primary">
                            Ver cursos e inscrições
                        </a>
                    </Motion.div>
                </Motion.section>

                <Motion.section
                    id="oficinas-disponiveis"
                    className="oficinas-section"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
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
                            {oficinas.map((oficina) => (
                                <Motion.article
                                    className="oficina-card"
                                    key={oficina.titulo}
                                    variants={scaleIn}
                                    whileHover={refinedHover}
                                >
                                    <Motion.div
                                        className="oficina-banner"
                                        style={{ backgroundImage: `url(${oficina.imagem})` }}
                                        initial={{ scale: 1.04 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 1.1, ease: "easeOut" }}
                                        viewport={viewportOnce}
                                        role="img"
                                        aria-label={`Banner da atividade ${oficina.titulo}`}
                                    />

                                    <Motion.div className="oficina-content" variants={staggerContainer}>
                                        <span className="oficina-tag">{oficina.tag}</span>

                                        <h3>{oficina.titulo}</h3>

                                        <Motion.div className="oficina-info" variants={staggerContainer}>
                                            <Motion.p variants={cardItem}>
                                                <strong>Data:</strong> {oficina.data}
                                            </Motion.p>

                                            <Motion.p variants={cardItem}>
                                                <strong>Horário:</strong> {oficina.horario}
                                            </Motion.p>

                                            <Motion.p variants={cardItem}>
                                                <strong>Local:</strong> {oficina.local}
                                            </Motion.p>

                                            <Motion.p variants={cardItem}>
                                                <strong>Carga horária:</strong> {oficina.cargaHoraria}
                                            </Motion.p>
                                        </Motion.div>

                                        <p className="oficina-resumo">{oficina.resumo}</p>

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
                            ))}
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
                            {oficinas.map((oficina) => (
                                <Motion.div
                                    className="galeria-item"
                                    key={oficina.titulo}
                                    variants={cardItem}
                                    whileHover={refinedHover}
                                    style={{ backgroundImage: `url(${oficina.imagem})` }}
                                    aria-label={`Registro da atividade ${oficina.titulo}`}
                                >
                                    <span>{oficina.titulo}</span>
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
