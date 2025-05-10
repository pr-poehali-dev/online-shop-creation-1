import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Пример данных для отображения
  const featuredProducts: Product[] = [
    {
      id: 1,
      title: "Беспроводные наушники Pro Max",
      price: 12990,
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      rating: 4.8,
      category: "Электроника",
      isNew: true,
    },
    {
      id: 2,
      title: "Стильная мужская куртка из натуральной кожи",
      price: 18900,
      originalPrice: 24500,
      imageUrl:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      rating: 4.6,
      category: "Одежда",
      isSale: true,
    },
    {
      id: 3,
      title: "Умная лампа с голосовым управлением",
      price: 2190,
      imageUrl:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      rating: 4.3,
      category: "Дом и сад",
    },
    {
      id: 4,
      title: "Набор косметики для ухода за кожей",
      price: 4590,
      originalPrice: 5990,
      imageUrl:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1688&q=80",
      rating: 4.9,
      category: "Красота",
      isSale: true,
    },
    {
      id: 5,
      title: "Смартфон Galaxy Ultra",
      price: 79990,
      imageUrl:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      rating: 4.7,
      category: "Электроника",
      isNew: true,
    },
    {
      id: 6,
      title: "Спортивные кроссовки для бега",
      price: 6490,
      originalPrice: 8990,
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      rating: 4.5,
      category: "Одежда",
      isSale: true,
    },
    {
      id: 7,
      title: "Роботизированный пылесос",
      price: 23990,
      imageUrl:
        "https://images.unsplash.com/photo-1582980752625-3e3ccb32718b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      rating: 4.4,
      category: "Дом и сад",
    },
    {
      id: 8,
      title: "Набор профессиональной косметики",
      price: 9990,
      imageUrl:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      rating: 4.8,
      category: "Красота",
      isNew: true,
    },
  ];

  const newArrivals = featuredProducts.filter((p) => p.isNew);
  const saleItems = featuredProducts.filter((p) => p.isSale);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <Separator className="my-8" />
        <ProductGrid
          products={newArrivals}
          title="Новые поступления"
          subtitle="Познакомьтесь с нашими самыми свежими товарами этого сезона"
        />
        <div className="bg-gray-50 py-10 my-10">
          <ProductGrid
            products={saleItems}
            title="Скидки и акции"
            subtitle="Успейте приобрести товары по специальным ценам"
          />
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">О магазине</h3>
              <p className="text-gray-400">
                Наш интернет-магазин предлагает широкий ассортимент товаров
                высокого качества по доступным ценам.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <p className="text-gray-400">Телефон: +7 (999) 123-45-67</p>
              <p className="text-gray-400">Email: info@shopmarket.ru</p>
              <p className="text-gray-400">
                Адрес: г. Москва, ул. Примерная, д. 123
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Возврат и обмен
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 LoragamoShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
