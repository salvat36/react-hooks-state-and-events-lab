import React from "react";
import { useState } from "react";


   
function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)
  const appClass = isAdded ? "in-cart" : ""
  
      function handleToggle () {
        setIsAdded(isAdded => !isAdded)
      }
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleToggle} className={isAdded ? "remove" : "add"}>{isAdded ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
