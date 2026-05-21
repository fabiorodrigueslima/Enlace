import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logoFac from "../assets/Logo - Fac.png";
import logoSecult from "../assets/Logo - Secretaria.png";

import "../styles/style.css";

export default function Footer() {

    return (

        <footer id="contato" className="footer">

            {/* TOPO */}
            <div className="footer-top">

                {/* ESQUERDA */}
                <div className="footer-left">

                    <span className="footer-subtitle">
                        Cultura • Arte • Sustentabilidade
                    </span>

                    <h2 className="footer-logo">
                        Enlace das Arteiras
                    </h2>

                    <p className="footer-text">
                        Transformando vidas através da arte,
                        cultura, empreendedorismo feminino e
                        sustentabilidade.
                    </p>

                </div>

                {/* DIREITA */}
                <div className="footer-right">

                    <h3>Siga nossas redes</h3>

                    <p className="footer-social-text">
                        Acompanhe nossas ações, oficinas,
                        eventos e novidades.
                    </p>

                    <div className="social-links">

                        <a
                            href="https://www.instagram.com/enlacedasarteiras/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://wa.me/5561984882881"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href="mailto:projetoenlacedasarteiras@gmail.com"
                            aria-label="Email"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdEmail />
                        </a>

                    </div>

                </div>

            </div>

            {/* MENU */}
            <nav className="footer-menu">

                <a href="/">
                    Início
                </a>

                <a href="/secec-df">
                    SECEC-DF
                </a>

                <a href="/artesanato-manualismo">
                    Artesanato
                </a>

                <a href="/gastronomia-artesanal">
                    Gastronomia
                </a>

                <a href="/cursos">
                    Cursos
                </a>

                <a href="/feiras">
                    Feiras
                </a>

                <a href="/galeria">
                    Galeria
                </a>

                <a href="/parceiros">
                    Parceiros
                </a>

            </nav>

            {/* LOGOS */}
            <div className="footer-logos">

                <p className="footer-logos-text">

                    Este projeto foi realizado com recursos
                    do Fundo de Apoio à Cultura do Distrito Federal.

                </p>

                <div className="footer-logos-container">

                    <img
                        src={logoFac}
                        alt="FAC"
                    />

                    <img
                        src={logoSecult}
                        alt="Secretaria de Cultura"
                    />

                </div>

            </div>

            {/* COPY */}
            <div className="footer-copy">

                <p>
                    © 2026 Enlace das Arteiras •
                    Todos os direitos reservados
                </p>

            </div>

        </footer>

    );
}