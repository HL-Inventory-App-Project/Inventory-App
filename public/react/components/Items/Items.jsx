import React, { useEffect, useState } from "react";
import styles from "./ItemsStyles.module.css";
import ItemsCard from './ItemsCard';
import bread from "../../../assets/bread.png";
import bread2 from "../../../assets/bread2.png"
import bread3 from "../../../assets/bread3.png"

function Items() {
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

  return ( <>
    <h1>Items</h1>
    <section id="items">
      <div className={styles.itemsContainer}>
	  {items.map((item) => <ItemsCard name={item.name} description={item.description} price={item.price} category={item.category} src={item.image} link="random"/>)}
      </div>
    </section>
    </>
  )
}

export default Items
