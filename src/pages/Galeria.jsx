import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "../styles/style.css";

export default function Galeria() {
    return (
        <>
            <Navbar />

            <main className="galeria-page">

               
                <section className="galeria-content">
                    <div className="galeria-container">

                        <div className="galeria-info">
                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Em breve, registros visuais do nosso projeto
                            </h2>

                            <p>
                                Esta página será atualizada com imagens das ações realizadas,
                                oficinas criativas, feiras, encontros, produções artesanais,
                                eventos culturais e momentos especiais da nossa trajetória.
                            </p>

                            <p>
                                A galeria será um espaço para valorizar histórias, pessoas,
                                talentos, parcerias e resultados que fazem parte do Enlace
                                das Arteiras.
                            </p>
                        </div>

                        <div className="galeria-card">
                            <h3>O que você encontrará aqui futuramente</h3>

                            <ul>
                                <li>Fotos de oficinas e cursos;</li>
                                <li>Registros das feiras e eventos;</li>
                                <li>Produtos artesanais produzidos;</li>
                                <li>Momentos com parceiros e apoiadores;</li>
                                <li>Antes e depois de produções criativas;</li>
                                <li>Galeria das arteiras participantes;</li>
                                <li>Memórias do projeto em ação.</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="galeria-preview">
                    <div className="galeria-preview-container">
                        <span className="subtitulo">Prévia da Galeria</span>

                        <h2>Espaço reservado para fotos do projeto</h2>

                        <div className="galeria-grid-preview">
                            <div className="galeria-placeholder">📷</div>
                            <div className="galeria-placeholder">🎨</div>
                            <div className="galeria-placeholder">🛍️</div>
                            <div className="galeria-placeholder">🤝</div>
                            <div className="galeria-placeholder">🌱</div>
                            <div className="galeria-placeholder">✨</div>
                        </div>
                    </div>
                </section>

                <section className="galeria-cta">
                    <div className="galeria-cta-content">
                        <h2>
                            Cada imagem contará uma história
                        </h2>

                        <p>
                            Em breve, esta página reunirá fotos e registros que mostram
                            a força da arte, da cultura, da sustentabilidade e das mulheres
                            que fazem parte do Enlace das Arteiras.
                        </p>

                        <a href="/parceiros" className="btn-galeria-primary">
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