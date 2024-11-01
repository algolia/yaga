

// Sample product data

import Sidebar from "./SideBar/SideBar";

import Results from "./Results/Results";



function Body({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="py-6 grid grid-cols-12 gap-6 mx-10">

<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
<Results />

    </div>
  );
}

export default Body;
