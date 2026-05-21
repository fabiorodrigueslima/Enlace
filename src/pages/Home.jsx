import Navbar from "../components/Navbar";
import Equipe from "../assets/Equipe.png";
import { useEffect } from "react";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".quem-somos, .impacto, .testemunhos, .fazemos, .projetos, .cta-home"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <SEO
        title="Enlace das Arteiras | Cultura, Arte e Sustentabilidade"
        description="Projeto cultural voltado ao fortalecimento do artesanato, empreendedorismo feminino, sustentabilidade e economia criativa no Distrito Federal."
        image="https://enlacedasarteiras.com.br/capa-site.png"
        url="https://enlacedasarteiras.com.br"
      />
      <Navbar />

      {/* QUEM SOMOS */}
      <section className="quem-somos" id="quem-somos" aria-labelledby="quem-somos-title">
        <div className="quem-container">

          {/* IMAGEM */}
          <div className="quem-img">
            <figure>
              <img
                src={Equipe}
                alt="Equipe do projeto Enlace das Arteiras"
                loading="lazy"
              />
              <figcaption>
                Mulheres fortalecendo o artesanato e a transformação social
              </figcaption>
            </figure>
          </div>

          {/* TEXTO */}
          <div className="quem-texto">

            <span className="subtitulo">Quem Somos</span>

            <h1 id="quem-somos-title">
              Transformando vidas através da arte
            </h1>

            <p>
              O <strong>Instituto Enlace das Arteiras</strong> é uma organização social de Brasília/DF dedicada a transformar vidas através da arte, sustentabilidade e empreendedorismo feminino. Conectamos mulheres artesãs, saberes tradicionais e inovação para criar oportunidades de renda, autonomia e impacto social.
            </p>

            <p>
              Nosso trabalho valoriza a criatividade e o conhecimento manual, promovendo práticas sustentáveis e desenvolvimento comunitário. Através de oficinas criativas, feiras de artesanato, projetos culturais e ações socioambientais, fortalecemos mulheres e a economia solidária.
            </p>

            <p>
              Em parceria com a <strong>Cooperativa Ecolimpo</strong>, transformamos materiais recicláveis em produtos únicos e sustentáveis, provando que arte, sustentabilidade e empreendedorismo feminino caminham juntos.
            </p>

            <div className="quem-buttons">
              <a href="#impacto" className="btn-saiba-mais">
                Conheça Mais
              </a>

              <a href="#contato" className="btn-saiba-mais">
                Fale Conosco
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE IMPACTO */}
      <section className="impacto" id="impacto">
        <div className="impacto-container">

          <div className="impacto-topo">
            <span className="subtitulo">Nosso Impacto</span>
            <h2>Números que transformam realidades</h2>
          </div>

          <div className="impacto-stats">

            <div className="stat-card">
              <div className="stat-number">500+</div>
              <p className="stat-label">Mulheres Impactadas</p>
              <p className="stat-description">Geração de renda e autonomia</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">2.5K+</div>
              <p className="stat-label">Produtos Criados</p>
              <p className="stat-description">Artesanato sustentável</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">50+</div>
              <p className="stat-label">Feiras Realizadas</p>
              <p className="stat-description">Conexão com comunidade</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">15T</div>
              <p className="stat-label">Material Reciclado</p>
              <p className="stat-description">Sustentabilidade em ação</p>
            </div>

          </div>

        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section className="testemunhos" id="testemunhos">
        <div className="testemunhos-container">

          <div className="testemunhos-topo">
            <span className="subtitulo">Histórias de Transformação</span>
            <h2>Vidas que mudaram através da arte</h2>
          </div>

          <div className="testemunhos-cards">

            <div className="card-testemunho">
              <div className="testemunho-texto">
                <p>
                  "O Enlace me deu a oportunidade de transformar meu conhecimento em renda. Hoje sou independente e posso sustentar minha família com dignidade."
                </p>
              </div>
              <div className="testemunho-autor">
                <h4>Maria Silva</h4>
                <p>Artesã de Papel Reciclado</p>
              </div>
            </div>

            <div className="card-testemunho">
              <div className="testemunho-texto">
                <p>
                  "Participar das oficinas mudou minha vida. Aprendi novas técnicas, conheci mulheres incríveis e agora tenho um negócio próprio."
                </p>
              </div>
              <div className="testemunho-autor">
                <h4>Fernanda Costa</h4>
                <p>Artesã de Bijuterias</p>
              </div>
            </div>

            <div className="card-testemunho">
              <div className="testemunho-texto">
                <p>
                  "Mais que um trabalho, é uma missão. Juntas estamos criando um futuro mais sustentável e igualitário para todas."
                </p>
              </div>
              <div className="testemunho-autor">
                <h4>Ana Oliveira</h4>
                <p>Artesã de Tecido Reciclado</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className="fazemos" id="fazemos">
        <div className="fazemos-container">

          <div className="fazemos-topo">

            <span className="subtitulo">O Que Fazemos</span>
            <h2>Transformamos ideias em oportunidades</h2>
            <p>
              Atuamos com projetos que unem arte, sustentabilidade,
              inclusão social e geração de renda.
            </p>
          </div>

          <div className="fazemos-cards">

            <div className="card-fazemos">

              <div className="icon">🎨</div>
              <h3>Artesanato Criativo</h3>
              <p>
                Valorizamos talentos e saberes manuais através
                da produção artesanal.
              </p>
            </div>

            <div className="card-fazemos">

              <div className="icon">♻️</div>
              <h3>Sustentabilidade</h3>
              <p>
                Incentivamos reutilização de materiais e práticas
                conscientes.
              </p>
            </div>

            <div className="card-fazemos">

              <div className="icon">👩‍💼</div>
              <h3>Empoderamento Feminino</h3>
              <p>
                Fortalecemos mulheres através do trabalho,
                autonomia e renda.
              </p>
            </div>

            <div className="card-fazemos">

              <div className="icon">🛍️</div>
              <h3>Feiras e Eventos</h3>
              <p>
                Criamos espaços para exposição, vendas e conexão
                com a comunidade.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* NOSSOS PROJETOS */}
      <section className="projetos" id="projetos">
        <div className="projetos-container">

          {/* TOPO */}
          <div className="projetos-topo">
            <span className="subtitulo">Nossos Projetos</span>
            <h2>Iniciativas que geram impacto real</h2>
            <p>
              Desenvolvemos ações que fortalecem mulheres, promovem
              sustentabilidade e transformam talentos em oportunidades.
            </p>
          </div>

          {/* CARDS */}
          <div className="projetos-cards">

            <div className="card-projeto">
              <div className="icon-projeto">🎨</div>
              <h3>Oficinas Criativas</h3>
              <p>
                Capacitações em artesanato, costura, reciclagem e produção manual.
              </p>
            </div>

            <div className="card-projeto">
              <div className="icon-projeto">♻️</div>
              <h3>Arte Sustentável</h3>
              <p>
                Reaproveitamento de materiais recicláveis transformados em produtos criativos.
              </p>
            </div>

            <div className="card-projeto">
              <div className="icon-projeto">🛍️</div>
              <h3>Feiras e Exposições</h3>
              <p>
                Espaços para vendas, divulgação e valorização do trabalho artesanal.
              </p>
            </div>

            <div className="card-projeto">
              <div className="icon-projeto">👩‍💼</div>
              <h3>Autonomia Feminina</h3>
              <p>
                Incentivo ao empreendedorismo feminino e geração de renda.
              </p>
            </div>

            <div className="card-projeto">
              <div className="icon-projeto">🤝</div>
              <h3>Parcerias Sociais</h3>
              <p>
                União com cooperativas, empresas e comunidades para ampliar impacto.
              </p>
            </div>

            <div className="card-projeto">
              <div className="icon-projeto">🌱</div>
              <h3>Educação Ambiental</h3>
              <p>
                Ações conscientes sobre reciclagem, consumo responsável e sustentabilidade.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-home">
        <div className="cta-container">

          <span className="cta-subtitulo">Faça Parte Dessa Transformação</span>

          <h2>
            Junte-se a nós e fortaleça mulheres,
            cultura e sustentabilidade.
          </h2>

          <p>
            Seja parceiro, apoiador ou conheça de perto
            iniciativas que geram impacto real na comunidade.
          </p>

          <div className="cta-buttons">
            <a href="#contato" className="btn-cta-primary">
              Fale Conosco
            </a>

            <a href="#quem-somos" className="btn-cta-secondary">
              Conheça Nossa História
            </a>
          </div>

        </div>
      </section>

      {/* RODAPÉ */}
      <Footer />

      {/* WHATSAPP */}
      <WhatsAppButton />
    </div>
  );
}
