import React from 'react';
import styles from "./ItemsStyles.module.css";
import ItemsCard from './ItemsCard';
import bread from "../../../assets/bread.png";

function Items() {
  return (
    <section>
      <h1>Items</h1>
      <div className={styles.itemsContainer}>
      <ItemsCard
      link="https://www.youtube.com/"
      src={bread}
      name="Item 1"
      description="Piece of bread"
      price="£4.20"
      category="bread"
      />
      </div>
    </section>
  )
}

export default Items