import React from 'react'
import styles from "./ItemsStyles.module.css";

function ItemsCard({ link, name, src, description, price, category }) {
  return (
    <div className={styles.item}>
    	<img src={src}></img>
		<div className={styles.itemText}>
    		<h3>{name}</h3>
			<h4>£{price}</h4>
    		<p>{description}</p>
			<h4>Category:</h4>
    		<p>{category}</p>
		</div>
    </div>
  )
}

export default ItemsCard
