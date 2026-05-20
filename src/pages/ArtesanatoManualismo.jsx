import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "../styles/style.css";

export default function ArtesanatoManualismo() {
    return (
        <>
            <Navbar />
            <main className="artesanato-page">
                <section className="artesanato-content">
                    <div className="artesanato-container">

                        <div className="artesanato-info">
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
                        </div>

                        <div className="artesanato-card">
                            <h3>O que você encontrará aqui futuramente</h3>

                            <ul>
                                <li>Peças artesanais produzidas pelas arteiras;</li>
                                <li>Técnicas de manualismo e criação artística;</li>
                                <li>Oficinas de artesanato e capacitação;</li>
                                <li>Produtos feitos com materiais reutilizados;</li>
                                <li>Histórias das mulheres artesãs;</li>
                                <li>Galeria com fotos dos trabalhos;</li>
                                <li>Feiras, exposições e ações culturais.</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="artesanato-cta">
                    <div className="artesanato-cta-content">
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
                    </div>
                </section>

            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
}