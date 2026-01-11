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
import NB1 from './assets/NB1.jpeg'
import NB2 from './assets/NB2.jpeg'
import NB3 from './assets/NB3.jpeg'
import NB4 from './assets/NB4.jpeg'
import NB5 from './assets/NB5.jpeg'
import NB6 from './assets/NB6.jpeg'
import NB7 from './assets/NB7.jpeg'
import NB8 from './assets/NB8.jpeg'
import NB9 from './assets/NB9.jpeg'

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
    },
    {
      id: 5,
      name: 'CAMISETA ESTILO URBANO',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB1,
      category: 'Classic',
      description: 'Diseño urbano y moderno con gráficos exclusivos. Perfecta para un look casual y auténtico.'
    },
    {
      id: 6,
      name: 'CAMISETA GRAPHIC EDITION',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: NB2,
      category: 'Premium',
      description: 'Edición especial con estampados de alta definición. Estilo único que destaca en cualquier lugar.'
    },
    {
      id: 7,
      name: 'CAMISETA STREETWEAR',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB3,
      category: 'Classic',
      description: 'Inspiración streetwear con detalles llamativos. Comodidad y estilo en una sola prenda.'
    },
    {
      id: 8,
      name: 'CAMISETA SIGNATURE SERIES',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: NB4,
      category: 'Premium',
      description: 'Serie exclusiva con acabados premium y diseño característico de la marca. Para quienes buscan lo mejor.'
    },
    {
      id: 9,
      name: 'CAMISETA URBAN CLASSIC',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB5,
      category: 'Classic',
      description: 'Clásico renovado con toques contemporáneos. Versatilidad garantizada para tu día a día.'
    },
    {
      id: 10,
      name: 'CAMISETA DELUXE EDITION',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: NB6,
      category: 'Premium',
      description: 'Edición deluxe con materiales de primera calidad y diseño sofisticado. Elegancia y confort combinados.'
    },
    {
      id: 11,
      name: 'CAMISETA BOLD STYLE',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB7,
      category: 'Classic',
      description: 'Estilo audaz con gráficos impactantes. Expresa tu personalidad con confianza.'
    },
    {
      id: 12,
      name: 'CAMISETA ELITE COLLECTION',
      priceMXN: 899.00,
      priceCAD: 49.97,
      image: NB8,
      category: 'Premium',
      description: 'Colección élite con detalles exclusivos y tecnología de confort avanzada. Lo mejor de lo mejor.'
    },
    {
      id: 13,
      name: 'CAMISETA ESSENTIAL PLUS',
      priceMXN: 599.00,
      priceCAD: 35.44,
      image: NB9,
      category: 'Classic',
      description: 'Esencial mejorado con diseño contemporáneo. La base perfecta para cualquier outfit.'
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
