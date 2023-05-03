import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {


const [isDark, setIsDark] = useState(false)
const appClass = isDark ? "App dark" : "App light"

    function handleToggle () {
      setIsDark((isDark) => !isDark)
    }
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>{isDark ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
  
}

export default App;
