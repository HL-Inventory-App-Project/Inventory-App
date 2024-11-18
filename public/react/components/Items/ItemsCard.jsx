import React from 'react'

function ItemsCard({ link, name, src, description, price, category}) {
  return (
    <a href={link}>
    <img src={src}></img>
    <h3>{name}</h3>
    <p>{description}</p>
    <h4>{price}</h4>
    <h4>{category}</h4>
    </a>
  )
}

export default ItemsCard