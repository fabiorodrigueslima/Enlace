<<<<<<< HEAD
import Navbar from "../components/Navbar";
import Equipe from "../assets/Equipe.png";
import { useEffect } from "react";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".quem-somos, .fazemos, .projetos, .cta-home"
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
              O <strong>Instituto Enlace das Arteiras</strong> é uma organização
              social sediada em Brasília/DF que atua no fortalecimento da cultura,
              da economia solidária e do empreendedorismo feminino.
            </p>

            <p>
              Nosso trabalho valoriza os saberes tradicionais e promove a
              autonomia das mulheres por meio do artesanato, incentivando práticas
              sustentáveis, geração de renda e desenvolvimento comunitário.
            </p>

            <p>
              Realizamos oficinas, feiras, projetos culturais e ações
              socioambientais, integrando arte, educação e sustentabilidade.
            </p>

            <p>
              Em parceria com a Cooperativa Ecolimpo, conectamos reciclagem e
              produção artesanal, transformando materiais em produtos criativos
              e sustentáveis.
            </p>

            <div className="quem-buttons">
              <a href="#projetos" className="btn-saiba-mais">
                Conheça Mais
              </a>

              <a href="#contato" className="btn-saiba-mais">
                Fale Conosco
              </a>
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

            <a href="/quem-somos" className="btn-cta-secondary">
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
=======
import Navbar from "../components/Navbar";
import Equipe from "../assets/Equipe.png";
import { useEffect } from "react";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {

  useEffect(() => {
    const section = document.querySelector(".quem-somos");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />

      {/* QUEM SOMOS */}
      <section className="quem-somos" aria-labelledby="quem-somos-title">
        <div className="quem-container">

          {/* IMAGEM */}
          <div className="quem-img">
            <figure>
              <img
                src={Equipe}
                alt="Equipe do projeto Enlace das Arteiras"
                loading="lazy"
              />
              <figcaption>Equipe dedicada ao fortalecimento do artesanato</figcaption>
            </figure>
          </div>

          {/* TEXTO */}
          <div className="quem-texto">
            <h1 id="quem-somos-title">Quem Somos</h1>

            <p>
              O <strong>Instituto Enlace das Arteiras</strong> é uma organização social
              sediada em Brasília/DF que atua no fortalecimento da cultura, da economia
              solidária e do empreendedorismo feminino.
            </p>

            <p>
              Nosso trabalho valoriza os saberes tradicionais e promove a autonomia das
              mulheres por meio do artesanato, incentivando práticas sustentáveis,
              geração de renda e o desenvolvimento comunitário.
            </p>

            <p>
              Realizamos oficinas, feiras, projetos culturais e ações socioambientais,
              integrando arte, educação e sustentabilidade, com foco no reaproveitamento
              de materiais e na economia circular.
            </p>

            <p>
              Em parceria com a Cooperativa Ecolimpo, fortalecemos a conexão entre a
              reciclagem e a produção artesanal, transformando materiais em produtos
              criativos e sustentáveis.
            </p>

            <button className="btn-saiba-mais">Conheça mais</button>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <Footer />

      <WhatsAppButton />

    </div>
  );
>>>>>>> f9e0a262f9453b2e992fb3f67c91fb13f5966766
}