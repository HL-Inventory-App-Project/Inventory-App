import React from 'react'

function ItemCard({ link, name, src, description, price, category }) {
  return (
    <div>
    	<img src={src}></img>
		<div>
    		<h3>{name}</h3>
			<h4>£{price}</h4>
    		<p>{description}</p>
			<h4>Category:</h4>
    		<p>{category}</p>
		</div>
    </div>
  )
}

export default ItemCard
