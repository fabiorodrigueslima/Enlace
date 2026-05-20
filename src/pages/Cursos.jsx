import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "../styles/style.css";

export default function Cursos() {
    return (
        <>
            <Navbar />

            <main className="cursos-page">

                <section className="cursos-hero">
                    <div className="cursos-hero-content">

                        <span className="subtitulo">
                            Capacitação • Criatividade • Transformação
                        </span>

                        <h1>Cursos e Oficinas</h1>

                        <p>
                            Estamos preparando cursos, oficinas e experiências criativas
                            voltadas ao fortalecimento do artesanato, empreendedorismo,
                            sustentabilidade e geração de renda.
                        </p>

                    </div>
                </section>

                <section className="cursos-content">

                    <div className="cursos-container">

                        <div className="cursos-info">

                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Em breve, novos cursos e oficinas criativas
                            </h2>

                            <p>
                                Esta página será atualizada com informações sobre oficinas,
                                capacitações, workshops, cursos profissionalizantes e ações
                                educativas promovidas pelo Enlace das Arteiras.
                            </p>

                            <p>
                                Nosso objetivo é fortalecer mulheres, incentivar o aprendizado
                                criativo e ampliar oportunidades através da cultura, arte e
                                economia criativa.
                            </p>

                        </div>

                        <div className="cursos-card">

                            <h3>O que você encontrará aqui futuramente</h3>

                            <ul>
                                <li>Oficinas de artesanato criativo;</li>
                                <li>Cursos de capacitação profissional;</li>
                                <li>Workshops culturais e artísticos;</li>
                                <li>Atividades de sustentabilidade e reciclagem;</li>
                                <li>Empreendedorismo feminino;</li>
                                <li>Eventos educativos e comunitários;</li>
                                <li>Calendário de cursos e inscrições.</li>
                            </ul>

                        </div>

                    </div>

                </section>

                <section className="cursos-cta">

                    <div className="cursos-cta-content">

                        <h2>
                            Aprender também transforma vidas
                        </h2>

                        <p>
                            Em breve, esta página reunirá cursos, oficinas e ações
                            educativas voltadas ao fortalecimento da cultura, criatividade
                            e autonomia das mulheres.
                        </p>

                        <a href="/parceiros" className="btn-cursos-primary">
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