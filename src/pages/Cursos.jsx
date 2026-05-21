import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "../styles/style.css";

export default function Cursos() {
    const linkInscricao = "https://forms.gle/3TRrAM6NgWEAHi1B8";

    return (
        <>
            <Navbar />

            <main className="cursos-page">
                <section className="cursos-hero">
                    <div className="cursos-hero-content">
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
                    </div>
                </section>

                <section className="oficinas-section">
                    <div className="oficinas-container">
                        <div className="oficinas-topo">
                            <span className="subtitulo">Programação</span>
                            <h2>Oficinas disponíveis</h2>
                            <p>
                                Confira as atividades com inscrições abertas e participe dessa
                                rede de aprendizado, arte e transformação.
                            </p>
                        </div>

                        <div className="oficinas-grid">
                            <article className="oficina-card">
                                <div className="oficina-banner"></div>

                                <div className="oficina-content">
                                    <span className="oficina-tag">Vivência</span>

                                    <h3>Vivência Mulheres em Roda</h3>

                                    <div className="oficina-info">
                                        <p>
                                            <strong>Data:</strong> 26, 27 e 28/05/2026
                                        </p>

                                        <p>
                                            <strong>Horário:</strong> 14h às 18h
                                        </p>

                                        <p>
                                            <strong>Local:</strong> Centro de Práticas Sustentáveis -
                                            CPS
                                        </p>

                                        <p>
                                            <strong>Carga horária:</strong> 12h
                                        </p>
                                    </div>

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
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="galeria-cursos">
                    <div className="galeria-cursos-container">
                        <span className="subtitulo">Galeria</span>

                        <h2>Registros das atividades</h2>

                        <div className="galeria-carrossel">
                            <div className="galeria-item">Foto 1</div>
                            <div className="galeria-item">Foto 2</div>
                            <div className="galeria-item">Foto 3</div>
                            <div className="galeria-item">Foto 4</div>
                        </div>
                    </div>
                </section>

                <section className="cursos-destaque">
                    <div className="cursos-destaque-content">
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
                    </div>
                </section>

                <section className="cursos-aviso">
                    <div className="cursos-aviso-content">
                        <h3>Informação importante</h3>

                        <p>
                            É necessário a doação de{" "}
                            <strong>1 kg de alimento não perecível</strong> no dia da
                            atividade, destinado à cooperativa parceira.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
}