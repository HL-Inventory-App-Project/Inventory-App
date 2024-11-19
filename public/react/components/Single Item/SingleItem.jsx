import React, { useEffect, useState } from "react";
import ItemCard from "./SingleItemCard";

function SingleItem() {
  const [item, setItem] = useState([]);

  async function fetchItem() {
    try {
      const response = await fetch(
        "http://localhost:3000/api/items" + window.location.pathname
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

  console.log(item);

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
