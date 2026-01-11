import { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import './App.css'

// Importar imágenes (deberás copiar las imágenes de tu proyecto original)
import W1 from './assets/W1.jpg'
import W2 from './assets/W2.jpg'
import B1 from './assets/B1.jpg'
import B2 from './assets/B2.jpg'

function App() {
  const products = [
    {
      id: 1,
      name: 'CAMISETA BLANCA CLASSIC',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: W1,
      category: 'Classic',
      description: 'Camiseta blanca de algodón 100% orgánico con diseño exclusivo. Perfecta para uso diario con un corte moderno y cómodo.'
    },
    {
      id: 2,
      name: 'CAMISETA BLANCA PREMIUM',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: W2,
      category: 'Premium',
      description: 'Camiseta blanca premium con acabados de alta calidad. Material transpirable y resistente, ideal para cualquier ocasión.'
    },
    {
      id: 3,
      name: 'CAMISETA NEGRA CLASSIC',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: B1,
      category: 'Classic',
      description: 'Camiseta negra minimalista y elegante. Combina con todo tu guardarropa. Diseño atemporal y versátil.'
    },
    {
      id: 4,
      name: 'CAMISETA NEGRA PREMIUM',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: B2,
      category: 'Premium',
      description: 'Camiseta negra de edición limitada con tecnología anti-sudor. Ideal para cualquier ocasión con un acabado superior.'
    }
  ]

  const [filter, setFilter] = useState('all')

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter)

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">BILLION BOY$</h1>
            <p className="hero-subtitle">Estilo exclusivo, calidad premium</p>
          </div>
        </section>

        <section className="catalog-section">
          <div className="catalog-header">
            <h2>Nuestro Catálogo</h2>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                Todos
              </button>
              <button
                className={`filter-btn ${filter === 'Classic' ? 'active' : ''}`}
                onClick={() => setFilter('Classic')}
              >
                Classic
              </button>
              <button
                className={`filter-btn ${filter === 'Premium' ? 'active' : ''}`}
                onClick={() => setFilter('Premium')}
              >
                Premium
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

      <Footer />
    </div>
  )
}

export default App
