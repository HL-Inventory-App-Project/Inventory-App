import React from 'react'

function ItemsCard({ link, name, src, description, price, category }) {
  return (
    <div className="item">
    	<img src={src}></img>
    	<h3>{name}</h3>
    	<p>{description}</p>
    	<h4>{price}</h4>
    	<h4>{category}</h4>
    </div>
  )
}

export default ItemsCard
