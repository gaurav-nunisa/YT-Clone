import { PageHeader } from "./layout/PageHeader";
import "./App.css";
import { CategoryPills } from "./components/CategoryPills";
import { categoriesHome } from "./data/home";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categoriesHome[0])
  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader></PageHeader>
        <div className="grid grid-cols-[auto,1fr] overflow-auto">
          <div>sidebar</div>
          <div className="overflow-x-hidden px-8 py-1">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills categories={categoriesHome} selectedCategory  = {selectedCategory} onSelect ={setSelectedCategory}/>
            </div>
          </div>
          {/*todo*/}
         
        </div>
      </div>
    </>
  );
}

export default App;
