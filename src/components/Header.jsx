import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span className="logo-text">BILLION BOY$</span>
        </div>

        <nav className="nav">
          <a href="#catalog" className="nav-link">Catálogo</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
