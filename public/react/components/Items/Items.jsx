import React from 'react';
import styles from "./ItemsStyles.module.css";
import ItemsCard from './ItemsCard';
import bread from "../../../assets/bread.png";
import bread2 from "../../../assets/bread2.png"
import bread3 from "../../../assets/bread3.png"

function Items() {
  return ( <>
    <h1>Items</h1>
    <section id="items">
      <div className={styles.itemsContainer}>
      <ItemsCard
      link="https://www.youtube.com/watch?v=J1DAmmROUX8"
      src={bread}
      name="Item 1"
      description="Piece of bread"
      price="£4.20"
      category="bread"
      />
      <ItemsCard
      link="https://www.youtube.com/watch?v=J1DAmmROUX8"
      src={bread2}
      name="Item 2"
      description="Piece of bread2"
      price="£4.20"
      category="bread2"
      />
      <ItemsCard
      link="https://www.youtube.com/watch?v=J1DAmmROUX8"
      src={bread3}
      name="Item 3"
      description="Piece of bread3"
      price="£4.20"
      category="bread3"
      />
      </div>
    </section>
    </>
  )
}

export default Items