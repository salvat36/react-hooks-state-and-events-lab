import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
const [userSelected, setUserSelected]  = useState("All")


const selectCategory = (e) => {
  const value = e.target.value
  setUserSelected(value)

}

const filteredItems = items.filter(item => {
 return userSelected === "All" || item.category === userSelected
})




  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={selectCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
