import React, { useEffect, useState } from "react";
import styles from "./ItemsStyles.module.css";
import ItemsCard from './ItemsCard';


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

  const [formName, setName] = useState("");
  const [formDescription, setDescription] = useState("");
  const [formPrice, setPrice] = useState(0);
  const [formCategory, setCategory] = useState("men's clothing");
  const [formImage, setImage] = useState("");

  const [formHidden, setHidden] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/items" + window.location.pathname,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formName,
            description: formDescription,
            price: Number(formPrice),
            category: formCategory,
            image: formImage,
          }),
        }
      );
      window.location.reload();
    } catch (err) {
      console.log("There was an error deleting item", err);
    }
  }

  function hideForm() {
    setHidden(!formHidden);
  }

  useEffect(() => {
    // Fetch the items
    fetchItems()
  }, []);

  return items.length==0 ? ( <>
  <h1>Items</h1>
  <h2>There are no items available.</h2>
  </>)
      : 
   ( <>
    <h1>Items</h1>
    <button onClick={hideForm}>
          <span>Add Item</span>
        </button>

        {formHidden ? null : (
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
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
              <textarea
                type="text"
                value={formDescription}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Enter price:
              <input
                type="number"
                value={formPrice}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label>
              Enter category:
              <select onChange={(e) => setCategory(e.target.value)} className="category">
                type="text"
                value={formCategory}
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
              </select>
            </label>
            <label>
              Enter image:
              <input
                type="text"
                value={formImage}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit"/>
          </form>
        )}
    <section id="items">
      <div className={styles.itemsContainer}>
	  {items.map((item, index) => 
    <ItemsCard 
    key={index}
    name={item.name} 
    description={item.description} 
    price={item.price} 
    category={item.category} 
    src={item.image} 
    link={item.id}
    />
    )}
      </div>
    
    </section>
    </>
  )
     }
    


export default Items
