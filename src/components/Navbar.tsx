import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const categories = [
    { name: "Электроника", path: "/category/electronics" },
    { name: "Одежда", path: "/category/clothing" },
    { name: "Дом и сад", path: "/category/home" },
    { name: "Красота", path: "/category/beauty" },
  ];

  return (
    <nav className="border-b sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.poehali.dev/files/e83764db-9cc2-495e-a947-6f638d43e9c1.jpg"
                alt="LoragamoShop Logo"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <span className="text-xl font-bold text-primary">
                LoragamoShop
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="flex items-center">
            <div
              className={`transition-all duration-300 ${isSearchOpen ? "w-64" : "w-0"} overflow-hidden`}
            >
              <Input
                type="search"
                placeholder="Поиск товаров..."
                className={`mr-2 ${isSearchOpen ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="mr-2"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-60" : "max-h-0"}`}
        >
          <div className="py-3 space-y-3">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
