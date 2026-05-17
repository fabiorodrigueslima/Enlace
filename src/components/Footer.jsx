import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logoFac from "../assets/Logo - Fac.png";
import logoSecult from "../assets/Logo - Secretaria.png";

import "../styles/style.css";

export default function Footer() {
    return (
        <footer id="contato" className="footer">

            <div className="footer-top">
                <div className="footer-left">
                    <h2 className="footer-logo">Enlace das Arteiras</h2>

                    <p className="footer-text">
                        Transformando vidas através da arte, cultura e sustentabilidade.
                    </p>
                </div>

                <div className="footer-right">
                    <h3>Siga nossas redes</h3>

                    <div className="social-links">
                        <a href="https://www.instagram.com/enlacedasarteiras/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>

                        <a href="mailto:contato@email.com" aria-label="Email">
                            <MdEmail />
                        </a>
                    </div>
                </div>
            </div>

            <nav className="footer-menu">
                <a href="/">Início</a>
                <a href="/quem-somos">Quem Somos</a>
                <a href="#feiras">Feiras</a>
                <a href="/parceiros">Parceiros</a>
                <a href="#contato">Contato</a>
            </nav>

            <div className="footer-logos">
                <p className="footer-logos-text">
                    Este projeto foi realizado com recursos do Fundo de Apoio à Cultura do Distrito Federal
                </p>

                <div className="footer-logos-container">
                    <img src={logoFac} alt="FAC" />
                    <img src={logoSecult} alt="Secretaria de Cultura" />
                </div>
            </div>

            <div className="footer-copy">
                <p>© 2026 Enlace das Arteiras • Todos os direitos reservados</p>
            </div>

        </footer>
    );
}