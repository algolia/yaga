import Header from "@/components/blocks/Header/Header"; // Import the new Header component
import Body from "@/components/blocks/Body/Body"; // Import the new Body component
import { useState } from "react";

import { InstantSearch, Configure } from "react-instantsearch";

import { algoliasearch } from "algoliasearch";

const searchClient = algoliasearch(
  "L6H08IIJVI",
  "0405e5887d6a986545f82f2f7f9b99b8"
);

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");


  return (
    <InstantSearch searchClient={searchClient} indexName="my_first_index">
      <Configure hitsPerPage={42} />

      <div className="min-h-screen bg-background">
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Body
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

      </div>
    </InstantSearch>
  );
}

export default App;
