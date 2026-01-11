import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Sobre Nosotros */}
        <div className="about-hero">
          <h2 className="section-title">Sobre Nosotros</h2>
          <div className="about-content">
            <div className="history-card">
              <div className="icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>NUESTRA HISTORIA</h3>
              <p>
                Billionboys nació de la Pasión, por crear prendas que reflejen la personalidad clásica de un líder,
                fundada en 2021, por un joven soñador de dejar huella y arte en el mundo.
              </p>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="mission-vision">
          <h2 className="section-title">Misión y Visión</h2>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14" stroke="black" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>NUESTRA MISIÓN</h3>
              <p>
                Crear prendas de calidad excepcional que reflejen la autenticidad y personalidad de cada cliente.
                Nos comprometemos a ofrecer diseños únicos que combinen estilo urbano con confort, democratizando
                la moda premium y haciéndola accesible para todos aquellos que buscan expresar su individualidad.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>NUESTRA VISIÓN</h3>
              <p>
                Ser la marca de referencia en moda urbana premium, reconocida por nuestra innovación constante,
                compromiso con la calidad y dedicación a crear experiencias memorables. Aspiramos a expandir
                nuestra comunidad de Billion Boys a nivel global, manteniendo nuestros valores de autenticidad,
                sostenibilidad e inclusividad.
              </p>
            </div>
          </div>
        </div>

        {/* Nuestros Valores */}
        <div className="values-section">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h4>Compromiso</h4>
              <p>Diseños originales que reflejan tu verdadera personalidad</p>
            </div>

            <div className="value-card highlight">
              <h4>Integridad</h4>
              <p>Comprometidos con prácticas responsables con el medio ambiente</p>
            </div>

            <div className="value-card">
              <h4>Responsabilidad</h4>
              <p>Moda para todos, sin importar talla, edad o estilo</p>
            </div>

            <div className="value-card">
              <h4>Innovación</h4>
              <p>Constantemente explorando nuevas tendencias y técnicas</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3>¿Listo para transformar tu estilo?</h3>
          <Link to="/" className="cta-button">Explorar Catálogo</Link>
        </div>
      </div>
    </section>
  )
}

export default About
