

// Sample product data

import Sidebar from "./SideBar/SideBar";

import Results from "./Results/Results";
import { useInstantSearch } from "react-instantsearch";


function Body({ selectedCategory, setSelectedCategory }) {
  const { uiState } = useInstantSearch();

  console.log(uiState);
  return (
   <>
{!uiState.my_first_index.query && !uiState.my_first_index.refinementList ? (
  <img className='' src="https://utfs.io/f/XwfscfqitlDZ9PnGvSFvXqKFahWzSdBJACsx3HgPTm0uc1rk" alt="Empty Search" />
):(
<div className="py-6 grid grid-cols-12 gap-6 mx-10">
<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
<Results />
</div>
)}

</> 



  );
}

export default Body;