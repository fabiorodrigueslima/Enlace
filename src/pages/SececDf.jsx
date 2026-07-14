import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
    FaDownload,
    FaEye,
    FaExternalLinkAlt,
    FaTimes,
    FaFolderOpen,
    FaHandHoldingHeart,
    FaInfoCircle,
    FaLandmark,
    FaRegCalendarAlt,
    FaRegClock,
    FaRegFileAlt,
} from "react-icons/fa";
import {
    cardItem,
    fadeUp,
    refinedHover,
    staggerContainer,
    viewportOnce,
} from "../utils/animations";

import bannerTransparenciaImagem from "../assets/BannerTransparencia.png";
import "../styles/style.css";

const bannerTransparenciaPdf = new URL(
    "../assets/Banner Transpar\u00eancia - Enlace.pdf",
    import.meta.url
).href;

export default function SececDf() {
    const [isBannerOpen, setIsBannerOpen] = useState(false);
    const closeBannerModal = () => setIsBannerOpen(false);

    useEffect(() => {
        if (!isBannerOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeBannerModal();
            }
        };

        document.body.classList.add("modal-open");
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.classList.remove("modal-open");
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isBannerOpen]);

    return (
        <>
            <Navbar />

            <main className="secec-page">
                <Motion.section
                    className="transparencia-hero"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <h1>Transparência e Prestação de Contas</h1>
                </Motion.section>

                <Motion.section
                    className="transparencia-destaque"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="transparencia-destaque-content">
                        <h2>Como funciona nossa transparência?</h2>
                        <p>
                            Cada projeto desenvolvido pelo Enlace das Arteiras possui uma
                            área própria nesta página, onde são disponibilizadas informações
                            institucionais, documentos públicos e, ao término da execução, o
                            respectivo relatório de prestação de contas. Assim, qualquer
                            pessoa pode acompanhar de forma clara e organizada a aplicação
                            dos recursos e os resultados alcançados.
                        </p>
                    </div>
                </Motion.section>

                <Motion.section
                    className="projetos-parcerias"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="projetos-parcerias-container">
                        <span className="secao-label">PROJETOS E PARCERIAS</span>

                        <Motion.article
                            className="projeto-transparencia-card"
                            variants={cardItem}
                            whileHover={refinedHover}
                        >
                            <div className="projeto-card-header">
                                <div className="projeto-identidade">
                                    <div className="projeto-icon">
                                        <FaHandHoldingHeart />
                                    </div>

                                    <div>
                                        <h2>Enlace das Arteiras</h2>
                                        <p>
                                            Fortalecimento do artesanato, da economia criativa
                                            e do protagonismo feminino.
                                        </p>
                                    </div>
                                </div>

                                <span className="status-projeto">Em execução</span>
                            </div>

                            <div className="projeto-card-body">
                                <div className="projeto-sobre">
                                    <h3>
                                        <FaHandHoldingHeart />
                                        Sobre o projeto
                                    </h3>

                                    <p>
                                        O Enlace das Arteiras fortalece artesãs e manualistas
                                        por meio de oficinas, vivências, incentivo ao
                                        empreendedorismo, economia criativa, sustentabilidade
                                        e realização de uma feira cultural, ampliando a
                                        visibilidade do fazer artesanal no Distrito Federal.
                                    </p>

                                    <strong className="projeto-frase">
                                        Conectando saberes, fortalecendo histórias...
                                    </strong>

                                    <div className="projeto-resumo-grid">
                                        <div className="projeto-resumo-item">
                                            <span><FaRegCalendarAlt /></span>
                                            <strong>Período</strong>
                                            <p>Junho a Novembro de 2026</p>
                                        </div>

                                        <div className="projeto-resumo-item">
                                            <span>R$</span>
                                            <strong>Valor do projeto</strong>
                                            <p>
                                                R$ 196.600,00
                                                <small>
                                                    cento e noventa e seis mil e seiscentos reais
                                                </small>
                                            </p>
                                        </div>

                                        <div className="projeto-resumo-item">
                                            <span><FaLandmark /></span>
                                            <strong>Financiamento</strong>
                                            <p>Fundo de Apoio à Cultura do DF (FAC-DF)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="projeto-documentos">
                                    <h3>
                                        <FaFolderOpen />
                                        Documentos
                                    </h3>

                                    <div className="documentos-lista">
                                        <div className="documento-item documento-disponivel">
                                            <FaRegFileAlt className="documento-icone" />
                                            <div>
                                                <strong>Banner de Transparência</strong>
                                                <p>Documento institucional do projeto.</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-documento"
                                                onClick={() => setIsBannerOpen(true)}
                                            >
                                                <FaEye />
                                                Visualizar
                                            </button>
                                        </div>

                                        <div className="documento-item documento-futuro">
                                            <FaRegFileAlt className="documento-icone" />
                                            <div>
                                                <strong>Prestação de Contas</strong>
                                                <p>Disponível após o encerramento do projeto.</p>
                                            </div>
                                            <span className="badge-em-breve">
                                                <FaRegClock />
                                                Em breve
                                            </span>
                                        </div>
                                    </div>

                                    <div className="prestacao-aviso">
                                        <FaInfoCircle />
                                        <p>
                                            A prestação de contas será publicada ao término da
                                            execução do projeto, conforme as normas do Fundo de
                                            Apoio à Cultura do DF.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="projeto-card-footer">
                                <span>
                                    <FaRegCalendarAlt />
                                    Última atualização: <strong>05/07/2026</strong>
                                </span>
                            </div>
                        </Motion.article>
                    </div>
                </Motion.section>

                <Motion.section
                    className="secec-cta"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <Motion.div className="secec-cta-content" whileHover={{ scale: 1.01 }}>
                        <h2>Nossa forma de fazer cultura</h2>

                        <p>
                            Acreditamos que fazer cultura também é agir com
                            responsabilidade, respeito e transparência. Por isso,
                            compartilhamos aqui as informações e documentos dos projetos
                            desenvolvidos pelo Enlace das Arteiras, fortalecendo a confiança
                            da comunidade, dos parceiros e de todos que acompanham nosso
                            trabalho.
                        </p>
                    </Motion.div>
                </Motion.section>
            </main>

            {isBannerOpen && (
                <div
                    className="banner-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Banner de Transparência"
                    aria-labelledby="banner-modal-title"
                    onClick={closeBannerModal}
                >
                    <div
                        className="banner-modal-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="banner-modal-header">
                            <div>
                                <span>Documento oficial</span>
                                <h2 id="banner-modal-title">Banner de Transparência</h2>
                            </div>

                            <div className="banner-modal-actions">
                                <a
                                    href={bannerTransparenciaPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="banner-modal-icon-btn"
                                    aria-label="Abrir PDF em nova aba"
                                    title="Abrir em nova aba"
                                >
                                    <FaExternalLinkAlt />
                                </a>

                                <a
                                    href={bannerTransparenciaPdf}
                                    download
                                    className="banner-modal-icon-btn"
                                    aria-label="Baixar PDF"
                                    title="Baixar PDF"
                                >
                                    <FaDownload />
                                </a>

                                <button
                                    type="button"
                                    className="banner-modal-close"
                                    aria-label="Fechar banner"
                                    title="Fechar"
                                    onClick={closeBannerModal}
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </div>

                        <div className="banner-modal-viewer">
                            <img
                                src={bannerTransparenciaImagem}
                                alt="Banner de Transparência do projeto Enlace das Arteiras"
                            />
                        </div>
                    </div>
                </div>
            )}

            <Footer />
            <WhatsAppButton />
        </>
    );
}
