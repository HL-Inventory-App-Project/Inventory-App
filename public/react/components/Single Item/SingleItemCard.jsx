import React from 'react'
import styles from "./ItemStyles.module.css";

function ItemCard({ link, name, src, description, price, category }) {

	async function deleteItem() {
		try {
		  const response = await fetch("http://localhost:3000/api/items" + window.location.pathname, {
			method: 'DELETE'
		  }
		  );
		  window.location.pathname = "";
		} catch (err) {
		  console.log("There was an error deleting item", err);
		}
	  }

	  function goHome() {
		window.location.pathname = "";
	  }

  return (
	<a className={styles.item}>
		<div className={styles.itemText}>
			<h3>{name}</h3>
			<h4>£{price}</h4>
			<p>{description}</p>
			<h4>Category:</h4>
			<p>{category}</p>
			<div>
				<button onClick={deleteItem}><span>Delete Item</span></button>
				<button onClick={goHome}><span>Back to Home</span></button>
			</div>
		</div>
		<img src={src}></img>
	</a>
  )
}

export default ItemCard
