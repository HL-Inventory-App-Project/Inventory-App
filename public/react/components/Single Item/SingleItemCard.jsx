import React from "react";
import { useState } from "react";
import styles from "./ItemStyles.module.css";

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

function ItemCard({ link, name, src, description, price, category }) {
  async function deleteItem() {
    try {
      const response = await fetch(
        `${apiURL}/items${window.location.pathname}`,
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
  const [confirmDelete, setConfirmDelete] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `${apiURL}/items${window.location.pathname}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formName||name,
            description: formDescription||description,
            price: Number(formPrice)||Number(price),
            category: formCategory||category,
            image: formImage||src,
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

  function goHome() {
    window.location.pathname = "";
  }

  function handleConfirm() {
    setConfirmDelete(true)
  }

  function handleDelete() {
    deleteItem()
    setConfirmDelete(false)
  }

  return (
    <div className={styles.item}>
      <img src={src}></img>
      <div className={styles.itemText}>
        <h3>{name}</h3>
        <h4>£{price}</h4>
        <p>{description}</p>
        <h4>Category:</h4>
        <p>{category}</p>
        <div>
          <button onClick={hideForm}>
            <span>Edit Item</span>
          </button>

          <button onClick={confirmDelete ? handleDelete : handleConfirm}>
            <span>{confirmDelete ? "Are you sure?" : "Delete Item"}</span>
          </button>

          <button onClick={goHome}>
            <span>Back to Home</span>
          </button>
        </div>
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
                value={formName || name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Enter description:
              <textarea
                type="text"
                value={formDescription || description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <label>
              Enter price:
	      <div className={styles.priceField}>
	        <span>£</span>
                <input
                  type="number"
                  value={formPrice >= 0 ? formPrice : price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
	      </div>
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
                value={formImage || src}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </label>
            <input type="submit" value="Submit"/>
          </form>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
