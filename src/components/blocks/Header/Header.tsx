import NavBar from './NavBar/NavBar'; // Import the new NavBar component
import SearchBar from './SearchBar/SearchBar';


function Header({ selectedCategory, setSelectedCategory, isVisible }) {
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
