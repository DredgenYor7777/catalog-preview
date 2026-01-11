import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">BILLION BOY$</h3>
          <p className="footer-text">Estilo exclusivo, calidad premium</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contacto</h4>
          <div className="contact-info">
            <a href="mailto:contacto@billionboys.com" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              contacto@billionboys.com
            </a>
            <a href="https://instagram.com/billionboys" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @billionboys
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Información</h4>
          <ul className="footer-links">
            <li><a href="#catalog">Catálogo</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#shipping">Envíos</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Billion Boy$. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
