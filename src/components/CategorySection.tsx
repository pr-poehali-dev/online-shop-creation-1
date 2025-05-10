
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

interface Category {
  id: string
  name: string
  image: string
  productCount: number
}

const categories: Category[] = [
  {
    id: "electronics",
    name: "Электроника",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    productCount: 120
  },
  {
    id: "clothing",
    name: "Одежда",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    productCount: 350
  },
  {
    id: "home",
    name: "Дом и сад",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    productCount: 230
  },
  {
    id: "beauty",
    name: "Красота",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    productCount: 190
  }
]

const CategorySection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Популярные категории</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            <Card className="overflow-hidden group h-full">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.productCount} товаров</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
