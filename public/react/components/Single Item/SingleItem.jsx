import React, { useEffect, useState } from "react";
import ItemCard from "./SingleItemCard";

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

function SingleItem() {
  const [item, setItem] = useState([]);

  async function fetchItem() {
    try {
      const response = await fetch(
        `${apiURL}/items${window.location.pathname}`
      );
      const itemData = await response.json();
      setItem(itemData);
    } catch (err) {
      console.log("There was an error fetching items", err);
    }
  }

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      <h1>Single Item</h1>
      <ItemCard
        name={item.name}
        description={item.description}
        price={item.price}
        category={item.category}
        src={item.image}
        link={item.id}
      />
    </>
  );
}

export default SingleItem;
