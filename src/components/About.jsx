import './About.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Sobre Nosotros */}
        <div className="about-hero">
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="about-content">
            <div className="history-card">
              <div className="icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>{t('about.historyTitle')}</h3>
              <p>{t('about.historyText')}</p>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="mission-vision">
          <h2 className="section-title">{t('about.missionVisionTitle')}</h2>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14" stroke="black" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>{t('about.missionTitle')}</h3>
              <p>{t('about.missionText')}</p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>{t('about.visionTitle')}</h3>
              <p>{t('about.visionText')}</p>
            </div>
          </div>
        </div>

        {/* Nuestros Valores */}
        <div className="values-section">
          <h2 className="section-title">{t('about.valuesTitle')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <h4>{t('about.value1Title')}</h4>
              <p>{t('about.value1Text')}</p>
            </div>

            <div className="value-card highlight">
              <h4>{t('about.value2Title')}</h4>
              <p>{t('about.value2Text')}</p>
            </div>

            <div className="value-card">
              <h4>{t('about.value3Title')}</h4>
              <p>{t('about.value3Text')}</p>
            </div>

            <div className="value-card">
              <h4>{t('about.value4Title')}</h4>
              <p>{t('about.value4Text')}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3>{t('about.ctaTitle')}</h3>
          <Link to="/" className="cta-button">{t('about.ctaButton')}</Link>
        </div>
      </div>
    </section>
  )
}

export default About
