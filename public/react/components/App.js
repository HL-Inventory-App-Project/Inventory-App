import React, { useEffect, useState } from "react";
import Items from "./Items/Items.jsx";

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

function App() {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    try{
      const response = await fetch("http://localhost:3000/api/items");
    const itemsData = await response.json();
    setItems(itemsData);
    }
    catch (err) {
      console.log("There was an error fetching items", err);
    }
    }
  

  useEffect(() => {
    // Fetch the items
    fetchItems()
  }, []);

  return (
    <>
      <h1>Inventory App</h1>
      <Items />
    </>
  );
}

export default App;
