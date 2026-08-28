import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import { motion as Motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaHeart, FaMapMarkerAlt, FaChild, FaShoppingBag, FaRecycle, FaArrowDown, FaExternalLinkAlt, FaUniversalAccess } from "react-icons/fa";
import { cardItem, fadeUp, staggerContainer, viewportOnce } from "../utils/animations";
import cartazFeira from "../assets/Feira-Cultural/Cartaz Geral - Enlace das Arteiras.png";
import mariaCard from "../assets/Feira-Cultural/Apresentação Maria - Enlace das Arteiras.png";
import djFoto from "../assets/Feira-Cultural/DJ Flávia Aguiar.jpg.jpeg";
import aneFoto from "../assets/Feira-Cultural/Apresentação Ane Êoketu - Enlace das Arteiras.png";
import oficinaFoto from "../assets/Feira-Cultural/Oficina Josefa - Enlace das Arteiras.png";
import produtoFoto from "../assets/Feira-Cultural/IMG-20260622-WA0119 - Patricia Andrade.jpg.jpeg";
import enlaceSimbolo from "../assets/Logo - Enlace.png";
import heroReferencia from "../assets/Feira-Cultural/Referencia Hero Feira.png";
import "../styles/style.css";

const quickInfo = [
    { icon: FaCalendarAlt, label: "Quando", lines: ["29 de agosto", "Sábado"] },
    { icon: FaClock, label: "Horário", lines: ["A partir das", "09h30"] },
    { icon: FaMapMarkerAlt, label: "Onde", lines: ["Centro de Práticas Sustentáveis — CPS", "Jardins Mangueiral"] },
    { icon: FaHeart, label: "Entrada", lines: ["Gratuita"] },
];

const schedule = [
    { time: "09h30", activities: ["Abertura da Feira + Espaço Kids", "DJ"] },
    { time: "10h00", activities: ["Apresentação do projeto", "Entrega dos certificados para as alunas", "Lançamento do catálogo"] },
    { time: "11h00", activities: ["Apresentação Maria"] },
    { time: "11h40", activities: ["Fala sobre o projeto, o catálogo e a importância das compras com os expositores"] },
    { time: "12h00", activities: ["Apresentação Ane Êoketu e banda"] },
    { time: "13h30", activities: ["DJ"] },
    { time: "14h00", activities: ["Apresentação Ane Êoketu e banda"] },
    { time: "15h30", activities: ["Oficina Josefa — Chás Medicinais"] },
    { time: "16h30", activities: ["Entrega dos alimentos para a Ecolimpo", "Sorteios", "Encerramento da Feira"] },
];

const highlights = [
    { category: "Espetáculo", title: "Pedaços de Maria", time: "11h00", description: "Um espetáculo para lembrar que brincar também é coisa de gente grande!", image: mariaCard, alt: "Cartaz oficial da apresentação Pedaços de Maria" },
    { category: "DJ", title: "DJ Beira Mundo — Flávia Aguiar", time: "A partir das 09h30", description: "Uma viagem por musicalidades, histórias e culturas que atravessam fronteiras.", image: djFoto, alt: "DJ Flávia Aguiar usando fones de ouvido" },
    { category: "Música", title: "Ane Êoketu e Banda", time: "12h00 e 14h00", description: "Um show para cantar, dançar e celebrar a música brasileira!", image: aneFoto, alt: "Cartaz oficial da apresentação de Ane Êoketu e Banda" },
    { category: "Oficina", title: "Chás com Plantas Medicinais do Cerrado", subtitle: "Oficina gratuita", time: "15h30", description: "Um encontro para conhecer plantas, sabores e saberes tradicionais do nosso território.", image: oficinaFoto, alt: "Cartaz oficial da oficina de chás com plantas medicinais do Cerrado" },
    { category: "Feira", title: "Artesanato, Manualismo e Gastronomia", time: "Durante todo o evento", description: "Conheça os trabalhos incríveis das nossas arteiras, artesãos e expositores.", image: produtoFoto, alt: "Peças artesanais florais produzidas por expositora da feira" },
];

