import React from "react";
import { useState } from "react";

function ItemCard({ link, name, src, description, price, category }) {
  async function deleteItem() {
    try {
      const response = await fetch(
        "http://localhost:3000/api/items" + window.location.pathname,
        {
          method: "DELETE",
        }
      );
      window.location.pathname = "";
    } catch (err) {
      console.log("There was an error deleting item", err);
    }
  }
    
 	const [formName, setName] = useState(name);
    const [formDescription, setDescription] = useState(description);
    const [formPrice, setPrice] = useState(price);
    const [formCategory, setCategory] = useState(category);
    const [formImage, setImage] = useState(src);
	const [formHidden, setHidden] = useState(true);

    async function handleSubmit (event) {
      event.preventDefault();
		console.log("test")
		try {
		  const response = await fetch(
			"http://localhost:3000/api/items" + window.location.pathname,
			{
			  method: "PUT",
			  headers: { "Content-Type": "application/json", },
			  body: JSON.stringify({
				name: formName,
				description: formDescription,
				price: formPrice,
				category: formCategory,
				image: formImage
			  })
			}
		  );
		  window.location.reload();
		} catch (err) {
		  console.log("There was an error deleting item", err);
		}

    };
  
	function hideForm() {
		setHidden(!formHidden);
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
        <button onClick={hideForm}>Edit Item</button>
		
        {formHidden ? null : <form onSubmit={(event) => {handleSubmit(event)}}>
          <label>
            Enter name:
            <input
              type="text"
              value={formName}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Enter description:
            <input
              type="text"
              value={formDescription}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Enter price:
            <input
              type="text"
              value={formPrice}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Enter category:
            <input
              type="text"
              value={formCategory}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label>
            Enter image:
            <input
              type="text"
              value={formImage}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form> }
        <button onClick={deleteItem}>Delete Item</button>
        <button onClick={goHome}>Back to Home</button>
      </div>
    </div>
  );
}

export default ItemCard;
