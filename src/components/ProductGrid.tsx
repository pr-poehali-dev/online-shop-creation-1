
import ProductCard, { Product } from "./ProductCard"

interface ProductGridProps {
  products: Product[]
  title?: string
  subtitle?: string
}

const ProductGrid = ({ products, title, subtitle }: ProductGridProps) => {
  return (
    <section className="container mx-auto px-4 py-10">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
