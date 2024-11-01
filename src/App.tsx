import Header from "@/components/blocks/Header/Header"; // Import the new Header component
import Body from "@/components/blocks/Body/Body"; // Import the new Body component
import { useState, useEffect } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;
  const scrollThreshold = 100; // Set the scroll threshold (in pixels)

  const handleScroll = () => {
    // Check if the screen width is less than a certain size (e.g., 768px for mobile)
    if (window.innerWidth < 768) {
      if (window.scrollY > scrollThreshold) { // Check if scrolled past the threshold
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true); // Reset visibility if above threshold
      }
    } else {
      setIsVisible(true); // Always show header on larger screens
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isVisible={isVisible} />
      <Body selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

export default App;