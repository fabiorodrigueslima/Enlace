import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "../styles/style.css";

export default function SececDf() {
    return (
        <>
            <Navbar />

            <main className="secec-page">

                {/* HERO */}
                <section className="secec-hero">

                    <div className="secec-hero-content">

                        <span className="subtitulo">
                            Cultura • Arte • Transformação Social
                        </span>

                        <h1>SECEC-DF</h1>

                        <p>
                            O Enlace das Arteiras reconhece a importância do incentivo à
                            cultura, ao artesanato, à economia criativa e às ações sociais
                            desenvolvidas no Distrito Federal.
                        </p>

                    </div>

                </section>

                {/* CONTEÚDO */}
                <section className="secec-content">

                    <div className="secec-container">

                        <div className="secec-info">

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

                        </div>

                        {/* CARD */}
                        <div className="secec-card">

                            <h3>O que você encontrará aqui futuramente</h3>

                            <ul>
                                <li>Projetos culturais realizados;</li>
                                <li>Oficinas e ações comunitárias;</li>
                                <li>Feiras e eventos culturais;</li>
                                <li>Registros fotográficos;</li>
                                <li>Parcerias institucionais;</li>
                                <li>Informações sobre economia criativa;</li>
                                <li>Impacto social e cultural do projeto.</li>
                            </ul>

                        </div>

                    </div>

                </section>

                {/* CTA */}
                <section className="secec-cta">

                    <div className="secec-cta-content">

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

                    </div>

                </section>

            </main>

            <Footer />

            <WhatsAppButton />
        </>
    );
}