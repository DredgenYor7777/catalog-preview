import { useState } from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-badge">{product.category}</span>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <div className="product-prices">
          <div className="price-item">
            <span className="price-label">MXN</span>
            <span className="price-value">${product.priceMXN.toFixed(2)}</span>
          </div>
          <div className="price-item">
            <span className="price-label">CAD</span>
            <span className="price-value">${product.priceCAD.toFixed(2)}</span>
          </div>
        </div>

        <button
          className="description-toggle"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? 'Ocultar' : 'Ver'} Descripción
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              transform: showDescription ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {showDescription && (
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
