import { useState, useEffect } from "react";
import "../styles/style.css";
import logoRedonda from "../assets/logo-Nova.png";
import Equipe from "../assets/Equipe.png";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Sugestões de busca - Produtos Recicláveis
    const searchSuggestions = [
        "Cadernos Artesanais",
        "Vasos Reciclados",
        "Bijuterias Sustentáveis",
        "Móveis de Madeira Reciclada",
        "Ecobags",
        "Luminárias Artesanais",
        "Organizadores Criativos",
    ];

    // Monitorar mudanças de tamanho de tela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Fechar menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".navbar-menu") && !e.target.closest(".hamburger-menu")) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("click", handleClickOutside);
            return () => document.removeEventListener("click", handleClickOutside);
        }
    }, [isMobileMenuOpen]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setShowSearchSuggestions(e.target.value.length > 0);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Buscar por:", searchQuery);
        setShowSearchSuggestions(false);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setShowSearchSuggestions(false);
    };

    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* HEADER COM LOGO E BUSCA */}
            <header className="navbar-header">
                <div className="navbar-container">
                    {/* LOGO REDONDA */}
                    <div className="navbar-logo">
                        <a href="/" className="logo-link">
                            <img src={logoRedonda} alt="Enlace das Arteiras" className="logo-img logo-redonda" />
                        </a>
                    </div>

                    {/* BARRA DE BUSCA */}
                    <form className="search-bar" onSubmit={handleSearchSubmit}>
                        <div className="search-input-wrapper">
                            <input
                                type="text"
                                placeholder="Buscar produtos, artesãos..."
                                className="search-input"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onFocus={() => searchQuery && setShowSearchSuggestions(true)}
                                aria-label="Buscar produtos"
                            />
                            <button type="submit" className="search-btn" aria-label="Buscar">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    aria-hidden="true"
                                >
                                    <circle cx="9" cy="9" r="7" />
                                    <path d="m14 14 4 4" />
                                </svg>
                            </button>

                            {/* SUGESTÕES DE BUSCA */}
                            {showSearchSuggestions && (
                                <div className="search-suggestions" role="listbox">
                                    {searchSuggestions
                                        .filter((s) =>
                                            s.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        .map((suggestion, index) => (
                                            <div
                                                key={index}
                                                className="suggestion-item"
                                                onClick={() => handleSuggestionClick(suggestion)}
                                                role="option"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") handleSuggestionClick(suggestion);
                                                }}
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    aria-hidden="true"
                                                >
                                                    <circle cx="9" cy="9" r="7" />
                                                    <path d="m14 14 4 4" />
                                                </svg>
                                                {suggestion}
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    </form>

                    {/* BOTÃO DE AÇÃO PRINCIPAL */}
                    <div className="navbar-cta">
                        <button className="btn-associate" aria-label="Seja nosso associado">
                            Seja nosso associado
                        </button>
                    </div>

                    {/* MENU HAMBURGER (MOBILE) */}
                    <button
                        className={`hamburger-menu ${isMobileMenuOpen ? "active" : ""}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* BANNER COM IMAGEM */}
            <div className="banner-section">
                <img src={Equipe} alt="Menu Enlace das Arteiras" className="banner-img" />
                <div className="banner-overlay">
                    <h1 className="banner-title">Enlace das Arteiras</h1>
                    <p className="banner-subtitle">Artesanato que conecta pessoas e histórias</p>
                </div>
            </div>

            {/* MENU DE NAVEGAÇÃO */}
            <nav
                className={`navbar-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}
                id="mobile-menu"
                role="navigation"
                aria-label="Navegação principal"
            >
                {/* NAVEGAÇÃO PRINCIPAL */}
                <div className="nav-primary">
                    <a
                        href="/"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Home
                    </a>

                    <a
                        href="#secec-df"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        SECEC-DF
                    </a>

                    <a
                        href="#artesanato-manualismo"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Artesanato e Manualismo
                    </a>

                    <a
                        href="#gastronomia-artesanal"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Gastronomia Artesanal
                    </a>

                     <a
                        href="/parceiros"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Parceiros
                    </a>

                    <a
                        href="#cursos"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Cursos
                    </a>

                    <a
                        href="#feiras"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Feiras
                    </a>

                    <a
                        href="#galeria"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Galeria
                    </a>
                </div>
            </nav>
        </>
    );
}