import "../styles/style.css";

import { motion } from "framer-motion";

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
                <section className="parceiros-header">

                    <span>Conexões que transformam</span>

                    <h1>Nossos Parceiros</h1>

                    <p>
                        Conheça as instituições, empresas e apoiadores
                        que caminham junto com a Enlace das Arteiras.
                    </p>

                </section>

                {/* PARCEIROS */}
                <section className="parceiros-section">

                    <motion.div
                        className="parceiros-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <motion.div
                            className="parceiros-intro"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >

                            <h2>Parcerias que fortalecem nossa missão</h2>

                            <p>
                                Cada parceiro faz parte da construção de projetos
                                que valorizam arte, cultura, sustentabilidade
                                e transformação social.
                            </p>

                        </motion.div>

                        <div className="parceiros-grid">

                            {parceiros.map((parceiro, index) => (

                                <motion.article
                                    className="parceiro-card"
                                    key={index}

                                    initial={{
                                        opacity: 0,
                                        y: 80
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15
                                    }}

                                    viewport={{ once: true }}

                                    whileHover={{
                                        y: -12,
                                        scale: 1.02
                                    }}
                                >

                                    <div className="parceiro-img">

                                        <motion.img
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

                                </motion.article>

                            ))}

                        </div>

                    </motion.div>

                </section>

            </main>

            <Footer />

            <WhatsAppButton />
        </>
    );
}