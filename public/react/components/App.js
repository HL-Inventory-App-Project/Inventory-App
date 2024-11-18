import React, { useEffect, useState } from "react";
import Items from "./Items/Items.jsx";

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the items
  }, []);

  return (
    <>
      <h1>Inventory App</h1>
      <Items />
    </>
  );
}

export default App;
