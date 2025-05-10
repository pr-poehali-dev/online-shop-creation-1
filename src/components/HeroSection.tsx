
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Открой для себя мир <span className="text-primary">прекрасных товаров</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Наш онлайн-магазин предлагает широкий ассортимент качественных товаров 
              по доступным ценам. Найдите то, что искали, прямо сейчас!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/category/new">Новинки сезона</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/catalog">Каталог товаров</Link>
              </Button>
            </div>
          </div>
          <div className="order-first md:order-last flex justify-center animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Шоппинг" 
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium text-gray-500">Скидки до</div>
                <div className="text-3xl font-bold text-primary">50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
