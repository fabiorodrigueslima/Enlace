<<<<<<< HEAD
import { useState, useEffect } from "react";
import "../styles/style.css";
import logoRedonda from "../assets/Logo-Enlace.png";
import Equipe from "../assets/Equipe.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Dados de categorias para o Mega Menu - Produtos com Materiais Recicláveis
    const categories = {
        "Papel & Papelão": [
            "Cadernos Artesanais",
            "Organizadores",
            "Flores de Papel",
            "Quadros Decorativos",
        ],
        "Plástico Reciclado": [
            "Vasos & Cachepots",
            "Bijuterias",
            "Bolsas Artesanais",
            "Luminárias",
        ],
        "Vidro Reciclado": [
            "Vasos Decorativos",
            "Luminárias",
            "Porta-velas",
            "Organizadores",
        ],
        "Madeira Reciclada": [
            "Móveis Funcionais",
            "Prateleiras",
            "Caixas Organizadoras",
            "Painéis Decorativos",
        ],
        "Tecido Reciclado": [
            "Ecobags",
            "Almofadas",
            "Bolsas",
            "Tapetes",
        ],
        "Metal & Latas": [
            "Cachepots Rústicos",
            "Luminárias",
            "Organizadores",
            "Porta-velas",
        ],
    };

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

    const handleDropdownClick = (dropdownName) => {
        if (isMobile) {
            setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
        }
    };

    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
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

                        {/* MEGA MENU - CATÁLOGO */}
                        <div
                            className={`nav-item-dropdown ${isMenuOpen ? "open" : ""}`}
                            onMouseEnter={() => !isMobile && setIsMenuOpen(true)}
                            onMouseLeave={() => !isMobile && setIsMenuOpen(false)}
                        >
                            <button
                                className="nav-link nav-link-dropdown"
                                onClick={() => handleDropdownClick("catalogo")}
                                aria-expanded={isMenuOpen}
                                aria-haspopup="true"
                            >
                                Catálogo
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className={`dropdown-icon ${isMenuOpen ? "open" : ""}`}
                                    aria-hidden="true"
                                >
                                    <path d="M6 8l4 4 4-4" />
                                </svg>
                            </button>

                            {/* MEGA MENU CONTENT */}
                            {isMenuOpen && (
                                <div className="mega-menu" role="menu">
                                    <div className="mega-menu-grid">
                                        {Object.entries(categories).map(([category, items]) => (
                                            <div key={category} className="mega-menu-column" role="menuitem">
                                                <h3 className="mega-menu-title">{category}</h3>
                                                <ul className="mega-menu-list">
                                                    {items.map((item, index) => (
                                                        <li key={index}>
                                                            <a
                                                                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                                className="mega-menu-link"
                                                                onClick={handleNavLinkClick}
                                                            >
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {/* SEÇÃO ESPECIAL NO MEGA MENU */}
                                        <div className="mega-menu-column mega-menu-featured" role="menuitem">
                                            <h3 className="mega-menu-title">Em Destaque</h3>
                                            <div className="featured-items">
                                                <a href="#promocoes" className="featured-link" onClick={handleNavLinkClick}>
                                                    🎉 Promoções Especiais
                                                </a>
                                                <a href="#novidades" className="featured-link" onClick={handleNavLinkClick}>
                                                    ✨ Novidades
                                                </a>
                                                <a href="#bestsellers" className="featured-link" onClick={handleNavLinkClick}>
                                                    ⭐ Mais Vendidos
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* DROPDOWN - SERVIÇOS */}
                        <div
                            className={`nav-item-dropdown ${activeDropdown === "servicos" ? "open" : ""}`}
                            onMouseEnter={() => !isMobile && setActiveDropdown("servicos")}
                            onMouseLeave={() => !isMobile && setActiveDropdown(null)}>
                        </div>

                        <a
                            href="#parceiros"
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
=======
import { useState, useEffect } from "react";
import "../styles/style.css";
import logoRedonda from "../assets/Logo-Enlace.png";
import banner from "../assets/Banner.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Dados de categorias para o Mega Menu - Produtos com Materiais Recicláveis
    const categories = {
        "Papel & Papelão": [
            "Cadernos Artesanais",
            "Organizadores",
            "Flores de Papel",
            "Quadros Decorativos",
        ],
        "Plástico Reciclado": [
            "Vasos & Cachepots",
            "Bijuterias",
            "Bolsas Artesanais",
            "Luminárias",
        ],
        "Vidro Reciclado": [
            "Vasos Decorativos",
            "Luminárias",
            "Porta-velas",
            "Organizadores",
        ],
        "Madeira Reciclada": [
            "Móveis Funcionais",
            "Prateleiras",
            "Caixas Organizadoras",
            "Painéis Decorativos",
        ],
        "Tecido Reciclado": [
            "Ecobags",
            "Almofadas",
            "Bolsas",
            "Tapetes",
        ],
        "Metal & Latas": [
            "Cachepots Rústicos",
            "Luminárias",
            "Organizadores",
            "Porta-velas",
        ],
    };

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

    const handleDropdownClick = (dropdownName) => {
        if (isMobile) {
            setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
        }
    };

    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
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
                <img src={banner} alt="Banner Enlace das Arteiras" className="banner-img" />
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

                        {/* MEGA MENU - CATÁLOGO */}
                        <div
                            className={`nav-item-dropdown ${isMenuOpen ? "open" : ""}`}
                            onMouseEnter={() => !isMobile && setIsMenuOpen(true)}
                            onMouseLeave={() => !isMobile && setIsMenuOpen(false)}
                        >
                            <button
                                className="nav-link nav-link-dropdown"
                                onClick={() => handleDropdownClick("catalogo")}
                                aria-expanded={isMenuOpen}
                                aria-haspopup="true"
                            >
                                Catálogo
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className={`dropdown-icon ${isMenuOpen ? "open" : ""}`}
                                    aria-hidden="true"
                                >
                                    <path d="M6 8l4 4 4-4" />
                                </svg>
                            </button>

                            {/* MEGA MENU CONTENT */}
                            {isMenuOpen && (
                                <div className="mega-menu" role="menu">
                                    <div className="mega-menu-grid">
                                        {Object.entries(categories).map(([category, items]) => (
                                            <div key={category} className="mega-menu-column" role="menuitem">
                                                <h3 className="mega-menu-title">{category}</h3>
                                                <ul className="mega-menu-list">
                                                    {items.map((item, index) => (
                                                        <li key={index}>
                                                            <a
                                                                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                                className="mega-menu-link"
                                                                onClick={handleNavLinkClick}
                                                            >
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {/* SEÇÃO ESPECIAL NO MEGA MENU */}
                                        <div className="mega-menu-column mega-menu-featured" role="menuitem">
                                            <h3 className="mega-menu-title">Em Destaque</h3>
                                            <div className="featured-items">
                                                <a href="#promocoes" className="featured-link" onClick={handleNavLinkClick}>
                                                    🎉 Promoções Especiais
                                                </a>
                                                <a href="#novidades" className="featured-link" onClick={handleNavLinkClick}>
                                                    ✨ Novidades
                                                </a>
                                                <a href="#bestsellers" className="featured-link" onClick={handleNavLinkClick}>
                                                    ⭐ Mais Vendidos
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* DROPDOWN - SERVIÇOS */}
                        <div
                            className={`nav-item-dropdown ${activeDropdown === "servicos" ? "open" : ""}`}
                            onMouseEnter={() => !isMobile && setActiveDropdown("servicos")}
                            onMouseLeave={() => !isMobile && setActiveDropdown(null)}>
                        </div>

                        <a
                            href="#parceiros"
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
>>>>>>> f9e0a262f9453b2e992fb3f67c91fb13f5966766
}