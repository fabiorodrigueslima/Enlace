import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "../styles/style.css";

export default function GastronomiaArtesanal() {
    return (
        <>
            <Navbar />

            <main className="gastronomia-page">

                <section className="gastronomia-hero">
                    <div className="gastronomia-hero-content">
                        <span className="subtitulo">
                            Sabores • Cultura • Tradição
                        </span>

                        <h1>Gastronomia Artesanal</h1>

                        <p>
                            Estamos preparando um espaço especial para apresentar sabores
                            artesanais, receitas afetivas, culinária criativa e experiências
                            gastronômicas ligadas à cultura e ao empreendedorismo local.
                        </p>
                    </div>
                </section>

                <section className="gastronomia-content">
                    <div className="gastronomia-container">

                        <div className="gastronomia-info">
                            <span className="subtitulo">
                                Página em Desenvolvimento
                            </span>

                            <h2>
                                Em breve, novidades sobre gastronomia artesanal
                            </h2>

                            <p>
                                Esta página será atualizada com informações sobre pratos,
                                receitas, oficinas, feiras gastronômicas, produção artesanal,
                                cultura alimentar e histórias de mulheres que transformam
                                sabores em oportunidade.
                            </p>

                            <p>
                                A gastronomia artesanal valoriza o cuidado, a memória, a
                                criatividade e a identidade cultural, fortalecendo a economia
                                criativa e a geração de renda.
                            </p>
                        </div>

                        <div className="gastronomia-card">
                            <h3>O que você encontrará aqui futuramente</h3>

                            <ul>
                                <li>Receitas e produtos gastronômicos artesanais;</li>
                                <li>Oficinas de culinária criativa;</li>
                                <li>Feiras e eventos gastronômicos;</li>
                                <li>Histórias de empreendedoras da gastronomia;</li>
                                <li>Sabores regionais e afetivos;</li>
                                <li>Galeria com registros das produções;</li>
                                <li>Novidades sobre cursos e experiências culinárias.</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="gastronomia-cta">
                    <div className="gastronomia-cta-content">
                        <h2>
                            Sabores que contam histórias
                        </h2>

                        <p>
                            Em breve, esta página reunirá produções, oficinas, eventos e
                            registros que valorizam a gastronomia artesanal dentro do
                            Enlace das Arteiras.
                        </p>

                        <a href="/parceiros" className="btn-gastronomia-primary">
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