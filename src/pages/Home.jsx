import Navbar from "../components/Navbar";
import Equipe from "../assets/Equipe.png";
import { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import {
  cardItem,
  fadeUp,
  refinedHover,
  scaleIn,
  slideLeft,
  slideRight,
  staggerContainer,
  viewportOnce,
} from "../utils/animations";

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
        image="https://www.enlacedasarteiras.com.br/logo-whatsapp.png?v=2"
        url="https://enlacedasarteiras.com.br"
      />
      <Navbar />

      {/* QUEM SOMOS */}
      <Motion.section
        className="quem-somos"
        id="quem-somos"
        aria-labelledby="quem-somos-title"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="quem-container">

          {/* IMAGEM */}
          <Motion.div className="quem-img" variants={slideRight}>
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
          </Motion.div>

          {/* TEXTO */}
          <Motion.div className="quem-texto" variants={slideLeft}>

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

          </Motion.div>
        </div>
      </Motion.section>

      {/* SEÇÃO DE IMPACTO */}
      <Motion.section
        className="impacto"
        id="impacto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="impacto-container">

          <Motion.div className="impacto-topo" variants={fadeUp}>
            <span className="subtitulo">Nosso Impacto</span>
            <h2>Números que transformam realidades</h2>
          </Motion.div>

          <Motion.div className="impacto-stats" variants={staggerContainer}>

            <Motion.div className="stat-card" variants={cardItem} whileHover={refinedHover}>
              <div className="stat-number">500+</div>
              <p className="stat-label">Mulheres Impactadas</p>
              <p className="stat-description">Geração de renda e autonomia</p>
            </Motion.div>

            <Motion.div className="stat-card" variants={cardItem} whileHover={refinedHover}>
              <div className="stat-number">2.5K+</div>
              <p className="stat-label">Produtos Criados</p>
              <p className="stat-description">Artesanato sustentável</p>
            </Motion.div>

            <Motion.div className="stat-card" variants={cardItem} whileHover={refinedHover}>
              <div className="stat-number">50+</div>
              <p className="stat-label">Feiras Realizadas</p>
              <p className="stat-description">Conexão com comunidade</p>
            </Motion.div>

            <Motion.div className="stat-card" variants={cardItem} whileHover={refinedHover}>
              <div className="stat-number">15T</div>
              <p className="stat-label">Material Reciclado</p>
              <p className="stat-description">Sustentabilidade em ação</p>
            </Motion.div>

          </Motion.div>

        </div>
      </Motion.section>

      {/* TESTEMUNHOS */}
      <Motion.section
        className="testemunhos"
        id="testemunhos"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="testemunhos-container">

          <Motion.div className="testemunhos-topo" variants={fadeUp}>
            <span className="subtitulo">Histórias de Transformação</span>
            <h2>Vidas que mudaram através da arte</h2>
          </Motion.div>

          <Motion.div className="testemunhos-cards" variants={staggerContainer}>

            <Motion.div className="card-testemunho" variants={cardItem} whileHover={refinedHover}>
              <div className="testemunho-texto">
                <p>
                  "O Enlace me deu a oportunidade de transformar meu conhecimento em renda. Hoje sou independente e posso sustentar minha família com dignidade."
                </p>
              </div>
              <div className="testemunho-autor">
                <h4>Maria Silva</h4>
                <p>Artesã de Papel Reciclado</p>
              </div>
            </Motion.div>

            <Motion.div className="card-testemunho" variants={cardItem} whileHover={refinedHover}>
              <div className="testemunho-texto">
                <p>
                  "Participar das oficinas mudou minha vida. Aprendi novas técnicas, conheci mulheres incríveis e agora tenho um negócio próprio."
                </p>
              </div>
              <div className="testemunho-autor">
                <h4>Fernanda Costa</h4>
                <p>Artesã de Bijuterias</p>
              </div>
            </Motion.div>

            <Motion.div className="card-testemunho" variants={cardItem} whileHover={refinedHover}>
              <div className="testemunho-texto">
                <p>
                  "Mais que um trabalho, é uma missão. Juntas estamos criando um futuro mais sustentável e igualitário para todas."
                </p>
              </div>
              <div className="testemunho-autor">
                <h4>Ana Oliveira</h4>
                <p>Artesã de Tecido Reciclado</p>
              </div>
            </Motion.div>

          </Motion.div>

        </div>
      </Motion.section>

      {/* O QUE FAZEMOS */}
      <Motion.section
        className="fazemos"
        id="fazemos"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="fazemos-container">

          <Motion.div className="fazemos-topo" variants={fadeUp}>

            <span className="subtitulo">O Que Fazemos</span>
            <h2>Transformamos ideias em oportunidades</h2>
            <p>
              Atuamos com projetos que unem arte, sustentabilidade,
              inclusão social e geração de renda.
            </p>
          </Motion.div>

          <Motion.div className="fazemos-cards" variants={staggerContainer}>

            <Motion.div className="card-fazemos" variants={cardItem} whileHover={refinedHover}>

              <div className="icon">🎨</div>
              <h3>Artesanato Criativo</h3>
              <p>
                Valorizamos talentos e saberes manuais através
                da produção artesanal.
              </p>
            </Motion.div>

            <Motion.div className="card-fazemos" variants={cardItem} whileHover={refinedHover}>

              <div className="icon">♻️</div>
              <h3>Sustentabilidade</h3>
              <p>
                Incentivamos reutilização de materiais e práticas
                conscientes.
              </p>
            </Motion.div>

            <Motion.div className="card-fazemos" variants={cardItem} whileHover={refinedHover}>

              <div className="icon">👩‍💼</div>
              <h3>Empoderamento Feminino</h3>
              <p>
                Fortalecemos mulheres através do trabalho,
                autonomia e renda.
              </p>
            </Motion.div>

            <Motion.div className="card-fazemos" variants={cardItem} whileHover={refinedHover}>

              <div className="icon">🛍️</div>
              <h3>Feiras e Eventos</h3>
              <p>
                Criamos espaços para exposição, vendas e conexão
                com a comunidade.
              </p>
            </Motion.div>

          </Motion.div>

        </div>
      </Motion.section>

      {/* NOSSOS PROJETOS */}
      <Motion.section
        className="projetos"
        id="projetos"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="projetos-container">

          {/* TOPO */}
          <Motion.div className="projetos-topo" variants={fadeUp}>
            <span className="subtitulo">Nossos Projetos</span>
            <h2>Iniciativas que geram impacto real</h2>
            <p>
              Desenvolvemos ações que fortalecem mulheres, promovem
              sustentabilidade e transformam talentos em oportunidades.
            </p>
          </Motion.div>

          {/* CARDS */}
          <Motion.div className="projetos-cards" variants={staggerContainer}>

            <Motion.div className="card-projeto" variants={cardItem} whileHover={refinedHover}>
              <div className="icon-projeto">🎨</div>
              <h3>Oficinas Criativas</h3>
              <p>
                Capacitações em artesanato, costura, reciclagem e produção manual.
              </p>
            </Motion.div>

            <Motion.div className="card-projeto" variants={cardItem} whileHover={refinedHover}>
              <div className="icon-projeto">♻️</div>
              <h3>Arte Sustentável</h3>
              <p>
                Reaproveitamento de materiais recicláveis transformados em produtos criativos.
              </p>
            </Motion.div>

            <Motion.div className="card-projeto" variants={cardItem} whileHover={refinedHover}>
              <div className="icon-projeto">🛍️</div>
              <h3>Feiras e Exposições</h3>
              <p>
                Espaços para vendas, divulgação e valorização do trabalho artesanal.
              </p>
            </Motion.div>

            <Motion.div className="card-projeto" variants={cardItem} whileHover={refinedHover}>
              <div className="icon-projeto">👩‍💼</div>
              <h3>Autonomia Feminina</h3>
              <p>
                Incentivo ao empreendedorismo feminino e geração de renda.
              </p>
            </Motion.div>

            <Motion.div className="card-projeto" variants={cardItem} whileHover={refinedHover}>
              <div className="icon-projeto">🤝</div>
              <h3>Parcerias Sociais</h3>
              <p>
                União com cooperativas, empresas e comunidades para ampliar impacto.
              </p>
            </Motion.div>

            <Motion.div className="card-projeto" variants={cardItem} whileHover={refinedHover}>
              <div className="icon-projeto">🌱</div>
              <h3>Educação Ambiental</h3>
              <p>
                Ações conscientes sobre reciclagem, consumo responsável e sustentabilidade.
              </p>
            </Motion.div>

          </Motion.div>

        </div>
      </Motion.section>

      {/* CTA FINAL */}
      <Motion.section
        className="cta-home"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <Motion.div className="cta-container" whileHover={{ scale: 1.01 }}>

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

        </Motion.div>
      </Motion.section>

      {/* RODAPÉ */}
      <Footer />

      {/* WHATSAPP */}
      <WhatsAppButton />
    </div>
  );
}
