import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

import logoRedonda from "../assets/logo-Nova.png";
import Equipe from "../assets/Equipe.png";

export default function Navbar() {

    const navigate = useNavigate();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

    const whatsappContactLink =
        "https://wa.me/5561999673138?text=Olá,%20vim%20pelo%20site%20e%20quero%20mais%20informações%20sobre%20o%20Enlace%20das%20Arteiras";

    /* =========================
       SUGESTÕES
    ========================= */

    const searchSuggestions = [
        { label: "Artesanato e Manualismo", href: "/artesanato-manualismo" },
        { label: "Gastronomia Artesanal", href: "/gastronomia-artesanal" },
        { label: "Cursos e Oficinas", href: "/cursos" },
        { label: "Feiras e Eventos", href: "/feiras" },
        { label: "Galeria", href: "/galeria" },
        { label: "Parceiros", href: "/parceiros" },
        { label: "Contato", href: "#contato" },
    ];

    /* =========================
       FECHAR MENU AO REDIMENSIONAR
    ========================= */

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth > 900) {
                setIsMobileMenuOpen(false);
            }

        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    /* =========================
       FECHAR MENU AO CLICAR FORA
    ========================= */

    useEffect(() => {

        const handleClickOutside = (e) => {

            if (
                !e.target.closest(".navbar-menu") &&
                !e.target.closest(".hamburger-menu")
            ) {
                setIsMobileMenuOpen(false);
            }

        };

        if (isMobileMenuOpen) {

            document.addEventListener("click", handleClickOutside);

            return () =>
                document.removeEventListener("click", handleClickOutside);

        }

    }, [isMobileMenuOpen]);

    /* =========================
       BUSCA
    ========================= */

    const handleSearchChange = (e) => {

        setSearchQuery(e.target.value);

        setShowSearchSuggestions(
            e.target.value.length > 0
        );

    };

    const handleSearchSubmit = (e) => {

        e.preventDefault();

        const normalizedQuery = searchQuery.trim().toLowerCase();

        if (!normalizedQuery) {
            return;
        }

        const match = searchSuggestions.find((suggestion) =>
            suggestion.label.toLowerCase().includes(normalizedQuery)
        );

        navigate(match ? match.href : "/");

        setShowSearchSuggestions(false);

    };

    const handleSuggestionClick = (suggestion) => {

        setSearchQuery(suggestion.label);

        setShowSearchSuggestions(false);

        navigate(suggestion.href);

    };

    /* =========================
       FECHAR MENU AO CLICAR
    ========================= */

    const handleNavLinkClick = () => {

        setIsMobileMenuOpen(false);

    };

    return (
        <>

            {/* ================= HEADER ================= */}

            <header className="navbar-header">

                <div className="navbar-container">

                    {/* LOGO */}

                    <div className="navbar-logo">

                        <a href="/" className="logo-link">

                            <img
                                src={logoRedonda}
                                alt="Enlace das Arteiras"
                                className="logo-img"
                            />

                        </a>

                    </div>

                    {/* BUSCA */}

                    <form
                        className="search-bar"
                        onSubmit={handleSearchSubmit}
                    >

                        <div className="search-input-wrapper">

                            <input
                                type="text"
                                placeholder="Buscar produtos, artesãos..."
                                className="search-input"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onFocus={() =>
                                    searchQuery &&
                                    setShowSearchSuggestions(true)
                                }
                            />

                            {/* BOTÃO BUSCA */}

                            <button
                                type="submit"
                                className="search-btn"
                                aria-label="Buscar"
                            >

                                🔍

                            </button>

                            {/* SUGESTÕES */}

                            {showSearchSuggestions && (

                                <div className="search-suggestions">

                                    {searchSuggestions
                                        .filter((suggestion) =>
                                            suggestion.label
                                                .toLowerCase()
                                                .includes(
                                                    searchQuery.toLowerCase()
                                                )
                                        )
                                        .map((suggestion) => (

                                            <button
                                                type="button"
                                                key={suggestion.href}
                                                className="suggestion-item"
                                                onClick={() =>
                                                    handleSuggestionClick(
                                                        suggestion
                                                    )
                                                }
                                            >

                                                🔍 {suggestion.label}

                                            </button>

                                        ))}

                                </div>

                            )}

                        </div>

                    </form>

                    {/* BOTÃO */}

                    <div className="navbar-cta">

                        <a
                            href={whatsappContactLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-associate"
                        >

                            Seja nosso associado

                        </a>

                    </div>

                    {/* HAMBURGER */}

                    <button
                        type="button"
                        className={`hamburger-menu ${isMobileMenuOpen ? "active" : ""
                            }`}
                        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={isMobileMenuOpen}
                        onClick={() =>
                            setIsMobileMenuOpen(
                                !isMobileMenuOpen
                            )
                        }
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>

                </div>

            </header>

            {/* ================= BANNER ================= */}

            <div className="banner-section">

                <img
                    src={Equipe}
                    alt="Equipe Enlace das Arteiras"
                    className="banner-img"
                />

                <div className="banner-overlay">

                    <h1 className="banner-title">

                        Enlace das Arteiras

                    </h1>

                    <p className="banner-subtitle">

                        Artesanato que conecta pessoas e histórias

                    </p>

                </div>

            </div>

            {/* ================= MENU ================= */}

            <nav
                className={`navbar-menu ${isMobileMenuOpen
                        ? "mobile-open"
                        : ""
                    }`}
            >

                <div className="nav-primary">

                    <a
                        href="/"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Home
                    </a>

                    <a
                        href="/secec-df"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        SECEC-DF
                    </a>

                    <a
                        href="/artesanato-manualismo"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Artesanato e Manualismo
                    </a>

                    <a
                        href="/gastronomia-artesanal"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Gastronomia Artesanal
                    </a>

                    <a
                        href="/cursos"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Cursos
                    </a>

                    <a
                        href="/feiras"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Feiras
                    </a>

                    <a
                        href="/galeria"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Galeria
                    </a>

                    <a
                        href="/parceiros"
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        Parceiros
                    </a>

                </div>

            </nav>

        </>
    );
}
