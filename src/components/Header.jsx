import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/LOGO1.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="Billion Boys" className="logo-image" />
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Catálogo</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
