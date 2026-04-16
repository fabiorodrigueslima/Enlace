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
}