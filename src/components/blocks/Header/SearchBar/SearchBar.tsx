
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
const categories = [
  "All Products",
  "Electronics",
  "Furniture",
  "Clothing",
  "Books",
  "Sports",
  "Home & Garden"
];


function SearchBar() {
  return (

              <div className="flex items-center gap-4 mb-4">
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
                    className="block px-2 py-1 text-lg"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          
          <h1 className="text-xl font-bold hidden md:block">Store</h1>
          
          <div className="flex-1 mx-4">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 w-full"
                />
              </div>
            </form>
          </div>
          
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>

  );
}
export default SearchBar;