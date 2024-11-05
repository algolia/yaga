import { Search, ShoppingCart, Menu, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CustomSearchBox from './CustomSearchBox/CustomSearchBox';
import { useInstantSearch } from 'react-instantsearch';

const categories = [
  "All Products",
  "Electronics",
  "Furniture",
  "Clothing",
  "Books",
  "Sports",
  "Home & Garden",
];



function SearchBar({ selectedCategory, setSelectedCategory }) {
  const { uiState, setUiState } = useInstantSearch();
  return (
    <div className="flex items-center gap-4 mb-4 justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] custom-bg">
          <nav className="flex flex-col gap-4">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className={`block px-2 py-1 text-lg ${
                  selectedCategory === category
                    ? "font-bold text-slate-900"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <CustomSearchBox />
      <Button variant="ghost" size="icon">
        <Heart className="h-5 w-5" />
        <span className="sr-only">Favourite</span>
      </Button>

      <Button variant="ghost" size="icon">
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Shopping Cart</span>
      </Button>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
        <span className="sr-only">User</span>
      </Button>
    </div>
  );
}
export default SearchBar;
