
import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Link } from "react-router-dom"

export interface Product {
  id: number
  title: string
  price: number
  originalPrice?: number
  imageUrl: string
  rating: number
  category: string
  isNew?: boolean
  isSale?: boolean
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0
  
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover-scale h-full flex flex-col relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="flex-1 flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img 
            src={product.imageUrl} 
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          
          <Button
            size="icon"
            variant="ghost"
            className={`absolute top-2 right-2 bg-white/80 hover:bg-white transition-opacity rounded-full ${isFavorite ? 'text-red-500' : 'text-gray-600'}`}
            onClick={handleFavoriteToggle}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500' : ''}`} />
          </Button>
          
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-blue-500">Новинка</Badge>
          )}
          
          {product.isSale && (
            <Badge className="absolute top-2 left-2 bg-red-500">-{discount}%</Badge>
          )}
        </div>

        <CardContent className="flex-1 p-4">
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <span>{product.category}</span>
            <div className="flex items-center ml-auto">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 mr-1" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold">{product.price.toLocaleString()} ₽</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {product.originalPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-3 bg-gray-50 transition-opacity duration-300 mt-auto">
        <Button 
          className="w-full group relative overflow-hidden" 
          size="sm"
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            В корзину
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
