import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import footerLogos from "../assets/Footer Aprovado - Novo 1_20260520_224710_0000.png";

import "../styles/style.css";

export default function Footer() {
    return (
        <footer id="contato" className="footer">

            <div className="footer-top">
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
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=projetoenlacedasarteiras@gmail.com&su=Contato%20pelo%20site%20Enlace%20das%20Arteiras&body=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <MdEmail />
                        </a>
                    </div>
                </div>
            </div>

            <nav className="footer-menu">
                <a href="/">Início</a>
                <a href="/secec-df">SECEC-DF</a>
                <a href="/artesanato-manualismo">Artesanato</a>
                <a href="/gastronomia-artesanal">Gastronomia</a>
                <a href="/cursos">Cursos</a>
                <a href="/feiras">Feiras</a>
                <a href="/galeria">Galeria</a>
                <a href="/parceiros">Parceiros</a>
            </nav>

            <div className="footer-logos">
                <p className="footer-logos-text">
                    Este projeto é realizado com recursos do Fundo de Apoio à Cultura do Distrito Federal.
                </p>

                <div className="footer-logos-image">
                    <img
                        src={footerLogos}
                        alt="Logos de apoiadores e parceiros do projeto"
                    />
                </div>
            </div>

            <div className="footer-copy">
                <p>
                    © 2026 Enlace das Arteiras • Todos os direitos reservados
                </p>
            </div>

        </footer>
    );
}