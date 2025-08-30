import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Taskpage from "./components/taskpage/Taskpage";



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function clearSelection() {
    return setSelectedCategory(null);
  }

  return (
    <div className={`${selectedCategory === null ? "container" : "focused-view"}`} >
      <div className={`${selectedCategory !== null ? "sidebar": ""} `}>
        <Sidebar selectedCategory={selectedCategory} onSelectedCategory={setSelectedCategory} />
      </div>
      
      <div className="taskpage">
        <Taskpage selectedCategory={selectedCategory} clearSelection={clearSelection} />
      </div>
    </div>
    
  )


}

export default App;