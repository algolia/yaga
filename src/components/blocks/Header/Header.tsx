import NavBar from './NavBar/NavBar'; // Import the new NavBar component
import SearchBar from './SearchBar/SearchBar';
import { useState, useEffect } from 'react';



function Header({ selectedCategory, setSelectedCategory }) {

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
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container-fluid flex flex-col py-4 w-full">
        {/* Top Bar */}
        <SearchBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <NavBar/>
      </div>
    </header> 
  );
}

export default Header;
