# Catálogo Billion Boy$ - Vista Previa

Página de catálogo simplificada para mostrar productos. Ideal para subir a Vercel como preview mientras desarrollas el ecommerce completo.

## 🚀 Instalación

```bash
npm install
```

## 📦 Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos listos para producción estarán en la carpeta `dist/`

## 📤 Deploy en Vercel

### Opción 1: Desde la línea de comandos

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Para producción:
```bash
vercel --prod
```

### Opción 2: Desde la interfaz web

1. Ve a [vercel.com](https://vercel.com)
2. Importa este proyecto
3. Vercel detectará automáticamente que es un proyecto Vite
4. Haz clic en "Deploy"

## 📸 IMPORTANTE: Imágenes

**Debes copiar las imágenes de tu proyecto original** a la carpeta `src/assets/`:

Copia estos archivos desde tu proyecto ecommerce-react:
- `ecommerce-react/src/assets/images/products/W1.jpg` → `catalog-preview/src/assets/W1.jpg`
- `ecommerce-react/src/assets/images/products/W2.jpg` → `catalog-preview/src/assets/W2.jpg`
- `ecommerce-react/src/assets/images/products/B1.jpg` → `catalog-preview/src/assets/B1.jpg`
- `ecommerce-react/src/assets/images/products/B2.jpg` → `catalog-preview/src/assets/B2.jpg`

O usa este comando en PowerShell:
```powershell
Copy-Item "c:\Users\Dell\Downloads\ecommerce-react\src\assets\images\products\*.jpg" -Destination "c:\Users\Dell\Downloads\catalog-preview\src\assets\"
```

## ✨ Características

- ✅ Visualización de catálogo con filtros (Todos, Classic, Premium)
- ✅ Tarjetas de producto con hover effects
- ✅ Precios en MXN y CAD
- ✅ Descripciones expandibles
- ✅ Diseño responsive (mobile-first)
- ✅ Optimizado para Vercel
- ✅ Sin funcionalidad de carrito (solo preview)

## 🎨 Personalización

Puedes editar los productos en `src/App.jsx` en el array `products`:

```javascript
const products = [
  {
    id: 1,
    name: 'CAMISETA BLANCA CLASSIC',
    priceMXN: 599.00,
    priceCAD: 35.44,
    image: W1,
    category: 'Classic',
    description: '...'
  }
]
```

## 📱 Secciones

- **Hero**: Presentación principal con logo y slogan
- **Catálogo**: Grid de productos con filtros
- **Footer**: Información de contacto y enlaces

## 🌐 Variables de Entorno (Opcional)

Si necesitas configurar URLs o variables, crea un archivo `.env`:

```env
VITE_CONTACT_EMAIL=contacto@billionboys.com
VITE_INSTAGRAM=@billionboys
```

## 📝 Notas

- Esta es una versión **solo de visualización** sin carrito de compras
- Los precios y productos se muestran directamente desde el código
- Para el ecommerce completo con carrito, usa el proyecto `ecommerce-react`
- Ideal para mostrar el catálogo mientras desarrollas las funcionalidades completas

## 🔗 Links Útiles

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Vercel](https://vercel.com/docs)
- [React](https://react.dev/)

---

Desarrollado con ⚡ Vite + React
