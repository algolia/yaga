import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from 'react'; // Import FC for functional component type

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const categories = [
  "All Products",
  "Electronics",
  "Furniture",
  "Clothing",
  "Books",
  "Sports",
  "Home & Garden"
];

function Header({ selectedCategory, setSelectedCategory, isVisible }) {
  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container-fluid flex flex-col py-4 w-full">
        {/* Top Bar */}
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

        {/* Navigation Bar */}
        <NavigationMenu className="hidden md:flex justify-center w-full">
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                New Arrivals
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Best Sellers
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Deals
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Collections
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Brands
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;
