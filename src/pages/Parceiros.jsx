import "../styles/style.css";

import { motion as Motion } from "framer-motion";
import {
    cardItem,
    fadeUp,
    refinedHover,
    staggerContainer,
    viewportOnce,
} from "../utils/animations";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import parceiro1 from "../assets/Logo - Brasilia.png";
import parceiro2 from "../assets/Logo - Fac.png";
import parceiro3 from "../assets/Logo - Mariba.png";
import parceiro4 from "../assets/Logo - Movimento.png";
import parceiro5 from "../assets/Logo - Secretaria.png";

export default function Parceiros() {

    const parceiros = [
        {
            nome: "Brasília",
            imagem: parceiro1,
            descricao:
                "A parceria com Brasília fortalece ações culturais e valoriza iniciativas que promovem arte, cidadania e transformação social.",
        },

        {
            nome: "FAC",
            imagem: parceiro2,
            descricao:
                "O Fundo de Apoio à Cultura contribui para a realização de projetos culturais, incentivando a arte, o artesanato e a economia criativa.",
        },

        {
            nome: "Mariba",
            imagem: parceiro3,
            descricao:
                "A Mariba apoia iniciativas que fortalecem o trabalho coletivo, a produção artesanal e o desenvolvimento de ações junto à comunidade.",
        },

        {
            nome: "Movimento",
            imagem: parceiro4,
            descricao:
                "Essa parceria contribui para ampliar oportunidades, fortalecer redes colaborativas e apoiar mulheres artesãs e empreendedoras.",
        },

        {
            nome: "Secretaria de Cultura",
            imagem: parceiro5,
            descricao:
                "A Secretaria de Cultura apoia ações voltadas à valorização da cultura, sustentabilidade, inclusão social e fortalecimento das comunidades.",
        },
    ];

    return (
        <>
            <Navbar />

            <main className="parceiros-page">

                {/* TÍTULO DA PÁGINA */}
                <Motion.section
                    className="parceiros-header"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >

                    <span>Conexões que transformam</span>

                    <h1>Nossos Parceiros</h1>

                    <p>
                        Conheça as instituições, empresas e apoiadores
                        que caminham junto com a Enlace das Arteiras.
                    </p>

                </Motion.section>

                {/* PARCEIROS */}
                <section className="parceiros-section">

                    <Motion.div
                        className="parceiros-container"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >

                        <Motion.div
                            className="parceiros-intro"
                            variants={fadeUp}
                        >

                            <h2>Parcerias que fortalecem nossa missão</h2>

                            <p>
                                Cada parceiro faz parte da construção de projetos
                                que valorizam arte, cultura, sustentabilidade
                                e transformação social.
                            </p>

                        </Motion.div>

                        <div className="parceiros-grid">

                            {parceiros.map((parceiro) => (

                                <Motion.article
                                    className="parceiro-card"
                                    key={parceiro.nome}
                                    variants={cardItem}
                                    whileHover={refinedHover}
                                >

                                    <div className="parceiro-img">

                                        <Motion.img
                                            src={parceiro.imagem}
                                            alt={parceiro.nome}

                                            whileHover={{
                                                scale: 1.08,
                                                rotate: 1
                                            }}

                                            transition={{
                                                type: "spring",
                                                stiffness: 300
                                            }}
                                        />

                                    </div>

                                    <div className="parceiro-info">

                                        <h3>{parceiro.nome}</h3>

                                        <p>{parceiro.descricao}</p>

                                    </div>

                                </Motion.article>

                            ))}

                        </div>

                    </Motion.div>

                </section>

            </main>

            <Footer />

            <WhatsAppButton />
        </>
    );
}
