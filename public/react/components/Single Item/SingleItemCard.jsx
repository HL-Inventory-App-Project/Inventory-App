import React from 'react'

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
    <div>
    	<img src={src}></img>
		<div>
    		<h3>{name}</h3>
			<h4>£{price}</h4>
    		<p>{description}</p>
			<h4>Category:</h4>
    		<p>{category}</p>
			<button onClick={deleteItem}>Delete Item</button>
			<button onClick={goHome}>Back to Home</button>
		</div>
    </div>
  )
}

export default ItemCard
