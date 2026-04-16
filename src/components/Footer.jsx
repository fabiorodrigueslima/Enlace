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
}