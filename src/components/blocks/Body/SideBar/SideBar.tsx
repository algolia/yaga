
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const categories = [
    "All Products",
    "Electronics",
    "Furniture",
    "Clothing",
    "Books",
    "Sports",
    "Home & Garden"
  ];

function Sidebar({selectedCategory, setSelectedCategory}) {
  return (
    <aside className="hidden md:block col-span-3 space-y-4">
    <nav className="space-y-2">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start",
            selectedCategory === category && "bg-muted"
          )}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Button>
      ))}
    </nav>
  </aside>
  );
}

export default Sidebar;