const experiences = [
    { icon: FaChild, title: "Espaço Kids", text: "Um espaço especial para as crianças brincarem e se divertirem enquanto toda a família aproveita a feira.", tone: "pink" },
    { icon: FaShoppingBag, title: "Compre dos expositores", text: "Ao comprar dos expositores, você fortalece o trabalho artesanal, gera renda e apoia a economia criativa local.", tone: "orange" },
    { icon: FaRecycle, title: "Sustentabilidade", text: "Durante o evento haverá arrecadação de alimentos destinados à cooperativa parceira Ecolimpo.", tone: "green" },
];

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Centro+de+Pr%C3%A1ticas+Sustent%C3%A1veis+CPS+Jardins+Mangueiral+Distrito+Federal";
const embedUrl = "https://www.google.com/maps?q=Centro%20de%20Pr%C3%A1ticas%20Sustent%C3%A1veis%20CPS%20Jardins%20Mangueiral%20Distrito%20Federal&output=embed";

export default function Feiras() {
    const scrollToSchedule = () => document.getElementById("programacao")?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <>
            <SEO title="Feira Cultural 2026 | Enlace das Arteiras" description="Feira Cultural do Enlace das Arteiras: 29 de agosto de 2026, a partir das 09h30, no CPS Jardins Mangueiral. Entrada gratuita." image={cartazFeira} url="https://enlacedasarteiras.com.br/feiras" />
            <Navbar />
            <main className="feira-page">
                <section className="feira-hero" aria-labelledby="feira-title">
                    <div className="feira-shell feira-hero-grid">
                        <Motion.div className="feira-hero-copy" variants={fadeUp} initial="hidden" animate="visible">
                            <p className="feira-eyebrow">29 de agosto de 2026 <span aria-hidden="true">•</span> Sábado</p>
                            <h1 id="feira-title">
                                <span>Feira</span>
                                <span className="feira-cultural-word" aria-label="Cultural"><b>C</b><b>u</b><b>l</b><b>t</b><b>u</b><b>r</b><b>a</b><b>l</b></span>
                                <small>do Enlace das Arteiras</small>
                            </h1>
                            <p className="feira-hero-lead">Conexões que transformam através do fazer artesanal.</p>
                            <div className="feira-hero-details">
                                <p><FaClock aria-hidden="true" /><span>A partir<br /><strong>das 09h30</strong></span></p>
                                <p><FaMapMarkerAlt aria-hidden="true" /><span>Centro de Práticas Sustentáveis — CPS<br /><strong>Jardins Mangueiral</strong></span></p>
                            </div>
                            <button type="button" className="feira-primary-button" onClick={scrollToSchedule}>Ver programação <FaArrowDown aria-hidden="true" /></button>
                        </Motion.div>
                        <Motion.div className="feira-hero-art" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
                            <span className="feira-shape feira-shape-one" aria-hidden="true" /><span className="feira-shape feira-shape-two" aria-hidden="true" />
                            <div className="feira-main-photo" role="img" aria-label="Artista do espetáculo Pedaços de Maria com sua boneca" style={{ backgroundImage: `url(${heroReferencia})` }} />
                            <div className="feira-bubble-photo feira-bubble-one"><img src={produtoFoto} alt="Artesanato floral presente na feira" /></div>
                            <div className="feira-bubble-photo feira-bubble-two" role="img" aria-label="Produto de gastronomia artesanal" style={{ backgroundImage: `url(${cartazFeira})` }} />
                            <div className="feira-bubble-photo feira-bubble-three" role="img" aria-label="Responsável pela oficina de plantas medicinais do Cerrado" style={{ backgroundImage: `url(${oficinaFoto})` }} />
                        </Motion.div>
                    </div>
                </section>

                <Motion.section className="feira-about feira-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} aria-labelledby="feira-about-title">
                    <div className="feira-shell feira-about-grid">
                        <div className="feira-about-content">
                            <p className="feira-kicker">Sobre a feira</p>
                            <h2 id="feira-about-title">Um encontro para celebrar o fazer artesanal</h2>
                            <p>A Feira Cultural do Enlace das Arteiras chega como um momento de celebração, encontro e valorização da produção artesanal e manual.</p>
                            <p>Durante o evento, o público poderá conhecer e adquirir produtos de artesanato, manualismo e gastronomia artesanal, além de participar de apresentações culturais, atividades e momentos de convivência.</p>
                            <p>A feira representa a culminância do projeto Enlace das Arteiras, reunindo participantes, artistas, comunidade e parceiros em um espaço dedicado à cultura, à criatividade e à economia criativa e solidária.</p>
                        </div>
                        <div className="feira-about-illustration" aria-hidden="true"><img className="feira-about-mark" src={enlaceSimbolo} alt="" loading="lazy" /></div>
                    </div>
                </Motion.section>

                <section className="feira-quick" aria-label="Informações da feira">
                    <Motion.div className="feira-shell feira-quick-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {quickInfo.map((item) => {
                            const Icon = item.icon;
                            return <Motion.article className="feira-quick-item" variants={cardItem} key={item.label}><span className="feira-icon"><Icon aria-hidden="true" /></span><div><h2>{item.label}</h2>{item.lines.map((line) => <p key={line}>{line}</p>)}</div></Motion.article>;
                        })}
                    </Motion.div>
                </section>

                <section id="programacao" className="feira-schedule feira-section" aria-labelledby="schedule-title">
                    <div className="feira-shell"><p className="feira-kicker">Uma celebração do começo ao fim</p><h2 id="schedule-title" className="feira-section-title">Programação</h2>
                        <Motion.div className="feira-timeline" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                            {schedule.map(({ time, activities }) => <Motion.article className="feira-timeline-item" variants={cardItem} key={time}><time dateTime={`2026-08-29T${time.slice(0, 2)}:${time.slice(3)}`}>{time}</time><div>{activities.map((activity) => <p key={activity}>{activity}</p>)}</div></Motion.article>)}
                        </Motion.div>
                    </div>
                </section>

                <section className="feira-highlights feira-section" aria-labelledby="highlights-title">
                    <div className="feira-shell"><p className="feira-kicker">Arte, música e saberes</p><h2 id="highlights-title" className="feira-section-title">Destaques da programação</h2>
                        <Motion.div className="feira-highlight-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                            {highlights.map((item) => <Motion.article className="feira-highlight-card" variants={cardItem} whileHover={{ y: -7 }} key={item.title}><div className="feira-highlight-image"><img src={item.image} alt={item.alt} loading="lazy" /></div><div className="feira-highlight-content"><span className="feira-badge">{item.category}</span><h3>{item.title}</h3>{item.subtitle && <p className="feira-highlight-subtitle">{item.subtitle}</p>}<p>{item.description}</p><time><FaClock aria-hidden="true" /> {item.time}</time></div></Motion.article>)}
                        </Motion.div>
                    </div>
                </section>

                <section className="feira-experiences feira-section" aria-labelledby="experiences-title">
                    <div className="feira-shell"><p className="feira-kicker">Para toda a comunidade</p><h2 id="experiences-title" className="feira-section-title">O que você vai encontrar</h2><div className="feira-experience-grid">
                        {experiences.map((item) => {
                            const Icon = item.icon;
                            return <article className="feira-experience-card" key={item.title}><span className={`feira-experience-icon ${item.tone}`}><Icon aria-hidden="true" /></span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>;
                        })}
                    </div></div>
                </section>

                <section className="feira-location feira-section" aria-labelledby="location-title">
                    <div className="feira-shell feira-location-grid"><div className="feira-location-copy"><p className="feira-kicker">Localização</p><h2 id="location-title">Onde acontece?</h2><FaMapMarkerAlt className="feira-location-pin" aria-hidden="true" /><h3>Centro de Práticas Sustentáveis — CPS</h3><p>Jardins Mangueiral</p><a className="feira-primary-button" href={mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar <FaExternalLinkAlt aria-hidden="true" /></a></div>
                        <div className="feira-map"><iframe title="Mapa do Centro de Práticas Sustentáveis no Jardins Mangueiral" src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
                        <div className="feira-access"><FaUniversalAccess aria-hidden="true" /><div><h3>Acessibilidade</h3><p>Esta ação conta com recursos de acessibilidade comunicacional. A divulgação da feira inclui audiodescrição e vídeo-convite em Libras.</p><a href="#contato">Saiba mais sobre acessibilidade <span aria-hidden="true">→</span></a></div></div>
                    </div>
                </section>

                <section className="feira-final-cta" aria-labelledby="cta-title"><div className="feira-shell feira-final-grid"><div><p className="feira-kicker">Entrada gratuita</p><h2 id="cta-title">Vem fazer parte desse encontro!</h2><p className="feira-cta-lead">Artesanato, sabores, música, cultura e histórias que se encontram em um só lugar.</p></div><div className="feira-cta-details"><p>29 de agosto de 2026</p><p>A partir das 09h30</p><p>Centro de Práticas Sustentáveis — CPS<br />Jardins Mangueiral</p><strong>Esperamos você!</strong></div><img className="feira-cta-symbol" src={enlaceSimbolo} alt="Símbolo do Enlace das Arteiras" loading="lazy" /></div></section>
            </main>
            <Footer /><WhatsAppButton />
        </>
    );
}
