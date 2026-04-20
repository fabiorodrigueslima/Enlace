<<<<<<< HEAD
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/style.css";

export default function Footer() {
    return (
        <footer id="contato" className="footer">

            {/* TOPO */}
            <div className="footer-top">

                {/* ESQUERDA */}
                <div className="footer-left">
                    <h2 className="footer-logo">Enlace das Arteiras</h2>

                    <p className="footer-text">
                        Transformando vidas através da arte,
                        cultura e sustentabilidade.
                    </p>
                </div>

                {/* DIREITA */}
                <div className="footer-right">
                    <h3>SIGA NOSSAS REDES</h3>

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
                            href="mailto:contato@email.com"
                            aria-label="Email"
                        >
                            <MdEmail />
                        </a>

                    </div>
                </div>

            </div>

            {/* MENU */}
            <div className="footer-menu">
                <a href="/">Início</a>
                <a href="#quem-somos">Quem Somos</a>
                <a href="#feiras">Feiras</a>
                <a href="#parceiros">Parceiros</a>
                <a href="#contato">Contato</a>
            </div>

            {/* COPY */}
            <div className="footer-copy">
                <p>© 2026 Enlace das Arteiras • Todos os direitos reservados</p>
            </div>

        </footer>
    );
=======
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/style.css";

export default function Footer() {
    return (
        <footer id="contato" className="footer">

            {/* TOPO */}
            <div className="footer-top">

                {/* ESQUERDA */}
                <div className="footer-left">
                    <h2 className="footer-logo">Enlace das Arteiras</h2>
                </div>

                {/* DIREITA */}
                <div className="footer-right rede">
                    <h3>SIGA NOSSAS REDES</h3>

                    <div className="social-links">
                        <a href="https://www.instagram.com/enlacedasarteiras/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </a>

                        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <FaFacebookF />
                        </a>

                        <a href="mailto:contato@email.com" aria-label="Email">
                            <MdEmail />
                        </a>
                    </div>
                </div>

            </div>

            {/* MENU */}
            <div className="footer-menu">
                <a href="/">Home</a>
                <a href="#cursos">Cursos</a>
                <a href="#feiras">Feiras</a>
                <a href="#parceiros">Parceiros</a>
            </div>

            {/* COPY */}
            <div className="footer-copy">
                <p>© 2026 Enlace das Arteiras</p>
            </div>

        </footer>
    );
>>>>>>> f9e0a262f9453b2e992fb3f67c91fb13f5966766
}