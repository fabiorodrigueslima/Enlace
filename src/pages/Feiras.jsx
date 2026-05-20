import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "../styles/style.css";

export default function Feiras() {
    return (
        <>
            <Navbar />

            <main className="feiras-page">


                <section className="feiras-content">
                    <div className="feiras-container">

                        <div className="feiras-info">
                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Em breve, novidades sobre nossas feiras e eventos
                            </h2>

                            <p>
                                Esta página será atualizada com informações sobre datas,
                                locais, participantes, registros fotográficos, exposições,
                                vendas e ações culturais realizadas pelo Enlace das Arteiras.
                            </p>

                            <p>
                                As feiras são espaços importantes para valorizar o trabalho
                                artesanal, fortalecer a economia criativa, aproximar a comunidade
                                e gerar oportunidades para mulheres empreendedoras.
                            </p>
                        </div>

                        <div className="feiras-card">
                            <h3>O que você encontrará aqui futuramente</h3>

                            <ul>
                                <li>Calendário de feiras e eventos;</li>
                                <li>Locais e horários das próximas ações;</li>
                                <li>Produtos artesanais em exposição;</li>
                                <li>Participação das arteiras;</li>
                                <li>Registros fotográficos dos eventos;</li>
                                <li>Parcerias e apoiadores das feiras;</li>
                                <li>Resultados e impacto das ações realizadas.</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="feiras-cta">
                    <div className="feiras-cta-content">
                        <h2>
                            A arte ganha vida quando chega à comunidade
                        </h2>

                        <p>
                            Em breve, esta página reunirá feiras, exposições e eventos
                            que conectam cultura, sustentabilidade, empreendedorismo
                            e transformação social.
                        </p>

                        <a href="/parceiros" className="btn-feiras-primary">
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