import './Header.css'
import logo from '../assets/logo/LOGO1.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Billion Boys" className="logo-image" />
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
