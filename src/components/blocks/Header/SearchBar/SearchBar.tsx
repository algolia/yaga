import { Search, ShoppingCart, Menu, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  return (
    <div className="flex items-center gap-4 mb-4 justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
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


      <div className="flex-1 mx-4 flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 501 501"
        className=" w-8 hidden md:block mx-4"
      >
        <path
          fill="#003DFF"
          d="M249.997.0299683C113.377.0299683 1.99633 110.19.0263314 246.35-1.97367 384.64 110.217 499.22 248.517 500.02c42.71.25 83.849-10.2 120.379-30.05 3.56-1.93 4.111-6.83 1.081-9.52l-23.391-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5 10.85-53.209 16.39-81.759 16.04-111.75-1.37-202.0407-94.35-200.2607-206.1C48.9563 136.4 139.257 47.18 249.997 47.18h202.829v360.51L337.747 305.44c-3.72-3.31-9.431-2.66-12.431 1.31-18.47 24.46-48.56 39.67-81.98 37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28 39.65-101.58 94.07-101.58 49.21 0 89.741 37.88 93.971 86.01.38 4.28 2.309 8.28 5.529 11.13l29.971 26.57c3.4 3.01 8.799 1.17 9.629-3.3 2.16-11.55 2.92-23.6 2.07-35.95-4.83-70.39-61.84-127.01-132.26-131.35-80.73-4.98-148.23 58.18-150.37 137.35-2.09 77.15 61.12 143.66 138.28 145.36 32.21.71 62.07-9.42 86.2-26.97l150.36 133.29c6.45 5.71 16.62 1.14 16.62-7.48V9.48999c0-5.24-4.249-9.48999-9.489-9.48999H250.006l-.009.0299683Z"
        ></path>
      </svg>
        <form className="w-full max-w-screen-md hidden xs:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-30 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 w-full"
            />
          </div>
        </form>
        <Button variant="ghost" size="icon" className="xs:hidden">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      </div>

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
