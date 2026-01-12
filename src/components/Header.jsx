import './Header.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo/LOGO1.jpg'
import LanguageSelector from './LanguageSelector'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="Billion Boys" className="logo-image" />
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">{t('header.catalog')}</Link>
          <Link to="/nosotros" className="nav-link">{t('header.about')}</Link>
          <a href="#contact" className="nav-link">{t('header.contact')}</a>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  )
}

export default Header
