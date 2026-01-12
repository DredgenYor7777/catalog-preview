import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../components/ProductCard'

// Importar imágenes
import W1 from '../assets/W1.jpg'
import W2 from '../assets/W2.jpg'
import B1 from '../assets/B1.jpg'
import B2 from '../assets/B2.jpg'
import NB1 from '../assets/NB1.jpeg'
import NB2 from '../assets/NB2.jpeg'
import NB3 from '../assets/NB3.jpeg'
import NB4 from '../assets/NB4.jpeg'
import NB5 from '../assets/NB5.jpeg'
import NB6 from '../assets/NB6.jpeg'
import NB7 from '../assets/NB7.jpeg'
import NB8 from '../assets/NB8.jpeg'
import NB9 from '../assets/NB9.jpeg'

const Home = () => {
  const { t } = useTranslation()

  const products = [
    {
      id: 1,
      nameKey: 'products.product1.name',
      descriptionKey: 'products.product1.description',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: W1,
      category: 'Classic'
    },
    {
      id: 2,
      nameKey: 'products.product2.name',
      descriptionKey: 'products.product2.description',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: W2,
      category: 'Premium'
    },
    {
      id: 3,
      nameKey: 'products.product3.name',
      descriptionKey: 'products.product3.description',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: B1,
      category: 'Classic'
    },
    {
      id: 4,
      nameKey: 'products.product4.name',
      descriptionKey: 'products.product4.description',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: B2,
      category: 'Premium'
    },
    {
      id: 5,
      nameKey: 'products.nb1.name',
      descriptionKey: 'products.nb1.description',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB1,
      category: 'Classic'
    },
    {
      id: 6,
      nameKey: 'products.nb2.name',
      descriptionKey: 'products.nb2.description',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: NB2,
      category: 'Premium'
    },
    {
      id: 7,
      nameKey: 'products.nb3.name',
      descriptionKey: 'products.nb3.description',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB3,
      category: 'Classic'
    },
    {
      id: 8,
      nameKey: 'products.nb4.name',
      descriptionKey: 'products.nb4.description',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: NB4,
      category: 'Premium'
    },
    {
      id: 9,
      nameKey: 'products.nb5.name',
      descriptionKey: 'products.nb5.description',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB5,
      category: 'Classic'
    },
    {
      id: 10,
      nameKey: 'products.nb6.name',
      descriptionKey: 'products.nb6.description',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: NB6,
      category: 'Premium'
    },
    {
      id: 11,
      nameKey: 'products.nb7.name',
      descriptionKey: 'products.nb7.description',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB7,
      category: 'Classic'
    },
    {
      id: 12,
      nameKey: 'products.nb8.name',
      descriptionKey: 'products.nb8.description',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: NB8,
      category: 'Premium'
    },
    {
      id: 13,
      nameKey: 'products.nb9.name',
      descriptionKey: 'products.nb9.description',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB9,
      category: 'Classic'
    }
  ]

  const [filter, setFilter] = useState('all')

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter)

  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="catalog-section" id="catalog">
        <div className="catalog-header">
          <h2>{t('catalog.title')}</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('catalog.filterAll')}
            </button>
            <button
              className={`filter-btn ${filter === 'Classic' ? 'active' : ''}`}
              onClick={() => setFilter('Classic')}
            >
              {t('catalog.filterClassic')}
            </button>
            <button
              className={`filter-btn ${filter === 'Premium' ? 'active' : ''}`}
              onClick={() => setFilter('Premium')}
            >
              {t('catalog.filterPremium')}
            </button>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
